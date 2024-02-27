const middleFunction1 = (req,res,next)=>{
    console.log(`${req.method},${req.url}`);  // 9. sorunun cevabi
   //  console.log(req.query.a, req.query.b);
    const {a,b}=req.query
   //  console.log(a,b);
   // console.log(toplam);
   req.toplam = parseInt(a) + parseInt(b) // burada global bir degisken olusturduk ve diger middlewarede ulasilmasini sagladik.
    next()
}
const middleFunction2 = (req,res,next)=>{
    console.log("middleware 2 works");
   //  console.log(req.toplam);
    next()
}
module.exports =[middleFunction1,middleFunction2]