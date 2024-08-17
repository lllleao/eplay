import styled from 'styled-components'
import { colors } from '../../style'

type Props = {
    size?: 'small' | 'big'
}

export const TagContainer = styled.div<Props>`
    background-color: ${colors.green};
    color: ${colors.withe};
    font-size: ${({ size }) => (size === 'big' ? '16px' : '10px')};
    font-weight: bold;
    padding: ${({ size }) => (size === 'big' ? '8px 16px' : '4px 6px')};
    border-radius: 8px;
    display: inline-block;
`
