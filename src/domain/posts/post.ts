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
    id: number,
    title: string,
    slug: string,
    content: string,
    author: PostAuthor
    category: PostCategory,
    created_by: {
        firstname: string
        lastname: string
    },
    updated_by: {
        firstname: string
        lastname: string
    },
    created_at: string,
    updated_at: string,
    cover: PostCover,
}
