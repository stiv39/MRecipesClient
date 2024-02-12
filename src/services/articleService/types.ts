import { ArticleQuery } from '../../store/store'

export type IArticleService = {
  loadArticles(query: ArticleQuery): Promise<Article[]>
  loadCategories(): Promise<Tag[]>
  addArticleComment(name: string, description: string, articleId: string): Promise<boolean>
}

export type ArticleResponse = {
  items: Article[]
}

export type Article = {
  author: string
  id: string
  tags: string[]
  title: string
  image: string
  dateAdded: string
}

export type Tag = {
  name: string
}

export type ArticleDetails = {
  author: string
  description: string
  id: string
  tags: string[]
  title: string
  dateAdded: string
  ingredients: string[]
  steps: string[]
  image: string
  articleComments: ArticleComment[]
}

export type ArticleComment = {
  name: string
  description: string
  dateAdded: string
}

export type Ingredient = {
  id: string
  value: string
}
