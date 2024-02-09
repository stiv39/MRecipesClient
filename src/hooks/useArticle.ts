import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

var service = new ArticleService({ basePath: '' })

const useArticle = (slug: string) =>
  useQuery({
    queryKey: ['article', slug],
    queryFn: () => service.loadArticleDetails(slug),
  })

export default useArticle
