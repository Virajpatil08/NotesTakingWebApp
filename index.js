const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { log } = require("console");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// 1] in this we are going to view index.ejs file and showing the on / router and read dire is for reading the files that we have created

app.get("/", function (req, res) {
  fs.readdir(`./files`, function (err, files) {
    if (err) {
      return res.redirect("/?error=Error Reading Files");
    }
    res.render("index", { files: files, success: req.query.success, error: req.query.error });
  }); // in this we have done is when folder read then run this index.ejs  and in object{files} we have taken show the data in the form of files

});

// 2] for create button after clicking file should get created : 
app.post("/create", function (req, res) {
  //    console.log(req.body); by using this we can check where our data that we have wrrtting is working or NOT
  fs.writeFile(
    `./files/${req.body.title.split("").join("")}.txt`,
    req.body.details,
    function (err) {
      if (err) {
        return res.redirect("/?error=Error Creating File");
      }
      res.redirect("/?success=File Created Successfully"); // by using this we are again moving from /create to /
    }
  ); // by using this we are creating the file in the folder and naming it as our title is written and split and join for removing the spaces in the file naming
});

// 3] for the Read more parasm use for reading the file : 
app.get("/file/:filename", function (req, res) {
  fs.readFile(
    `./files/${req.params.filename}`,
    "utf-8", // UTf is for shiwing content on screen english because when we not write this it will convert the text into hexadecimal format
    function (err, filedata) {
      if (err) {
        return res.status(500).send("Error Reading File");
      }
      res.render("show", { filename: req.params.filename, filedata: filedata }); // showing this file on show.ejs with file name and file data
    }
  );
});


//  4] Edit the task -
app.get("/edit/:filename", function (req, res) {
  res.render("edit",{filename:req.params.filename});
  });
  
  //5] for storing the edited name in the form 
  
  app.post("/edit", function (req, res) {
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`,function(err){
      if (err) {
        return res.redirect("/?error=Error Renaming File");
      }
      res.redirect("/?success=File Renamed Successfully");
    })
  
    });

    // 6] For delete the file 

    app.post("/delete", function (req, res) {
      const filePath = `./files/${req.body.filename}`;
      
      fs.unlink(filePath, function (err) {
        if (err) {
          return res.redirect("/?error=Error Deleting File");
        }
        res.redirect("/?success=File Deleted Successfully"); 
      });
    });
    

app.listen(3000, function () {
  console.log("It is running on 3000 port ");
});