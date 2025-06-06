import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

const service = new ArticleService()

const useArticle = (articleId: string) =>
  useQuery({
    queryKey: ['article', articleId],
    queryFn: () => service.loadArticleDetails(articleId),
  })

export default useArticle
