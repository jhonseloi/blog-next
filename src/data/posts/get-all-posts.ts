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
        id: post.id,
        title: post.title,
        slug: String(post.id),
        content: post.body,
        created_at: '',
        updated_at: '',
        created_by: {
            firstname: '',
            lastname: '',
        },
        updated_by: {
            firstname: '',
            lastname: '',
        },
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
