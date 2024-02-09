import { categoriesMock, articlesMock, articleDetailsMock } from './mocks'
import { Article, ArticleDetails, Category, IArticleService } from './types'
import axios from 'axios'

export class ArticleService implements IArticleService {
  _basePath: string
  constructor({ basePath }: { basePath: string }) {
    this._basePath = basePath
  }

  loadArticles = async (): Promise<Article[]> => {
    try {
      const response = await axios.get(`https://localhost:7116/articles`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return articlesMock
    }
  }

  loadCategories = async (): Promise<Category[]> => {
    try {
      const response = await axios.get(`https://localhost:7116/categories`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return categoriesMock
    }
  }

  loadArticleDetails = async (id: string): Promise<ArticleDetails | null> => {
    try {
      const response = await axios.get(`https://localhost:7116/articles/${id}`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return articleDetailsMock(id)
    }
  }
}
