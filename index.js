const express = require("express");
const { Client } = require("undici");

const app = express();
const client = new Client("http://localhost:4000");

app.use(express.json());

app.get("/records/:id", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records/${req.params.id}`,
      method: "GET",
    });
    const record = await response.body.json();
    res.send(record);
  } catch (err) {
    console.error(err);
  }
});

app.post("/records/:id", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records/${req.params.id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const newRecord = await response.body.json();
    res.send(newRecord);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating new record");
  }
});

app.put("/records/:id", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records/${req.params.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const updatedRecord = await response.body.json();
    res.send(updatedRecord);
  } catch (err) {
    console.error(err);
  }
});

app.delete("/records/:id", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records/${req.params.id}`,
      method: "DELETE",
    });
    const deletedRecord = await response.body.json();
    res.send(deletedRecord);
  } catch (err) {
    console.error(err);
  }
});

app.get("/records-query", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records-query?id=${req.query.id}`,
      method: "GET",
    });
    const record = await response.body.json();
    res.send(record);
  } catch (err) {
    console.error(err);
  }
});

app.post("/records-query", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records-query?id=${req.query.id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const newRecord = await response.body.json();
    res.send(newRecord);
  } catch (err) {
    console.error(err);
  }
});

app.put("/records-query", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records-query?id=${req.query.id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });
    const updatedRecord = await response.body.json();
    res.send(updatedRecord);
  } catch (err) {
    console.error(err);
  }
});

app.delete("/records-query", async (req, res) => {
  try {
    const response = await client.request({
      path: `/records-query?id=${req.query.id}`,
      method: "DELETE",
    });
    const deletedRecord = await response.body.json();
    res.send(deletedRecord);
  } catch (err) {
    console.error(err);
  }
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});