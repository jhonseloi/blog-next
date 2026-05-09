import Link from 'next/link'

export type PostCardProps = {
    id: number
    title: string
    body: string
}

export const PostCard = ({ id, title, body }: PostCardProps) => {
    return (
        <div>
            <h2>{title}</h2>

            <p>{body}</p>

            <Link href={`/post/${id}`}>
                Ler post
            </Link>
        </div>
    )
}
