import { MainContainer } from '@/src/components/MainContainer'
import { PostCover } from '@/src/components/PostCover'
import { PostDetails } from '@/src/components/PostDetails'
import { Heading } from '@/src/components/Heading'

import { PostData } from '@/src/domain/posts/post'

export type PostProps = {
    post: PostData
}

export default function Post({ post }: PostProps) {
    return (
        <MainContainer>
            <Heading>{post.title}</Heading>
            <PostCover
                coverUrl={ post.cover.formats.large.url }
                alt={post.title}
            />
            <PostDetails
                author={post.author.name}
                category={post.category.name}
                date={post.id.toString()}
            />
            <p>{post.content}</p>
        </MainContainer>
    )
}
