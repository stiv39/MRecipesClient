import { ArticleQuery } from '../../store/store'
import { categoriesMock, articlesMock, articleDetailsMock } from './mocks'
import { Article, ArticleDetails, Tag, IArticleService } from './types'
import axios from 'axios'

const baseurl = 'https://localhost:7200'

export class ArticleService implements IArticleService {
  loadArticles = async ({ searchTerm, tags }: ArticleQuery): Promise<Article[]> => {
    try {
      const response = await axios.get(`${baseurl}/articles`, {
        params: { searchTerm: searchTerm, tags: tags.join(',') },
      })
      console.log(response.data)
      return response.data.items
    } catch (ex) {
      console.error(ex)

      return []
    }
  }

  loadCategories = async (): Promise<Tag[]> => {
    try {
      const response = await axios.get(`${baseurl}/tags`)
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
