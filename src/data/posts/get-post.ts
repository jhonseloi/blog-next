import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'
import { markdownToHtml } from '@/src/utils/markdown-to-html'

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug
    const url = `${POSTS_URL}?slug=${slugString}`
    const jsonPosts = await fetchJson<PostData[]>(url)
    const content = await markdownToHtml(jsonPosts[0].content)
    const finalContent = { ...jsonPosts[0], content }
    return [finalContent]
}
