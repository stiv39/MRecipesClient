import { ArticleQuery } from '../../store/store'
import { categoriesMock, articleDetailsMock } from './mocks'
import { Article, ArticleDetails, Tag, IArticleService, AddArticleComment, AddArticle } from './types'
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
      const response = await axios.get(`${baseurl}/articles/tags`)
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

  addNewArticle = async (article: AddArticle): Promise<boolean> => {
    try {
      const response = await axios.post(`${baseurl}/articles`, { ...article })
      if (response.data) {
        return true
      }
      return false
    } catch (ex) {
      console.error(ex)
      return false
    }
  }

  addArticleComment = async ({ articleId, name, description }: AddArticleComment): Promise<boolean> => {
    try {
      await axios.post(`${baseurl}/articles/comment`, { articleId: articleId, name: name, description: description })
      return true
    } catch (ex) {
      console.error('error while creating comment', ex)
      return false
    }
  }
}
