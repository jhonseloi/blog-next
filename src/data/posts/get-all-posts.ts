import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'

type JsonPlaceholderPost = {
    userId: number
    id: number
    title: string
    body: string
}

export const getAllPosts = async (): Promise<PostData[]> => {
    const posts = await fetchJson<JsonPlaceholderPost[]>(POSTS_URL)

    return posts.slice(0, 30).map((post) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body,
        slug: String(post.id),
        content: post.body,
        author: {
            name: `Autor ${post.userId}`,
        },
        category: {
            name: 'Blog',
        },
        cover: {
            formats: {
                small: {
                    url: `https://picsum.photos/400/300?random=${post.id}`,
                },
                large: {
                    url: `https://picsum.photos/1200/600?random=${post.id}`,
                },
            },
        },
    }))
}
