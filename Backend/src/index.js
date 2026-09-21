const express=require("express")
const App=express()
require('dotenv').config();
const cors = require("cors");
const Paper=require("./routes/paper")

App.use(
  cors({
    origin: "https://papervitran.vercel.app",
    credentials: true, // important for cookies or axios withCredentials
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Parse JSON (optional)
App.use(express.json());

App.use("/paper",Paper)
App.get("/api/file/:fileId", async (req, res) => {
  const fileId = req.params.fileId;
  try {
    const url = `https://drive.google.com/uc?export=download&id=${fileId}`;
    const response = await fetch(url, { redirect: "follow" });
    res.setHeader("Content-Type", "application/pdf");
    response.body.pipe(res);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching file");
  }
});
App.listen(5000,()=>{
  console.log("Server started")
})



