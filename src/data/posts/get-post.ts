import { POSTS_URL } from '@/src/config/app-config'
import { PostData } from '@/src/domain/posts/post'
import { fetchJson } from '@/src/utils/fetch-json'

export const getPost = async (
    slug: string,
): Promise<PostData[]> => {
    const url = `${POSTS_URL}/${slug}`

    const post = await fetchJson<PostData>(url)

    return [post]
}
