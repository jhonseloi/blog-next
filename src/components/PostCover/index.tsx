import { Container } from './styled'

export type PostCoverProps = {
    coverUrl?: string
    alt: string
}

export const PostCover = ({ coverUrl, alt }: PostCoverProps) => {
    const imageUrl = coverUrl || 'https://placehold.co/1200x720?text=Sem+Imagem'

    return <Container src={imageUrl} alt={alt} />
}
