const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5100;
const qs = require("querystring");
const cors = require("cors");
const schedule = require("node-schedule");

const corsOptions = {
  // origin: "https://exhi-lover.com",
  // You can add more allowed origins if needed, like: ['https://example1.com', 'https://example2.com']
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mysql = require("mysql"); //

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

connection.connect();

const task = schedule.scheduleJob("0 0 * * *", () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format

  const firstQuery = `
    UPDATE exhilove_exhilove.shows
    SET on_display = 0
    WHERE show_term_end < ? AND on_display = 1
  `;

  connection.query(firstQuery, [currentDate], (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });

  const secondQeury = `
    UPDATE exhilove_exhilove.galleries g
    SET g.ON_DISPLAY = 1
    WHERE EXISTS (
      SELECT 1
      FROM exhilove_exhilove.shows s
      WHERE s.gallery = g.id AND s.on_display = 1
    );


`;
  connection.query(secondQeury, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });

  const thirdQuery = `
    UPDATE exhilove_exhilove.galleries g
    SET g.ON_DISPLAY = 0
    WHERE NOT EXISTS (
      SELECT 1
      FROM exhilove_exhilove.shows s
      WHERE s.gallery = g.id AND s.on_display = 1
    );
  `;
  connection.query(thirdQuery, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });
});

const secondTask = schedule.scheduleJob("0 6 * * *", () => {
  const currentDate = new Date().toISOString().split("T")[0]; // Get the current date in YYYY-MM-DD format

  const firstQuery = `
    UPDATE exhilove_exhilove.shows
    SET on_display = 0
    WHERE show_term_end < ? AND on_display = 1
  `;

  connection.query(firstQuery, [currentDate], (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });

  const secondQeury = `
    UPDATE exhilove_exhilove.galleries g
    SET g.ON_DISPLAY = 1
    WHERE EXISTS (
      SELECT 1
      FROM exhilove_exhilove.shows s
      WHERE s.gallery = g.id AND s.on_display = 1
    );`;
  connection.query(secondQeury, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });

  const thirdQuery = `
    UPDATE exhilove_exhilove.galleries g
    SET g.ON_DISPLAY = 0
    WHERE NOT EXISTS (
      SELECT 1
      FROM exhilove_exhilove.shows s
      WHERE s.gallery = g.id AND s.on_display = 1
    );
  `;
  connection.query(thirdQuery, (err, result) => {
    if (err) {
      console.error("Error updating data:", err);
    } else {
      console.log("Data updated successfully");
    }
  });
});

// 전체 shows
app.get("/api/show", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = `SELECT * FROM exhilove_exhilove.shows WHERE on_display = 1 `;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// 전체 shows sorting ver.
app.get("/api/show/:paginationValue/:selectedValue", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const selectedValue = parseInt(req.params.selectedValue, 10);
  const paginationValue = parseInt(req.params.paginationValue, 10);
  let order = "";

  if (selectedValue === 1) {
    order = "AND show_term_end IS NOT NULL ORDER BY show_term_start DESC";
  } else if (selectedValue === 2) {
    order = "AND show_term_end IS NOT NULL ORDER BY show_term_start";
  } else if (selectedValue === 3) {
    order = "AND show_term_end IS NOT NULL ORDER BY show_term_end";
  } else if (selectedValue === 4) {
    order = "AND show_term_end IS NULL";
  }
  const query =
    `SELECT * FROM exhilove_exhilove.shows WHERE on_display = 1 ` +
    `${order} LIMIT ${(paginationValue - 1) * 10}, 10`;
  const pageQuery = `SELECT COUNT(*) FROM exhilove_exhilove.shows WHERE on_display = 1 `;

  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      connection.query(pageQuery, (pageErr, pageRows, pageFields) => {
        if (pageErr) {
          console.error(pageErr);
          res.status(500).send("Error fetching page count");
        } else {
          const totalCount = parseInt(pageRows[0]["COUNT(*)"], 10);
          res.send({ rows, totalCount });
        }
      });
    }
  });
});

