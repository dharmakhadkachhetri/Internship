require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect(err => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to MySQL database");
});

// 1️⃣ CREATE - Add a new dummy record
app.post("/dummy", (req, res) => {
  const { name, description, status } = req.body;
  db.query(
    "INSERT INTO dummy (name, description, status) VALUES (?, ?, ?)",
    [name, description, status || "active"],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "Dummy record added", id: result.insertId });
    }
  );
});

// 2️⃣ READ - Get all dummy records
app.get("/dummy", (req, res) => {
  db.query("SELECT * FROM dummy", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// 3️⃣ READ - Get a single dummy record by ID
app.get("/dummy/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM dummy WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result[0] || {});
  });
});

// 4️⃣ UPDATE - Modify an existing dummy record
app.put("/dummy/:id", (req, res) => {
  const { name, description, status } = req.body;
  const { id } = req.params;
  db.query(
    "UPDATE dummy SET name = ?, description = ?, status = ? WHERE id = ?",
    [name, description, status, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Dummy record updated" });
    }
  );
});

// 5️⃣ DELETE - Remove a dummy record
app.delete("/dummy/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM dummy WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Dummy record deleted" });
  });
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
