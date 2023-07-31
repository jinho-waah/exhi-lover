const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5100;
const qs = require("querystring");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
});
connection.connect();

// 전체 shows
app.get("/api/shows", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query(
    "SELECT * FROM exhilove_exhilove.shows",
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

// 검색 > shows
app.get("/api/shows/search/:searchQuery", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const searchQuery = req.params.searchQuery;
  connection.query(
    `SELECT * FROM exhilove_exhilove.shows WHERE show_search LIKE '%${searchQuery}%'`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

//show id로 show 불러오기
app.get("/api/shows/id/:showsId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const showsId = req.params.showsId.split("&").join(",");
  connection.query(
    `SELECT * FROM exhilove_exhilove.shows WHERE id IN (${showsId})`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

// 전시회의 tag 불러오기
app.get("/api/exhibition_tags/shows/:showId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const showId = req.params.showId;
  connection.query(
    `SELECT * FROM exhilove_exhilove.exhibition_tags WHERE exhibition_id LIKE '${showId}'`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

// 태그아이디로 전시회 id get
app.get("/api/exhibition_tags/tags/:tagIds", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tagIds = req.params.tagIds.split("&").join(",");
  connection.query(
    `SELECT DISTINCT exhibition_id FROM exhilove_exhilove.exhibition_tags WHERE tag_id IN (${tagIds})`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

// 태그아이디로 전시회 id get
app.get("/api/exhibition_tags/tags/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  connection.query(
    `SELECT DISTINCT tag_id FROM exhilove_exhilove.exhibition_tags`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

//태그 아이디로 태그 이름 맵핑
app.get("/api/tags/:tagId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const tagId = req.params.tagId;
  connection.query(
    `SELECT tag_name FROM exhilove_exhilove.tags WHERE id LIKE '${tagId}'`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

//갤러리 이름으로 갤러리 찾기
app.get("/api/gallery/:galleryId", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const galleryId = req.params.galleryId;
  connection.query(
    `SELECT * FROM exhilove_exhilove.galleries WHERE id LIKE '${galleryId}'`,
    (err, rows, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error fetching shows");
      } else {
        res.send(rows);
      }
    }
  );
});

const path = require("path");

// Serve static assets
app.use(express.static(path.join(__dirname, "../public_html")));

// Serve index.html for all other requests
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public_html", "index.html"));
});

app.listen(port, () => console.log(`listening ${port}`));
