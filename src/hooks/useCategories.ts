import { useQuery } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { categoriesMock } from '../services/articleService/mocks'

var service = new ArticleService()

const useArticles = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: service.loadCategories,
    staleTime: 60 * 60 * 24 * 1000,
    // initialData: categoriesMock,
  })

export default useArticles
