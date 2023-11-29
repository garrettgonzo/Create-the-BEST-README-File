const fs = require("fs")
const path = require("path")
console.log(__dirname)
console.log("Hello WOrld!")

console.log("Total HERE!!! test.js line 3 ~~~~ ",2+66)

// console.log(process)

setTimeout(function(){
console.log("Shutting down!")
process.exit(0)
}, 3000)

setTimeout(function(){
    console.log("Shutting down again!?!")
    process.exit(0)
    }, 5000)
    

    fs.writeFile(path.join(__dirname, "testFiles54.md"), "# Title of Readme", function(err){
        if(err) throw err
        console.log("sucess")
    })