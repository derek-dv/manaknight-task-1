const app = require("express").Router();
const db = require("../../models")

app.get('/admin/get-config', async function(req, res){
  // const ret = await db.Terminate.create({
  //   counter: 11,
  //   message: `'A very long boring message. Please exit the quiz.''A very long boring message. Please exit the quiz.'`
  // })
  res.json({counter: 20, message: 'A very long boring message. Please exit the quiz.', model: 'ret'})
})

module.exports = app