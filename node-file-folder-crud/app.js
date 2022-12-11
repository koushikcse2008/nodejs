var fs = require('fs');
var dir = './data1';

//File read
fs.readFile('./filedata.txt', function (err, data) {
    if(!err) {
        console.log(data.toString());
    }
});

//file write
fs.writeFileSync('./filedata.txt', 'New data added!', function(err) {
    if(!err) {
        fs.readFile('./filedata.txt', function (err, data) {
            if(!err) {
                console.log(data.toString());
            }
        });
    }
});

//file update
fs.appendFileSync("./filedata.txt", "\rNew data appended!!!", (err) => {
    if (err) {
        console.log(err);
    }
    
    console.log("\rFile Contents of file after append:",
    fs.readFileSync("./filedata.txt", "utf8"));
    
});

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    fs.copyFile("./filedata.txt", "./data1/copy.txt", function (err, data) {
        if(err) throw err;
        console.log("Successfully moved file");
    });
}

// delete directory recursively
// fs.rmdir(dir, { recursive: true }, err => {
//     if (err) {
//       throw err
//     }
  
//     console.log(`${dir} is deleted!`)
// });


// delete specific file
// var filePath = './data1/copy.txt'; 
// fs.unlinkSync(filePath);
