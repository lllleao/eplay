import styled from 'styled-components'
import { breakpoints, colors } from '../../style'

type maxWidth = {
    $maxWidth?: string
}

type RowProps = {
    $margintop?: string
}

type isActive = {
    $isActive: boolean
}

export const Row = styled.div<RowProps>`
    display: flex;
    column-gap: 24px;
    margin-top: ${({ $margintop }) => $margintop || '0'};
    align-items: flex-end;

    @media (max-width: ${breakpoints.tablet}) {
        display: block;
    }
`

export const InputGroup = styled.div<maxWidth>`
    flex: auto;
    max-width: ${({ $maxWidth }) => $maxWidth || 'auto'};
    &.error {
        border: 1px solid red;
    }

    label {
        font-size: 14px;
        margin-bottom: 8px;
        display: block;
    }

    input,
    select {
        background-color: ${colors.withe};
        border: 1px solid ${colors.withe};
        height: 32px;
        padding: 0 8px;
        width: 100%;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 16px;
    }
`

export const TabButton = styled.button<isActive>`
    border-radius: 8px;
    font-size: 14px;
    font-weight: bold;
    color: ${colors.withe};
    background-color: ${({ $isActive }) =>
        $isActive ? colors.green : colors.black};
    height: 32px;
    border: none;
    margin-right: 16px;
    padding: 0 8px;
    cursor: pointer;

    img {
        margin-right: 8px;
    }

    @media (max-width: ${breakpoints.tablet}) {
        margin-top: 8px;
        width: 100%;
    }
`
