const fs=require('fs')
// blocking synchronus code
// reading the file
console.log('Synchronus reading')
const read=fs.readFileSync('./readfile.txt','utf-8')//two parameters filepath, readding method

console.log(read)

// writing the file
 const write=`About node js:${read}`

 fs.writeFileSync('./writefile.txt',write)
//  // non-blocking asynchronus way
 console.log('Asynchronus reading')
 fs.readFile('./readfile.txt','utf-8',(err,data)=>{
    console.log(data)

 })
 //Reading the file start and it contains read-this matter and i send it as file and display the content of read this
 fs.readFile('./start.txt','utf-8',(err,data1)=>{
   if(err) return console.log("eroorrrrr")
   fs.readFile(`./${data1}.txt`,'utf-8',(err,data2)=>{
      console.log(data2)
     // writing the file in asynchronus way
     fs.writeFile('./finale.txt',`${data1}\n${data2}`,'utf-8',err=>{
      console.log('writed the file')
     })
   })
 })