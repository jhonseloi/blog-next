import { MainContainer } from '@/src/components/MainContainer'
import { PostCover } from '@/src/components/PostCover'
import { PostDetails } from '@/src/components/PostDetails'
import { Heading } from '@/src/components/Heading'
import { PostData } from '@/src/domain/posts/post'
import Head from 'next/head'
import { removeHtml } from '@/src/utils/remove-html'
import { SITE_NAME } from '@/src/config/app-config'
import { Header } from '@/src/components/Header'

export type PostProps = {
    post: PostData
}

export default function Post({ post }: PostProps) {
    return (
        <>
            <Head>
                <title>{post.title} - {SITE_NAME}</title>
                <meta name="description" content={removeHtml(post.content).slice(0, 160)} />
            </Head>

            <Header />
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
        </>
    )
}
