
export type ITagService = {
  loadCategories(): Promise<Tag[]>
}

export type Tag = {
  tagId: string,
  name: string
  hasImage: boolean
}
