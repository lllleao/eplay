import styled from 'styled-components'
import { colors } from '../../style'
import { TagContainer } from '../Tag/style'
import { ButtonContainer } from '../Button/style'

import fechar from '../../assets/images/close_1.png'

export const CartContainer = styled.div`
    display: none;
    justify-content: flex-end;
    position: fixed;
    inset: 0;
    z-index: 1;

    &.is-open {
        display: flex;
    }
`

export const Overlay = styled.div`
    position: absolute;
    inset: 0;
    background-color: rgb(0, 0, 0);
    opacity: 0.7;
`

export const Aside = styled.aside`
    z-index: 1;
    background-color: ${colors.gray};
    padding: 40px 16px 0 16px;
    max-width: 360px;
    width: 100%;

    ${ButtonContainer} {
        max-width: 100%;
        width: 100%;
    }

    .empty-text {
        font-size: 14px;
        line-height: 22px;
        color: ${colors.withe};
        text-align: center;
    }
`

export const Prices = styled.p`
    font-weight: bold;
    font-size: 14px;
    color: ${colors.withe};
    margin-bottom: 24px;

    span {
        display: block;
        font-size: 12px;
        color: ${colors.lightGray};
    }
`

export const Quantity = styled.p`
    font-weight: bold;
    font-size: 16px;
    color: ${colors.withe};
    margin-top: 32px;
    margin-bottom: 16px;
`

export const CartItem = styled.li`
    display: flex;
    border-bottom: 1px solid ${colors.lightGray};
    padding: 8px 0;
    position: relative;

    img {
        height: 80px;
        width: 80px;
        object-fit: cover;
        margin-right: 24px;
    }

    h3 {
        color: ${colors.withe};
        font-weight: bold;
        font-size: 16px;
    }

    span {
        display: block;
        color: ${colors.withe};
        font-weight: bold;
        font-size: 14px;
    }

    ${TagContainer} {
        margin-right: 8px;
        margin-top: 8px;
        margin-bottom: 16px;
    }

    button {
        background-image: url(${fechar});
        width: 16px;
        height: 16px;
        border: none;
        background-color: transparent;
        position: absolute;
        top: 8px;
        right: 0;
        cursor: pointer;
    }
`
