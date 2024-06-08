export interface Blog {
  id: string
  title: string
  content: string
  published: Date
  updated?: Date
  authorId: string
}
