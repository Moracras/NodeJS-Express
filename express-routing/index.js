'use strict'
/*
    Expressjs Routing
*/
// ? npm i
// or npm i express dotenv


require('dotenv').config(); 


const PORT=process.env?.PORT || 8000
const HOST=process.env?.HOST || "127.0.0.1"

const express=require("express")

const app = express() // express üzerinde bir server olusturduk



// app.get('/',(req,res)=>{
//     // res.write("hello")
//     // res.end()

//     // res.write(JSON.stringify({
//     //     "message":"hello"
//     // }))
//     // res.end()

//     // console.log("hello");
//     // res.send("")

//     res.send({// tercih edilen
//         "message":"hello"

//     })
//     res.send("hello FS15")// birden fazla send manasız
// })

// app.post('/',(req,res)=>{res.send({ "message":"POST METHOD CALLED" })})
// app.put('/',(req,res)=>{res.send({ "message":"PUT METHOD CALLED" })})
// app.delete('/',(req,res)=>{res.send({ "message":"DELETE METHOD CALLED" })})


// app.all('/',(req,res)=>{res.send({ "message":"ALL METHOD CALLED" })})
// joker characters
// app.get('/drive1/drive2',(req,res)=>{ res.send({"message":"GET method called"})})
// app.get('/',(req,res)=>{ res.send({"message":"GET method called"})})
// app.get('/ab(x?)12',(req,res)=>{ res.send({message":"ab12 or abx12"})})// araya tek karakter ne olursa
// app.get('/ab(x)12',(req,res)=>{ res.send({message:"abx......x12"})})
// app.get('/ab*',(req,res)=>{ res.send({"message":"GET method called"})}) // sonu ne olursa olsun
// app.get('/a*b',(req,res)=>{ res.send({"message":"GET method called"})}) // sonu be arası ne olursa olsun

// regex
//! iki / arasında regex kabul edilir. ' kullanmayın
// regexr.com
// Regex (Düzenli İfadeler) kullanımında bazı yaygın semboller ve durumlar şunlardır:

// . (Nokta): Herhangi bir tek karakterle eşleşir (yeni satır karakteri hariç). Örnek: a.c → "abc", "axc" ile eşleşir, ama "ac" ile eşleşmez.
// * (Yıldız): Öncesindeki karakterin sıfır veya daha fazla tekrarıyla eşleşir. Örnek: ab*c → "ac", "abc", "abbc" ile eşleşir.
// + (Artı): Öncesindeki karakterin bir veya daha fazla tekrarıyla eşleşir. Örnek: ab+c → "abc", "abbc" ile eşleşir, ama "ac" ile eşleşmez.
// ? (Soru İşareti): Öncesindeki karakterin sıfır veya bir tekrarıyla eşleşir. Örnek: ab?c → "ac", "abc" ile eşleşir.
// ^ (Başlangıç): Bir dizenin başlangıcıyla eşleşir. Örnek: ^abc → "abc" ile başlayan dizilerle eşleşir.
// $ (Son): Bir dizenin sonuyla eşleşir. Örnek: abc$ → "abc" ile biten dizilerle eşleşir.
// [ ] (Karakter Sınıfı): Köşeli parantezler içinde belirtilen karakterlerden herhangi biriyle eşleşir. Örnek: a[bcd]e → "abe", "ace", "ade" ile eşleşir.
// | (Alternatif): Belirtilen alternatiflerden herhangi biriyle eşleşir. Örnek: a|b → "a" veya "b" ile eşleşir.
// {n} (Kesin Sayıda Tekrar): Öncesindeki karakterin tam olarak n kez tekrarlanmasıyla eşleşir. Örnek: a{2} → "aa" ile eşleşir.
// {n,} (En Az n Tekrar): Öncesindeki karakterin en az n kez tekrarlanmasıyla eşleşir. Örnek: a{2,} → "aa", "aaa", "aaaa" ile eşleşir.
// {n,m} (n ile m Arası Tekrar): Öncesindeki karakterin n ile m kez arasında tekrarlanmasıyla eşleşir. Örnek: a{2,3} → "aa", "aaa" ile eşleşir.

// app.get(/abc$/,(req,res)=>{ res.send({message:"end with any"})}) //sonu ne olursa olsun
// app.get(/\/*abc/,(req,res)=>{ res.send({message:"start with any"})}) //baslangıc ne olursa olsun
// app.get(/abc/,(req,res)=>{ res.send({message:"find abc in path"})}) //baslangıc ne olursa olsun

//? url parameters

// app.get('/:blogId/location/:location',(req,res)=>{
//     //  res.send({
//     //     params:req.params,
//     //     blogId: req.params.blogId,
//     //     url:{
//     //         protocol:req.protocol,
//     //         domain:req.hostname,
//     //         method:req.method,
//     //         url:req.url,
//     //         path:req.path,

//     //         params:req.params,
//     //         body: req.body,
//     //         query:req.query,
//     //         header:req.headers,
          
//     //         // header:req.header,
            

//     //     }
//     // })
// // }
// })
// app.get('/:userId[0-9]',(req,res)=>{
// app.get('/:userId[\\d]+',(req,res)=>{
// app.get('/:userId[\\D]+',(req,res)=>{
    // app.get('/:userId-:username',(req,res)=>{ 

    //     res.send({
            
    //         userId: req.params.userId,
    //         username: req.params.username,
    //         // body: req.body,
    //                                                 ////////////////CALISMADI
    //         url:{
    //             protocol:req.protocol,
    //             domain:req.hostname,
    //             method:req.method,
    //             url:req.url,
    //             path:req.path,            
    //             params:req.params,
              
    //             query: req.query,            
    //             header:req.headers,             
    //         }
    //     })
    
    // })
    
// app.get('/',(req,res)=>{
//     res.status(201).send({
//         message:"congratulations.Your register completed"
//     })
// })
// app.put('/',(req,res)=>{ res.status(202).send({" message":"PUT METHOD CALLED"})})
// app.delete('/',(req,res)=>{ res.status(202).send({ "message":"DELETE METHOD CALLED"})})
// app.post('/',(req,res)=>{ res.status(201).send({ "message":"POST METHOD CALLED"})})

// REDIRECT sadece 300lü kodlar

// app.get('/',(req,res)=>{ 
//     res.redirect(302,'https://google.com')
//? })

//show file content
app.get('/',(req,res)=>{ 
    // __dirname bulundugun klasör 
    res.sendFile(__dirname+'/readme.md')

})
// app.get('/download',(req,res)=>{ 
//     res.download('./readme.md','express routing')
    
// })
app.get('/download',(req,res)=>{
    res.download('./test/abouttest.md','express routing')
    // res.download('./readme.md','express routing')


})

app.listen(PORT,HOST,()=>console.log(`Server is run http://${HOST}:${PORT}`))