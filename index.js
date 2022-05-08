const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.mvvqt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("wareHouse").collection("inventory");
  // perform actions on the collection object
  console.log("connected with Mongodb ");
  client.close();
});

app.get("/", (req, res) => {
  res.send("Running Warehouse Management Server");
});

app.listen(port, () => {
  console.log("Listening to Port", port);
});
