import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'

var service = new ArticleService()

const useAddArticleComment = (articleId: string, description: string, name: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ articleId, description, name }) => service.addArticleComment(articleId, description, name),
    onSuccess: () => {
      queryClient.invalidateQueries(['article', articleId])
    },
  })
}

export default useAddArticleComment
