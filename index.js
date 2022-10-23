const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
  extended: true
}));

app.post('/userlogin.html', (req, res) => {
  res.sendFile(__dirname + '/userlogin.html');
  app.use(express.static(__dirname));
  const userid = req.body.Userid;
  const pass = req.body.password;
  res.redirect('/userpage1.html');
})

app.listen(4001, console.log("usfds"));