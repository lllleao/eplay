import styled from 'styled-components'
import { colors } from '../../style'
import { Link } from 'react-router-dom'

type Prop = {
    $variant: 'primary' | 'secondary'
}

export const ButtonContainer = styled.button<Prop>`
    border: 2px solid
        ${({ $variant }) =>
            $variant === 'primary' ? colors.green : colors.withe};
    color: ${colors.withe};
    background-color: ${({ $variant }) =>
        $variant === 'primary' ? colors.green : 'transparent'};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
`
export const ButtonLink = styled(Link)`
    border: 2px solid ${colors.withe};
    color: ${colors.withe};
    background-color: transparent;
    font-size: 16px;
    font-weight: bold;
    padding: 8px 16px;
    border-radius: 8px;
    text-decoration: none;
`
