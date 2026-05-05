import { POSTS_URL } from '@/src/config/app-config'

export const countAllPosts = async (): Promise<number> => {
    const res = await fetch(`${POSTS_URL}/posts`)
    const data = await res.json()
    return data.length
}