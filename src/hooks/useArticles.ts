import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { articlesMock } from '../services/articleService/mocks'

var service = new ArticleService()

const useArticles = (searchTerm: string) =>
  useQuery({
    queryKey: ['articles', searchTerm],
    queryFn: () => service.loadArticles(searchTerm),
    initialData: articlesMock,
  })

export default useArticles
