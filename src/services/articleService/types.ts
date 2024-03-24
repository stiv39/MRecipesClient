import { ArticleQuery } from '../../store/store'

export type IArticleService = {
  loadArticles(query: ArticleQuery): Promise<Article[]>
  loadCategories(): Promise<Tag[]>
  addNewArticle(article: AddArticle): Promise<boolean>
  updateArticle(article: AddArticle): Promise<boolean>
  addArticleComment(newComment: AddArticleComment): Promise<boolean>
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

export type AddArticle = {
  title: string
  description: string
  steps: string
  tags: string
  ingredients: string
  id?: string
  image?: string
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

export type AddArticleComment = {
  articleId: string
  name: string
  description: string
}

export type Ingredient = {
  id: string
  value: string
}
