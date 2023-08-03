const path = require("path");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5100;
const qs = require("querystring");
const cors = require("cors");

const corsOptions = {
  origin: "https://exhi-lover.com",
  // origin: ["https://exhi-lover.com", "https://backend.exhi-lover.com"],
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

// 전체 shows
app.get("/api/shows", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = "SELECT * FROM exhilove_exhilove.shows";
  connection.query(query, (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

// 검색 > shows
app.get("/api/shows/search/:searchQuery", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const searchQuery = req.params.searchQuery;
  const query = `SELECT * FROM exhilove_exhilove.shows WHERE show_search LIKE ?`;
  connection.query(query, [`%${searchQuery}%`], (err, rows, fields) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error fetching shows");
    } else {
      res.send(rows);
    }
  });
});

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
  // const query = `SELECT * FROM exhilove_exhilove.exhibition_tags WHERE exhibition_id LIKE ?`;
  const query = `SELECT * FROM exhilove_exhilove.exhibition_tags WHERE exhibition_id LIKE CONCAT('%', ?, '%')`;
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
app.get("/api/gallery/information", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
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
  const query = `SELECT id, gallery_name, gallery_add_tude FROM exhilove_exhilove.galleries;`;
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
    "SELECT id, show_name, gallery FROM exhilove_exhilove.shows WHERE on_display=1 AND gallery=?";
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
