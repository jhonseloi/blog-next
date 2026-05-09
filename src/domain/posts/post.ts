export type PostCoverFormat = {
    url: string
}

export type PostCover = {
    formats: {
        small: PostCoverFormat
        large: PostCoverFormat
    }
}

export type PostAuthor = {
    name: string
}

export type PostCategory = {
    name: string
}

export type PostData = {
    userId: number
    id: number
    title: string
    body: string
    slug: string
    content: string
    author: PostAuthor
    category: PostCategory
    cover: PostCover
}
