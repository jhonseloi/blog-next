import { countAllPosts } from '@/src/data/posts/count-all-posts'
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
            <p>{post.title}</p>
            <p dangerouslySetInnerHTML={{ __html: post.content }} />
        </>
    )
}

export default DynamicPost

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts()
    const posts = await getAllPosts(`_limit=${Number(numberOfPosts)}`)

    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            }
        }),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const rawSlug = ctx.params?.slug
    const slug = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

    if (!slug) {
        return { notFound: true }
    }

    const posts = await getPost(slug)

    if (!posts.length) {
        return { notFound: true }
    }

    return {
        props: {
            post: posts[0],
        },
    }
}
