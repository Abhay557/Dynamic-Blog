const model = require("../model/model.js")

const getAllPosts = (req,res,next) => {
  let all = model.getAll()
  res.status(200).json(all)
}
const getOnePost = (req,res,next) => {
  let one = model.getOne(req.params.id)
  console.log(one.error);
  return one.error ? next({status:404,message:"Post ID doesn't exist",errors:one.error}) : res.status(200).json(one)
}
const createPost = (req,res,next) => {
  let post = model.create(req.body)
  console.log(post.error);
  return post.error ? next({status:400,message:"Failed to create new post",errors:post.error}) : res.status(201).json(post)
}
const updatePost = (req,res,next) => {
  let patch = model.update(req.params.id,req.body)
  console.log(patch.error);
  return patch.error ? next({status:400,message:"Failed to update post",errors:patch.error}) : res.status(200).json(patch)
}//this is going to a patch route
const deletePost = (req,res,next) => {
  let del = model.deleteP(req.params.id)
  console.log(del.error);
  return del.error ? next({status:404,message:"Failed to delete post",errors:del.error}) : res.status(204).json(del)
}

module.exports = {getAllPosts, getOnePost, createPost, updatePost, deletePost}
