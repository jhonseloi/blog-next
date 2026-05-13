import HomePage from '@/src/containers/HomePage'
import { getAllPosts } from '@/src/data/posts/get-all-posts'
import { PostData } from '@/src/domain/posts/post'
import { GetServerSideProps } from 'next'

export type CategoryProps = {
    posts: PostData[]
    category: string
}

export default function Category({ posts, category }: CategoryProps) {
    return <HomePage category={category} posts={posts} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const posts = await getAllPosts()

    return {
        props: {
            posts, 
            category: ctx.query.category,
        },
    }
}
