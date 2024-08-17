import styled from 'styled-components'
import { TagContainer } from '../Tag/style'

export const Image = styled.div`
    width: 100%;
    height: 560px;
    display: block;
    background-repeat: no-repeat;
    background-size: cover;
    font-weight: bold;
    background-position-y: center;
    position: relative;

    .container {
        padding-top: 340px;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }

    ${TagContainer} {
        position: absolute;
        top: 32px;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }
`
export const Title = styled.h2`
    font-size: 36px;
    max-width: 450px;
`
export const Prices = styled.p`
    font-style: 24px;
    margin-top: 24px;
    span {
        text-decoration: line-through;
    }
`
