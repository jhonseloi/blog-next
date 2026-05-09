import { getAllPosts } from '@/src/data/posts/get-all-posts'
import { getPost } from '@/src/data/posts/get-post'
import { PostData } from '@/src/domain/posts/post'
import { GetStaticPaths, GetStaticProps } from 'next'

export type DynamicPostProps = {
    post: PostData
}

const DynamicPost = ({ post }: DynamicPostProps) => {
    return (
        <>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    )
}

export default DynamicPost

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await getAllPosts()

    return {
        paths: posts.map((post) => ({
            params: {
                slug: String(post.id),
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const rawSlug = ctx.params?.slug

    const slug = Array.isArray(rawSlug)
        ? rawSlug[0]
        : rawSlug

    if (!slug) {
        return {
            notFound: true,
        }
    }

    const posts = await getPost(slug)

    if (!posts.length) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post: posts[0],
        },
    }
}
