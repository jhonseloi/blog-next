import { ReactNode } from 'react'
import { Container } from './styled'

export type HeadingProps = {
    children: ReactNode
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading = ({
    children,
    as = 'h1',
}: HeadingProps) => {
    return <Container as={as}>{children}</Container>
}
