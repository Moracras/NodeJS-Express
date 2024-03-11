'use strict'
/*
    BLOG API MODELS
    
*/

const mongoose = require("mongoose")


// BLOG CATEGORY:

const blogCategorySchema = new mongoose.Schema({

    name: {
        type:String,
        trim:true,
        required:true
    }


}/*şema şekil*/, {

    collection:"blogCategory",
    timestamps: true

}/*şema ayarları*/)



// BLOG POST
const blogPostSchema = new mongoose.Schema({
        //_id
        // categoryId
        blogCategoryId:{
            type: mongoose.Schema.Types.ObjectId, // Foreign key, RelationalID
            ref:'BlogCategory', //referans tanımlamak şart
            required:true
        },

        title:{
            type:String,
            trim:true,
            required:true
        },
        content:{
            type:String,
            trim:true,
            required:true

        },
        published:{
            type:Boolean,
            default:true
        }
    },
    {
        collection:"blogPost",
        timestamps: true
    })
// const BlogPostModel= mongoose.model('BlogPost',blogPostSchema)
// module.exports={
//     BlogPost:BlogPostModel,


module.exports = {
    BlogCategory: mongoose.model('BlogCategory',blogCategorySchema),
    BlogPost: mongoose.model('BlogPost',blogPostSchema)
}



// const nameSchema = new mongoose.Schema({fields},{tablename})

// const nameSchema = new mongoose.Schema(
//     {
//         // _id: // auto created and increment
//         // fieldName: Type // short form
//         // fieldName: String,
//         // fieldName2: BigInt, 
//         fieldName:{
//             type: String,
//             default: true,
//             trim: true,
//             unique: false,
//             select: true ,// model cagrıldıgında gelsinmi
//             index: false, // aramalarda erişimi hızlandırır
//             required: true, // veri girişi gereklimi
//             required: [true, 'error message'], // gereklimi degilmi, hata mesajı
//             enum:[[1,2,3],'error message'], // belirli bir pattern e göre veri girişi
//             validate: [function(data){return true},], // veri fonksiyon ile dogrulama
//             get: function(data){return true} ,// veriyi cagırırken calısacak fonksiyon
//             set: function(data){return true}, // veriyi kaydederken çalışacak fonksiyon
//         }
// },
// {
//         collection:'collectionName', // tablo ismi 
//         timestamps:  true, // createdDate, updateDate


// }

// )