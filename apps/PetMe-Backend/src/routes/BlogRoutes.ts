import { Router } from "express"
import BlogController from "../controllers/BlogControllers"
import BlogService from "../services/BlogService"
import BlogModel from "../models/BlogModel"
const BlogRoutes = Router()

const blogModel = new BlogModel()
const blogService = new BlogService(blogModel)
const blogController = new BlogController(blogService)

BlogRoutes.post("/", (req, res) => {
  blogController.createBlog(req, res)
})

BlogRoutes.get("/bulk", (req, res) => {
  blogController.getBlogs(req, res)
})

BlogRoutes.get("/:blogId", (req, res) => {
  blogController.getBlogById(req, res)
})

BlogRoutes.put("/:blogId", (req, res) => {
  blogController.editBlogById(req, res)
})

BlogRoutes.delete("/:blogId", (req, res) => {
  blogController.deleteBlogById(req, res)
})

export default BlogRoutes
