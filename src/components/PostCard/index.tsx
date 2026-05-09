import Link from 'next/link'
import { Heading } from '../Heading'
import { PostCover } from '../PostCover'
import { Container } from './styled'

export type PostCardProps = {
    slug: string
    title: string
    cover?: string
}

export const PostCard = ({
    slug,
    title,
    cover,
}: PostCardProps) => {
    return (
        <Container>
            <Link href={`/post/${slug}`}>
                <PostCover
                    coverUrl={cover}
                    alt={title}
                />
                <Heading as="h2">
                    {title}
                </Heading>
            </Link>
        </Container>
    )
}
