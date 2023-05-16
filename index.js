const express = require('express');
const cors = require('cors')
const app = express()
app.use(cors());
const multer = require('multer')
app.use(express.static('public'))
// const storage = multer.memoryStorage()
// const upload = multer({ storage: storage })
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})
app.post("/api/fileanalyse", multer().single('upfile'), (req, res,next) => {
  // res.json(req.file);
  if(!req.file){
    res.end('Check Logs');
  }else{
    res.json({
      "name": req.file.originalname,
      "type": req.file.mimetype,
      "size": req.file.size
    })
  }
})
app.listen(5500, () => {
  console.log(`listening from 5500 port`)
})