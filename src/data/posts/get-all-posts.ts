import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
    const url = `${POSTS_URL}?${query}`
    const posts = await fetchJson<PostData[]>(url)
    return posts
}
