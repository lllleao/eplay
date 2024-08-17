import styled from 'styled-components'
import { colors } from '../../style'

export const Items = styled.ul`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
`
export const Action = styled.div`
    position: absolute;
    inset: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s;
    border-radius: 8px;
`

export const Item = styled.li`
    cursor: pointer;
    cursor: zoom-in;
    position: relative;
    > img {
        width: 150px;
        height: 150px;
        border: 2px solid ${colors.withe};
        border-radius: 8px;
        object-fit: cover;
    }

    &:hover ${Action} {
        opacity: 1;
    }
`
export const Modal = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    position: fixed;
    inset: 0;
    z-index: 1;

    &.visible {
        display: flex;
    }

    .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.73);
    }
`
export const ModalContent = styled.div`
    max-width: 960px;
    position: relative;
    z-index: 1;

    header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 24px;

        h4 {
            font-size: 18px;
            font-weight: bold;
        }

        img {
            width: 16px;
            height: 16px;
            cursor: pointer;
        }
    }
    > img {
        display: block;
        width: 100%;
    }

    iframe {
        height: 480px;
        width: 100%;
        border: none;
    }
`
