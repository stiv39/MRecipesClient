import { create } from 'zustand'
import { Article, ArticleDetails, Category } from '../services/articleService/types'
import { categoriesMock } from '../services/articleService/mocks'

type ArticleStore = {
  articles: Article[]
  categories: Category[]
  selectedArticleId?: string
  selectedArticleDetails?: ArticleDetails
}

const useArticleStore = create<ArticleStore>((set) => ({
  articles: [],
  categories: categoriesMock,
  selectedArticleId: '',
  setArticles: (articles: Article[]) => set((store: ArticleStore) => ({ ...store, articles })),
  setArticleDetails: (details: ArticleDetails) => set((store) => ({ ...store, selectedArticleDetails: details })),
}))

export default useArticleStore
