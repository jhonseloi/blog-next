import { PostData } from '@/src/domain/posts/post'
import { AllPostsLinks, Category, Container } from './styles'
import { Header } from '@/src/components/Header'
import { MainContainer } from '@/src/components/MainContainer'
import { PostCard } from '@/src/components/PostCard'
import { Footer } from '@/src/components/Footer'
import Head from 'next/head'
import { SITE_NAME } from '@/src/config/app-config'
import { PaginationData } from '@/src/domain/posts/pagination'
import { Pagination } from '@/src/components/Pagination'
import Link from 'next/link'

export type HomePageProps = {
    posts: PostData[]
    category?: string
    pagination?: PaginationData
}

export default function HomePage({ posts, category, pagination }: HomePageProps) {
    return (
        <>
            <Head>
                <title>
                    {category ? `${category} - ${SITE_NAME}` : SITE_NAME} 
                    {pagination?.nextPage && ` - Página ${pagination.nextPage - 1}`}
                </title>
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
                {pagination && <Pagination {...pagination} />}
                {!pagination?.nextPage && 
                    <Link href='/post/page/[...param]' as='/post/page/1' passHref>
                        <AllPostsLinks>Ver todos os posts</AllPostsLinks>
                    </Link>
                    }
            </MainContainer>
            <Footer />
        </>
    )
}
