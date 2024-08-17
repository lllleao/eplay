import styled from 'styled-components'
import { breakpoints, colors } from '../../style'
import { TagContainer } from '../Tag/style'

export const Banner = styled.div`
    display: block;
    height: 480px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    position: relative;
    padding-top: 16px;

    @media (max-width: ${breakpoints.tablet}) {
        background-size: cover;
    }

    ${TagContainer} {
        margin-right: 18px;
    }

    &::after {
        content: '';
        background-color: #000;
        position: absolute;
        inset: 0;
        opacity: 0.56;
    }

    .container {
        height: 100%;
        position: relative;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
`
export const Infos = styled.div`
    background-color: ${colors.black};
    max-width: 290px;
    font-weight: bold;
    padding: 16px;
    h2 {
        font-size: 32px;
    }

    p {
        margin: 16px 0;
        font-size: 18px;
        span {
            display: block;
            text-decoration: line-through;
        }
    }
`
