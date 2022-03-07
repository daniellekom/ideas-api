const { connectDb } = require("../dbConnect");

exports.getAllideas = (req, res) => {
    //TODO: protetc this route w JWT
    const db = connectDb();
    db.collection("Ideas")
      .get()
      .then((snapshot) => {
        const ideas = snapshot.docs.map((doc) => {
          let idea = doc.data();
          idea.id = doc.id;
          return idea;
        });
        res.send({
          success: true,
          message: "idea received",
          ideas,
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

exports.getIdeabyId = (req, res) => {
    const db = connectDb();
    const {ideaId} = req.params
    db.collection("Ideas")
    .doc(ideaId)
    .get()
    .then((doc)=> {
          let idea = doc.data();
        res.status(200).send(idea)
    })
    .catch(err => res.status(500).send(err))
}

      
   
  