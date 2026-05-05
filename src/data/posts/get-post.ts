import { POSTS_URL } from '@/src/config/app-config'

export const getPost = async (slug: string) => {
    const res = await fetch(`${POSTS_URL}/posts/${slug}`)
    const post = await res.json()

    return [
        {
            id: post.id,
            slug: String(post.id),
            title: post.title,
            content: `<p>${post.body}</p>`,
        },
    ]
}
