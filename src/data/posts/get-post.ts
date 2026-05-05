import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'

export const getAllPosts = async (): Promise<PostData[]> => {
    const res = await fetch(`${POSTS_URL}/posts`)
    const data = await res.json()

    return data.map((post: any) => ({
        id: post.id,
        slug: String(post.id),
        title: post.title,
        content: `<p>${post.body}</p>`,
        cover: {
        formats: {
            small: {
            url: 'https://via.placeholder.com/300',
            },
        },
        },
    }))
}
