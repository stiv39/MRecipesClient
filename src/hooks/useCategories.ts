import { useQuery } from '@tanstack/react-query'
import { TagService } from '../services/tagService/tagService'

const service = new TagService()

const useArticles = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: service.loadCategories,
    staleTime: 60 * 60 * 24 * 1000,
    // initialData: categoriesMock,
  })

export default useArticles
