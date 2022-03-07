const firebase = require("firebase-admin");
//post is create
//get is read
//patch is update

const { connectDb } = require("../dbConnect");

exports.createIdea = (req, res) => {
  if (
    !req.body ||
    !req.body.title ||
    !req.body.description ||
    !req.body.lookingFor ||
    !req.body.createdBy
  ) {
    res.status(400).send({
      success: false,
      message: "invalid request",
    });
    return;
  }
  const db = connectDb();
  //then create your new user info manually
  const createIdea = {
    title: req.body.title.toUpperCase(),
    description: req.body.description,
    lookingFor: req.body.lookingFor,
    createdBy: req.body.createdBy,
    dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
  };
  //then create your database
  db.collection("Ideas")
    .add(createIdea)
    .then(() => {
      res.status(201).send({
        success: true,
        message: "idea created",
      });
    })
    .catch((err) =>
      res.status(500).send({
        success: false,
        message: err.message,
        error: err,
      })
    );
};