// 검색 > shows
app.get(
  "/api/shows/search/:paginationValue/:searchQuery/:selectedValue",
  (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const searchQuery = req.params.searchQuery;
    const selectedValue = parseInt(req.params.selectedValue, 10);
    const paginationValue = parseInt(req.params.paginationValue, 10);

    console.log(searchQuery);
    let order = "";

    if (selectedValue === 1) {
      order = "AND show_term_end IS NOT NULL ORDER BY show_term_start DESC";
    } else if (selectedValue === 2) {
      order = "AND show_term_end IS NOT NULL ORDER BY show_term_start";
    } else if (selectedValue === 3) {
      order = "AND show_term_end IS NOT NULL ORDER BY show_term_end";
    } else if (selectedValue === 4) {
      order = "AND show_term_end IS NULL";
    }

    const query =
      `SELECT * FROM exhilove_exhilove.shows WHERE show_search LIKE ? AND on_display = 1 ${order} ` +
      `LIMIT ${(paginationValue - 1) * 10}, 10`;

    const pageQuery =
      `SELECT COUNT(*) FROM exhilove_exhilove.shows ` +
      `WHERE show_search LIKE ? AND on_display = 1 `;

    connection.query(query, [`%${searchQuery}%`], (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        connection.query(
          pageQuery,
          [`%${searchQuery}%`],
          (pageErr, pageRows, pageFields) => {
            if (pageErr) {
              console.error(pageErr);
              res.status(500).send("Error fetching page count");
            } else {
              const totalCount = parseInt(pageRows[0]["COUNT(*)"], 10);
              console.log(rows);
              res.send({ rows, totalCount });
            }
          }
        );
      }
    });
  }
);

//show id로 show 불러오기
app.get("/api/shows/id/:showsId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const showsId = req.params.showsId.split("&");
  const query = "SELECT * FROM exhilove_exhilove.shows WHERE id IN (?)";
  connection.query(query, [showsId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// 전시회의 tag 불러오기
app.get("/api/exhibition_tags/show/:showId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const showId = req.params.showId;
  const query = `SELECT * FROM exhilove_exhilove.exhibition_tags WHERE exhibition_id = ?`;
  connection.query(query, [showId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// 전시회 tag 불러오기 (in: show_id(s), out: tag_id(s) )
app.get("/api/exhibition_tags/shows/:showsId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const showId = req.params.showsId.split("&");
  const query = `SELECT DISTINCT tag_id FROM exhilove_exhilove.exhibition_tags WHERE exhibition_id in (?)`;
  connection.query(query, [showId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// 태그아이디로 전시회 id get
app.get("/api/exhibition_tags/tags/:tagIds", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tagIds = req.params.tagIds.split("&");
  const query = `SELECT DISTINCT exhibition_id FROM exhilove_exhilove.exhibition_tags WHERE tag_id IN (?) GROUP BY exhibition_id HAVING COUNT(DISTINCT tag_id) = ${tagIds.length}`;
  connection.query(query, [tagIds], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// tag id로  show id get
app.get("/api/exhibition_tags/tags/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = `SELECT DISTINCT tag_id FROM exhilove_exhilove.exhibition_tags`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

//tag id로  tag name 맵핑
app.get("/api/tags/:tagId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tagId = req.params.tagId;
  const query = `SELECT tag_name FROM exhilove_exhilove.tags WHERE id LIKE ?`;
  connection.query(query, [tagId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

//갤러리 id로 갤러리 찾기
app.get("/api/gallery/information/:galleryId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const galleryId = req.params.galleryId;
  const query = `SELECT * FROM exhilove_exhilove.galleries WHERE id LIKE ?`;
  connection.query(query, [galleryId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

app.get("/api/gallery/location", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = `SELECT id, gallery_name, gallery_add_word, gallery_add_tude, gallery_phone_num, site, on_display FROM exhilove_exhilove.galleries;`;
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

app.get("/api/gallery/shows/:id", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const galleryId = req.params.id;
  const query =
    "SELECT id, show_name, show_artist, show_term_start, show_term_end, show_place_eng FROM exhilove_exhilove.shows WHERE on_display=1 AND gallery=?";
  connection.query(query, [galleryId], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});


// Serve static assets
app.use(express.static(path.join(__dirname, "../public_html")));

// Serve index.html for all other requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public_html", "index.html"));
});

app.listen(port, () => console.log(`listening ${port}`));
