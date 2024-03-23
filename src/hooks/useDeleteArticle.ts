import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

var service = new ArticleService()

const useDeleteArticle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (articleId: string) => service.deleteArticle(articleId),
    onSuccess: () => {
      queryClient.invalidateQueries(['articles'])
    },
  })
}

export default useDeleteArticle
