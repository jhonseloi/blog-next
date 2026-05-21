import { render, RenderResult } from '@testing-library/react'
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

export const customRender = (children: React.ReactNode): RenderResult => {
    return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>)
}
