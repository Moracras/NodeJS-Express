"use strict";

/* BLOG API CONTROLLERS */

require("express-async-errors");

const { BlogPost, BlogCategory } = require("../models/blog.model");

// module.exports={
//     "key":"value",
//     "key2":"value",

// }

// module.exports.key:"value"
// module.exports.key2:"value"
module.exports.BlogCategory = {
  list: async (req, res) => {
    const data = await BlogCategory.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogCategory.create(req.body);
    res.status(201).send({
      error: false,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogCategory.find({ _id: req.params.categoryId });

    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogCategory.updateOne(req.body, {
      _id: req.params.categoryId,
    });
    const newdata = await BlogCategory.find({ _id: req.params.categoryId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsak tekrar çagırırız
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await BlogCategoryt.deleteOne({ _id: req.params.categoryId });
    // console.log(data);
    // res.sendStatus(204).send({

    // })
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};

module.exports.BlogPost = {
  list: async (req, res) => {
    const data = await BlogPost.find();
    res.status(200).send({
      error: false,
      data: data,
    });
  },
  create: async (req, res) => {
    const data = await BlogPost.create(req.body);
    res.status(201).send({
      error: false,
      data: data,
    });
  },
  read: async (req, res) => {
    const data = await BlogPost.find({ _id: req.params.postId });

    res.status(202).send({
      error: false,
      data: data,
    });
  },
  update: async (req, res) => {
    const data = await BlogPost.updateOne(req.body, { _id: req.params.postId });
    const newdata = await BlogPost.find({ _id: req.params.postId });
    res.status(202).send({
      error: false,
      body: req.body,
      data: data, // info about update
      // güncel veriyi istiyorsak tekrar çagırırız
      newdata: newdata,
    });
  },
  delete: async (req, res) => {
    const data = await BlogPost.deleteOne({ _id: req.params.postId });
    // console.log(data);
    // res.sendStatus(204).send({

    // })
    res.sendStatus(data.deletedCount >= 1 ? 204 : 404);
  },
};
