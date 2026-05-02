import { Footer } from '@/src/components/Footer'
import { Header } from '@/src/components/Header'
import { Heading } from '@/src/components/Heading'
import { MainContainer } from '@/src/components/MainContainer'
import { PostContainer } from '@/src/components/PostContainer'
import { PostCover } from '@/src/components/PostCover'
import { PostDetails } from '@/src/components/PostDetails'
import { PostData } from '@/src/domain/posts/post'

export type PostProps = {
    post: PostData
}

export const Post = ({ post }: PostProps) => {
    return (
        <>
            <Header />

            <MainContainer>
                <Heading>{post.title}</Heading>
                <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />
                <PostDetails
                    author={post.author.name}
                    category={post.category.name}
                    date={post.created_at}
                />
                <PostContainer content={post.content} />
            </MainContainer>

            <Footer />
        </>
    )
}
