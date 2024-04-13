import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { articlesMock } from '../services/articleService/mocks'
import { ArticleQuery } from '../store/store'

var service = new ArticleService()

const useArticles = (query: ArticleQuery) =>
  useQuery({
    queryKey: ['articles', query],
    queryFn: () => service.loadArticles(query),
    initialData: articlesMock,
  })

export default useArticles
