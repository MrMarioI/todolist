const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () =>
  console.log("finally  connected to mongo :)")
);

mongoose.connection.on("error", () =>
  console.log("nope try again :(")
);
