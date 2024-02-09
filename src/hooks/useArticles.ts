import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { articlesMock } from '../services/articleService/mocks'

var service = new ArticleService({ basePath: '' })

const useArticles = () =>
  useQuery({
    queryKey: ['articles'],
    queryFn: service.loadArticles,
    staleTime: 60 * 1000,
    initialData: articlesMock,
  })

export default useArticles
