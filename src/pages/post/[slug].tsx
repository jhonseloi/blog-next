import Post from '@/src/containers/Post'
import { getAllPosts } from '@/src/data/posts/get-all-posts'
import { getPost } from '@/src/data/posts/get-post'
import { PostData } from '@/src/domain/posts/post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Error from 'next/error'

export type DynamicPostProps = {
    post: PostData
}

export default function DynamicPost({ post }: DynamicPostProps) {
    const router = useRouter()

    if (router.isFallback) {
        return <div>Página ainda carregando, por favor aguarde...</div>
    }

    if (!post?.title) {
        return <Error statusCode={404} />
    }

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
        fallback: true,
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
        // revalidate: 600,
    }
}
