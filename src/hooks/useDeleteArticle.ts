import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

var service = new ArticleService()

const useDeleteArticle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ articleId, token }: { articleId: string; token: string }) => service.deleteArticle(articleId, token),
    onSuccess: () => {
      queryClient.invalidateQueries(['articles'])
    },
  })
}

export default useDeleteArticle
