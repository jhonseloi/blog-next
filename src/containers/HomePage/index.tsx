import { PostData } from '@/src/domain/posts/post'
import { Container } from './styles'
import { Header } from '@/src/components/Header'
import { MainContainer } from '@/src/components/MainContainer'
import { PostCard } from '@/src/components/PostCard'
import { Footer } from '@/src/components/Footer'

export type HomePageProps = {
    posts: PostData[]
}

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainer>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            key={post.slug}
                            cover='https://via.placeholder.com/300'
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
