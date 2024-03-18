"use strict";
const { response } = require("express");
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    const data = await Department.find(search)
      .sort(sort)
      .skip(skip)
      .limit(limit);
    response.status(200).send({
      error: false,
      detail: await res.getModelListDetails(Department),
      data, // data:data
    });
  },
  create: async (req, res) => {
    const data = await Department.create(req.body);

    res.status(201).send({
      error: false,
      data,
    });
  },
  read: async (req, res) => {
    const data = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },
  update: async (req, res) => {
    const data = await Department.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });
    res.status(202).send({
      error: false,
      data,
      new: await Department.findOne({ _id: req.params.id }),
    });
  },
  delete: async (req, res) => {
    const data = await Department.delete({ _id: req.params.id });
    // isDeleted = data.deletedCount >=1 ? true : false
    // res.status(isDeleted ? 204 : 404).send({
    //     error:!isDeleted,
    //     data,
    // })

    res.status(data.deletedCount ? 204:404).send({
        error: !data.deletedCount,
        data
    })
  },
};
