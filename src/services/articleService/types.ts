export type IArticleService = {
    loadArticles(): Promise<any>
  }
  
  export type Article = {
    author: string
    authorId: string
    body: string
    category: string
    categoryId: string
    description: string
    id: string
    tags: string[]
    title: string
    dateAdded: string
  }
  
  export type Category = {
    id: string
    name: string
  }
  
  export type ArticleDetails = {
    author: string
    authorId: string
    body: string
    category: string
    categoryId: string
    description: string
    id: string
    tags: string[]
    title: string
    dateAdded: string
    ingredients: Ingredient[]
    guide: string[]
  }
  
  export type Ingredient = {
    id: string
    value: string
  }
  