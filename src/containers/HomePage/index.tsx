import { PostData } from '@/src/domain/posts/post'
import { Category, Container } from './styles'
import { Header } from '@/src/components/Header'
import { MainContainer } from '@/src/components/MainContainer'
import { PostCard } from '@/src/components/PostCard'
import { Footer } from '@/src/components/Footer'
import Head from 'next/head'
import { SITE_NAME } from '@/src/config/app-config'

export type HomePageProps = {
    posts: PostData[]
    category?: string
}

export default function HomePage({ posts, category }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{category ? `${category} - ${SITE_NAME}` : SITE_NAME}</title>
                <meta name="description" content="Este é o meu blog" />
            </Head>

            <Header />
            {category && <Category>Categoria: {category}</Category>}
            <MainContainer>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            key={post.slug}
                            cover={post.cover.formats.small.url}
                            slug={post.slug}
                            title={post.title}
                        />
                    ))}
                </Container>
            </MainContainer>
            <Footer />
        </>
    )
}
