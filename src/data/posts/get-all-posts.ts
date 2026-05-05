import { POSTS_URL } from '@/src/config/app-config'

export const getAllPosts = async () => {
    const res = await fetch(`${POSTS_URL}/posts`)
    const data = await res.json()

    return data.map((post: any) => ({
        id: post.id,
        slug: String(post.id),
        title: post.title,
        content: `<p>${post.body}</p>`,
    }))
}