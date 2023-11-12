const express = require("express");

const app = express();

app.use(express.json());

const records = {};

// GET request by params
app.get("/records/:id", (req, res) => {
  try {
    console.log("GET Request received for id: ", req.params.id)
    var record = records[req.params.id];
    if (record) {
      res.send(record);
    } else {
      res.send({ "result": "Not found" });
    }
  } catch (err) {
    console.log(err);
  }

});

// POST request by params
app.post("/records/:id", (req, res) => {
  try {
    console.log("POST Request received for id: ", req.params.id)
    records[req.params.id] = req.body;
    res.send(records[req.params.id]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating new record");
  }
});

// PUT request by params
app.put("/records/:id", (req, res) => {
  try {
    console.log("PUT Request received for id: ", req.params.id)
    records[req.params.id] = req.body;
    res.send(records[req.params.id]);
  } catch (err) {
    console.log(err);
  }
});

// DELETE request by params
app.delete("/records/:id", async (req, res) => {
  try {
    console.log("DELETE Request received for id: ", req.params.id)
    var record = records[req.params.id];
    delete records[req.params.id];
    res.send(record);
  } catch (err) {
    console.log(err);
  }
});

// GET request by query
app.get("/records-query", async (req, res) => {
  try {
    console.log("GET Request(query) received for id: ", req.query.id)
    var record = records[req.query.id];
    if (record) {
      res.send(record);
    } else {
      res.send({ "result": "Not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

// POST request by query
app.post("/records-query", async (req, res) => {
  try {
    console.log("POST Request(query) received for id: ", req.query.id)
    records[req.query.id] = req.body;
    res.send(records[req.query.id]);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating new record");
  }
});

// PUT request by query
app.put("/records-query", async (req, res) => {
  try {
    console.log("PUT Request(query) received for id: ", req.query.id)
    records[req.query.id] = req.body;
    res.send(records[req.query.id]);
  } catch (err) {
    console.log(err);
  }
});

// DELETE request by query
app.delete("/records-query", async (req, res) => {
  try {
    console.log("DELETE Request(query) received for id: ", req.query.id)
    var record = records[req.query.id];
    delete records[req.query.id];
    res.send(record);
  } catch (err) {
    console.log(err);
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});