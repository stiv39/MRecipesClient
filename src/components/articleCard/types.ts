import { Article } from '../../services/articleService/types'

export type ArticleCardProps = {
  article: Article
  imgUrl: string
  handleClickAction: (id: string) => void
}
