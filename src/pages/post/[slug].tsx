import Post from '@/src/containers/Post'
import { getAllPosts } from '@/src/data/posts/get-all-posts'
import { getPost } from '@/src/data/posts/get-post'
import { PostData } from '@/src/domain/posts/post'
import { GetStaticPaths, GetStaticProps } from 'next'

export type DynamicPostProps = {
    post: PostData
}

export default function DynamicPost({ post }: DynamicPostProps) {
    return <Post post={post} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts()

    return {
        paths: posts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const rawSlug = ctx.params?.slug
    const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

    if (!slug) {
        return {
            notFound: true,
        }
    }

    const posts = await getPost(slug)

    return {
        props: {
            post: posts[0],
        },
    }
}
