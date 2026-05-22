import HomePage from '@/src/containers/HomePage'
import { countAllPosts } from '@/src/data/posts/count-all-posts'
import { getAllPosts } from '@/src/data/posts/get-all-posts'
import { PaginationData } from '@/src/domain/posts/pagination'
import { PostData } from '@/src/domain/posts/post'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export type PageProps = {
    posts: PostData[]
    category?: string,
    pagination: PaginationData
}

export default function Page({ posts, category, pagination }: PageProps) {
    const router = useRouter()

    if (router.isFallback) return <div>Carregando...</div>
    if (!posts.length) return <div>Página não encontrada...</div>

    return <HomePage posts={posts} />
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const params = ctx.params?.param

    if (!params || !Array.isArray(params)) {
        return {
            notFound: true,
        }
    }

    const page = Number(params[0])
    const category = params[1] || ''
    
    const postsPerPage = 3
    const startFrom = (page - 1) * postsPerPage
    const nextPage = page + 1
    const previousPage = page - 1

    const allPosts = await getAllPosts()
    const posts = allPosts.slice(
        startFrom,
        startFrom + postsPerPage,
    )
    const numberOfPosts = allPosts.length
    
    const pagination: PaginationData = {
        nextPage,
        numberOfPosts,
        postsPerPage,
        previousPage,
    }

    return {
        props: {
            posts,
            pagination,
            category,
        },
        // revalidate: 600,
    }
}
