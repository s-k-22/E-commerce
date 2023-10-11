const mongodb = require("mongodb");
const getDb = require("../util/database").getDb;

const objectId = mongodb.ObjectId;

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .find({ _id: new objectId(userId) })
      .next();
  }
}

module.exports = User;
