import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { AddArticleComment } from '../services/articleService/types'

var service = new ArticleService()

const useAddArticleComment = (articleId: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newComment: AddArticleComment) => service.addArticleComment(newComment),
    onSuccess: () => {
      queryClient.invalidateQueries(['article', articleId])
    },
  })
}

export default useAddArticleComment
