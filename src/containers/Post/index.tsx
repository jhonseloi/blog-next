import { PostData } from '@/src/domain/posts/post'
import { MainContainer } from '@/src/components/MainContainer'

export type PostProps = {
    post: PostData
}

export default function Post({ post }: PostProps) {
    return (
        <MainContainer>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </MainContainer>
    )
}
