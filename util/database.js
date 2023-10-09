const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

exports.mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://root:chikenfry14@cluster0.eb2pi1b.mongodb.net/shop?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      // console.log('client>>>',client);
      _db = client.db();
      callback()
    })
    .catch((e) => console.log(e));
};

exports.getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No Database Found!";
};
