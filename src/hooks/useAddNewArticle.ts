import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ArticleService } from '../services/articleService/articleService'
import { AddArticle } from '../services/articleService/types'

var service = new ArticleService()

const useAddNewArticle = (article: AddArticle) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (article: AddArticle) => service.addNewArticle(article),
    onSuccess: () => {
      queryClient.invalidateQueries(['articles', article])
    },
  })
}

export default useAddNewArticle
