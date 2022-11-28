
const express = require('express');
const app = express();
const fs = require('fs');
const Path = require('path')
const cors = require("cors");
const { get } = require('http');
const { send } = require('process');
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}


// app.use(express.urlencoded())
app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json())

//GET Reqwests 

// show file content
app.get('/',  (req, res) => {  // readFiles,
  //go to file 'public' 
  fs.readdir('public', (err, files) => {

  const filesObject = files.map((file)=>{
    return { fileName: file,
    isDirectory: fs.lstatSync(`./public/${file}`).isDirectory() 
    }
  })

    res.send(filesObject)
   })
})


//info about file 
app.get('/:fileName',(req, res) => {
  // console.log(req.url);
  // console.log(req.params);
  // console.log(req.query);
  // console.log(req.params.fileName);
  if (req.query.getType == 'info') {
   fs.stat(`./public/${req.params.fileName}`, function(err, stats){
  if(err){
  return res.send('no such a file')
  }else{
    console.log('appget file info');
    res.send(stats)
  }

 }
) 

// Show content
  } if (req.query.getType == 'showContent') {
  //    console.log(req.params);
  // console.log(req.query);
  // console.log();
  const oldPath = Path.join(__dirname, 'cht.html');
    fs.readFile(oldPath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(data);
      res.send(JSON.stringify(data));
      console.log(`showContent:data`);
    });
  }

})



//POST Reqwests
app.post('/:fileName', (req, res)=>{

 //  Rename the file
if (req.query.postType == 'rename')  {
 console.log(req.params.fileName);
 console.log(req.body);
 console.log(__dirname);
const oldPath = Path.join(__dirname, `/public/${req.params.fileName}`);
const newPath = Path.join(__dirname, `/public/${req.body.newName}`);

fs.rename(`${__dirname}/public/${req.params.fileName}`, `${__dirname}/public/${req.body.newName}`, (err) => {
  if (err) return console.log(err);
console.log( ' app post:rename');
   res.send( JSON.stringify(req.body.newName))
    
});
} 



// copy
if (req.query.postType == 'copy')  {
  const oldPath = Path.join(__dirname, `/public/${req.params.fileName}`);
  const newPath = Path.join(__dirname, `/public/${req.params.fileName}(${1})`);

fs.cp(oldPath , newPath, (err) => {
  if (err) return console.log(err);
  console.log('copy is runing');
   res.send(`the ${req.params.fileName}(${1}) copied `)
});
}  
});


//delete
app.delete('/:fileName', (req, res)=>{
  const oldPath = Path.join(__dirname, `/public/${req.params.fileName}`);
  fs.rm(oldPath, { recursive:true }, (err) => {
    if(err){
        console.log(err.message);
        return res.send(err);
    }
    console.log("File deleted successfully");
  res.send( req.params.fileName )
})

});









const port = 5000
app.listen(port, () => console.log(`listening on port ${port}`))




//show info
// function showInfo(req, res, next) {
//   fs.stat("./public/test.txt", function(err, stats){
//     //Checking for errors
//   //  if(err){
//   //      console.log('err')
//   //  }
//   //  else{
//     //Logging the stats Object
//     console.log(`stats`);
//   next(stats.atime)
//   //  }
  
// });

// }


//Importing fs module 
// const fs = require("fs");
  
//stat methods takes path and a callback function as input
// fs.stat("./info.txt", function(err, stats){
  
//     //Checking for errors
//    if(err){
//        console.log(err)
//    }
//    else{
//     //Logging the stats Object
//    console.log(stats)
//    }
// });


// function checkType(file) {
//  if (file.isFile()) {
//     return `${file}is file`
//   } else {
//     return `${file}is folder`
//   }
// }

// const isFile = fileName => {
//   return fs.lstatSync(fileName).isFile();
// };

// fs.readdirSync('public')
//   .map(fileName => {
//     return  fileName;
//   })
//   .filter(isFile);
