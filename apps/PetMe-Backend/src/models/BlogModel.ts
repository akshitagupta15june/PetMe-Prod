import prisma from "../db"
import { Blog } from "../interfaces/Blogs/Blog"
import IStatusMap from "../interfaces/StatusMap/StatusMap"

export default class BlogModel {
  private prisma = prisma

  async getBlogById(id: string): Promise<Blog | null> {
    const blog = await this.prisma.blog.findUnique({
      where: {
        id: id,
      },
    })
    if (!blog) return null
    return blog
  }

  async getAllBlogs(): Promise<Blog[]> {
    const blogs = await this.prisma.blog.findMany({})
    return blogs
  }

  async editBlogById(id: string, blogData: Blog): Promise<IStatusMap> {
    await this.prisma.blog.update({
      where: {
        id: id,
      },
      data: {
        content: blogData.content,
        title: blogData.title,
        edited: new Date(),
      },
    })
    return {
      status: "success",
      message: "Blog updated successfully",
      code: 200,
    }
  }

  async createBlog(blogData: Blog): Promise<IStatusMap> {
    await this.prisma.blog.create({
      data: {
        title: blogData.title,
        content: blogData.content,
        authorId: blogData.authorId,
        published: new Date(),
      },
    })
    return {
      status: "success",
      message: "Blog created successfully",
      code: 200,
    }
  }

  async deleteBlogById(id: string): Promise<IStatusMap> {
    await this.prisma.blog.delete({
      where: {
        id: id,
      },
    })
    return {
      status: "success",
      message: "Blog deleted successfully",
      code: 200,
    }
  }
}
