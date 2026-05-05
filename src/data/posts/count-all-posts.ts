import { POSTS_URL } from '@/src/config/app-config'

export const countAllPosts = async () => {
    const res = await fetch(`${POSTS_URL}`)
    const data = await res.json()

    return data.length
}
