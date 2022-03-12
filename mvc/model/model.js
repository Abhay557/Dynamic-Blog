const path = require('path')
const uuid = require('uuid/v4')//still deciding weather or not to use this
const JSONMecha = require('mecha-js').JSONMecha
const db = new JSONMecha(path.join(__dirname, '../db/posts.json'))
// const knex = require('../../knex.js')//i decided against using knex because of time crunch.  Am feeling I will come back refactor exact code and make it a knex db after q2 projects//other note json db's are fun and unreliable

const getAll=()=>{
  return db.get()
}
const getOne=(id)=>{
  return !id ? {error: "Id doesn't exist"} : db.find({prop:["id",id]})
}
const create=(bdy)=>{
  const {header,body} = bdy
  if(!header||!body){return {error:"please fill out fields"}}
  else{
    let post = {id:`${(Number(db._contents.length) + 1)}`,header,body}
    return db.create(post)
  }
}
const update=(id,bdy)=>{
  const {header,body} = bdy
  return !id ? {error:"post doesn't exist"} : !header||!body ? {error:"fields required"} : db.update({prop:["id",id]},{id,header,body})//im sorry Teddi, I just love this line so much
}//IM USING A PATCH ROUTE
const deleteP=(id)=>{
  return !id?{error:"post doesn't exist"}:db.destroy({prop:["id",id]})
}

module.exports = {getAll, getOne, create, update, deleteP}
