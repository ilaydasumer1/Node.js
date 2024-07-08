//mongoose bu veritabanı ile etkileşim kurmak için yapılandırılmış bir yöntem sağlar.
const mongoose = require("mongoose");

const userShema = new mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
      trim: true,
    },
    lastname: {
      type: "string",
      required: true,
      trim: true,
    },
    email: {
      type: "string",
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
      trim: true,
    },
  },
  { collection: "users", timeseries: true }
);
//şemayı oluşturduk şimdi tanımlayalim

const user = mongoose.model("users", userShema);

//dışarı açalım.

module.exports = user;
