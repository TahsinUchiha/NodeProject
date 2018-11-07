const express = require("express");
const axios = require('axios')
const path = require("path");
const open = require("open");
const port = 3000;
const app = express();
// express.static(NodeProject, [options])
app.use(express.static("src"))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"../src/index.html"));
    });


app.get("/getDogs", (req, res) => {
    axios.get('https://dog.ceo/api/breeds/list/all').then(response => res.send(response.data)) ;
   
});
 // console.log(response);
    // console.log(`Got ${Object.entries(response.data.message).length} breeds`);
// 
app.get("/getCoin", (req, res) => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(response => res.send(response.data)) ;
});  


app.listen(port, (err) => {
if(err){
console.log(err);
} else{
open("http://localhost:" + port);
}
});
