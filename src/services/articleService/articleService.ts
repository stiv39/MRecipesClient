import { ArticleQuery } from '../../store/store'
import { Article, ArticleDetails, IArticleService, AddArticleComment, AddArticle } from './types'
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

  loadArticleDetails = async (id: string): Promise<ArticleDetails | null> => {
    try {
      if (!id || id === '') return null
      const response = await axios.get(`${baseurl}/articles/${id}`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return null
    }
  }

  addNewArticle = async (article: AddArticle, token: string): Promise<boolean> => {
    try {
      const response = await axios.post(
        `${baseurl}/articles`,
        article.image,
        { headers: { Authorization: 'Bearer ' + token } }
      )
      return response.data ? true : false
    } catch (ex) {
      console.error(ex)
      return false
    }
  }

  updateArticle = async (article: AddArticle, token: string): Promise<boolean> => {
    try {
      const response = await axios.put(
        `${baseurl}/articles`,
        article.image,
        { headers: { Authorization: 'Bearer ' + token } }
      )

      return response.status == 200
    } catch (ex) {
      console.error(ex)
      return false
    }
  }

  deleteArticle = async (articleId: string, token: string): Promise<boolean> => {
    try {
      const response = await axios.delete(`${baseurl}/articles/${articleId}`, {
        headers: { Authorization: 'Bearer ' + token },
      })

      return response.status === 204
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

  deleteArticleComment = async (commentId: string, token: string): Promise<boolean> => {
    try {
      const response = await axios.delete(`${baseurl}/articles/comment/${commentId}`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      return response.status === 204
    } catch (ex) {
      console.error('error while deleting comment', ex)
      return false
    }
  }
}
