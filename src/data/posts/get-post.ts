import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'
import { markdownToHtml } from '@/src/utils/markdown-to-html'

type JsonPlaceholderPost = {
    userId: number
    id: number
    title: string
    body: string
}

export const getPost = async (slug: string): Promise<PostData[]> => {
    const posts = await fetchJson<JsonPlaceholderPost[]>(POSTS_URL)
    const post = posts.find((post) => String(post.id) === slug)

    if (!post) return []

    const content = await markdownToHtml(post.body)

    return [
        {
            id: post.id,
            title: post.title,
            slug: String(post.id),
            content,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
            created_by: {
                firstname: 'Admin',
                lastname: 'Blog',
            },
            updated_by: {
                firstname: 'Admin',
                lastname: 'Blog',
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
        },
    ]
}
