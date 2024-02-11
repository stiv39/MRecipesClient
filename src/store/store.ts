import { create } from 'zustand'

export type ArticleQuery = {
  searchTerm?: string
  tags: string[]
}

type ArticleStore = {
  articleQuery: ArticleQuery
  setSearchTerm: (searchText: string) => void
  setTags: (tag: string[]) => void
}

const useArticleStore = create<ArticleStore>((set) => ({
  articleQuery: { tags: [] },
  setSearchTerm: (searchTerm: string) =>
    set((store: ArticleStore) => ({ articleQuery: { ...store.articleQuery, searchTerm } })),
  setTags: (tags: string[]) =>
    set((store: ArticleStore) => ({
      articleQuery: { ...store.articleQuery, tags },
    })),
}))

export default useArticleStore
