'use strict'
/*
NODEJS SERVER
*/
require('dotenv').config();
//  const PORT = process.env.PORT
//  const HOST = process.env.HOST
const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"
// console.log('welcome');
const http=require("node:http")
/// server 1. parametre request 2. response dur
// http.createServer((param1,param2)=>{...})
// http.createServer((request,response)=>{...})
// http.createServer((req,res)=>{
//     res.end('<h1>welcome to nodejs server </h1>')
// }).listen(8000,()=>console.log(`server run: http://${HOST}:${PORT}`))
// }).listen(8000,()=>console.log("server run: http://127.0.0.1:8000"));
// }).listen(8000,()=>console.log("server run: localhost:8000"));


const app =http.createServer((req,res)=>{
    // console.log(req);
    // console.log("--------------------------------");
    // console.log(req.method);
    // console.log("*********************************");
    // console.log(req.url);
    // end points home: /,list: /list, test: /test

//     if(req.url=='/'){
//         res.end('<h1>HOME PAGE</h1>')
//     }
//     else if (req.url=='/list'){
//         res.end('<h1>LIST PAGE</h1>')
//     }
//     else if (req.url='/test'){
//         res.end('<h1>TEST PAGE</h1>')
//     }

//     res.end('<h1>welcome to nodejs server </h1>')
// })
    // if(req.url=='/'){
    //     res.write('this ')
    //     res.write('is ')
    //     res.write('home ')
    //     res.write('page ')
    //     res.end()
    // }
    // else if (req.url=='/list'){
    //     res.end('<h1>LIST PAGE</h1>')
    // }
    // else if (req.url='/test'){
    //     res.end('<h1>TEST PAGE</h1>')
    // }
    if(req.url== '/'){
        console.log();
     

        if(req.method=='GET') {  
            res.write('this ')
            res.write('is ')
            res.write('home ')
            res.write('page')
            res.end()
        }else if(req.method=='POST'){
            res.statusCode=400 
            res.statusMessage="post yapamazsin"
            res.end(' can not use this method')
        }else if(req.method=='DELETE'){
            res.writeHead(405,"silme yapamazsin",{
                "Content-Type" : "text/html",
                "another-header":"another content"
            })
            
            res.end(' can not use this method')

        }
        else
            res.end(' can not use this method')

    }

    else if(req.url== '/list'){
        const obj={
            "error": false,
            "message":"this is list page",
            "deneme":"deneme "
        }
        res.end(JSON.stringify( obj))
    }
    else if(req.url== '/test'){
        res.end('<h1> TEST Page </> ')
    }


})
    // res.end('<h1>welcome to nodejs server </h1>')


app.listen(8000,()=>console.log(`server run: http://${HOST}:${PORT}`))
