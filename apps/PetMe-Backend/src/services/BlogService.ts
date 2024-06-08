import { response } from "express"
import { Blog } from "../interfaces/Blogs/Blog"
import IStatusMap from "../interfaces/StatusMap/StatusMap"
import BlogModel from "../models/BlogModel"

export default class BlogService {
  constructor(private blogModel: BlogModel) {}

  async getBlogById(id: string): Promise<Blog | null> {
    const response = await this.blogModel.getBlogById(id)
    return response
  }

  async getAllBlogs(): Promise<Blog[]> {
    const response = await this.blogModel.getAllBlogs()
    return response
  }

  async editBlogById(id: string, blogData: Blog): Promise<IStatusMap> {
    const blog = await this.blogModel.getBlogById(id)

    if (!blog) {
      return {
        status: "error",
        message: "Blog not found",
        code: 404,
      }
    }

    const response = await this.blogModel.editBlogById(id, blogData)
    return response
  }

  async createBlog(blogData: Blog): Promise<IStatusMap> {
    const response = await this.blogModel.createBlog(blogData)
    return response
  }

  async deleteBlogById(id: string): Promise<IStatusMap> {
    const blog = await this.blogModel.getBlogById(id)

    if (!blog) {
      return {
        status: "error",
        message: "Blog not found",
        code: 404,
      }
    }

    const response = await this.blogModel.deleteBlogById(id)
    return response
  }
}
