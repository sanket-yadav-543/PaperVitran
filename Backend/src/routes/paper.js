const express=require("express")
const router=express.Router();
const getpaper=require("../controllers/papersController")

router.get("/:branch/:semester",getpaper)




module.exports=router;