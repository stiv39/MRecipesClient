import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { AddArticle } from '../services/articleService/types'

var service = new ArticleService()

const useUpdateArticle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ article, token }: { article: AddArticle; token: string }) => service.updateArticle(article, token),
    onSuccess: () => {
      queryClient.invalidateQueries(['articles'])
    },
  })
}

export default useUpdateArticle
