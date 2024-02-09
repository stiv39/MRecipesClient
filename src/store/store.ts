import { create } from 'zustand'

type ArticleStore = {
  searchTerm?: string
  setSearchTerm: (searchText: string) => void
}

const useArticleStore = create<ArticleStore>((set) => ({
  searchTerm: '',
  setSearchTerm: (searchTerm: string) => set((store: ArticleStore) => ({ ...store, searchTerm })),
}))

export default useArticleStore
