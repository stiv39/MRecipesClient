import { Tag, ITagService } from './types'
import axios from 'axios'

const baseurl = 'https://localhost:7200'

export class TagService implements ITagService {
  loadCategories = async (): Promise<Tag[]> => {
    try {
      const response = await axios.get(`${baseurl}/tags`)
      return response.data
    } catch (ex) {
      console.error(ex)
      return []
    }
  }
}
