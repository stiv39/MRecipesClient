import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

var service = new ArticleService()

const useDeleteArticleComment = (articleId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (commentId: string) => service.deleteArticleComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries(['article', articleId])
    },
  })
}

export default useDeleteArticleComment
