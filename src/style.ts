import { createGlobalStyle } from 'styled-components'

export const colors = {
    withe: '#eee',
    black: '#111',
    gray: '#333',
    green: '#10AC84',
    lightGray: '#A3A3A3'
}

export const breakpoints = {
    desktop: '1024px',
    tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.withe};
        padding-top: 40px;
    }

    .container {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;

        @media (max-width: ${breakpoints.desktop}) {
            max-width: 80%;
        }
    }
`
