import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'

export const getAllPosts = async (): Promise<PostData[]> => {
    const posts = await fetchJson<PostData[]>(POSTS_URL)

    return posts.slice(0, 30)
}