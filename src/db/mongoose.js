const mongoose = require("mongoose");
const validator = require('validator')

const connection = async () => {
  const uri =
    "mongodb+srv://gxc19:<password>@practice-cluster-5rwoc.mongodb.net/test?retryWrites=true&w=majority";

    

  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log("connection made");
  } catch (error) {
    console.log(error);
  }
};

connection();

module.exports = {
    validator,
    mongoose,
    connection
}