import { categoriesMock, articlesMock, articleDetailsMock } from './mocks'
import { Article, ArticleDetails, Category, IArticleService } from './types'
import axios from 'axios'

const baseurl = 'https://localhost:7116'

export class ArticleService implements IArticleService {
  loadArticles = async (searchTerm: string): Promise<Article[]> => {
    try {
      const response = await axios.get(`${baseurl}/articles`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return searchTerm ? articlesMock.filter((a) => a.title.toLowerCase().includes(searchTerm)) : articlesMock
    }
  }

  loadCategories = async (): Promise<Category[]> => {
    try {
      const response = await axios.get(`${baseurl}/categories`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return categoriesMock
    }
  }

  loadArticleDetails = async (id: string): Promise<ArticleDetails | null> => {
    try {
      const response = await axios.get(`${baseurl}/articles/${id}`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return articleDetailsMock(id)
    }
  }
}
