import styled from 'styled-components'
import { colors } from '../../style'
import { Card } from '../Product/style'

type Props = {
    background: 'gray' | 'black'
}

export const Container = styled.section<Props>`
    padding: 32px 0;
    background-color: ${({ background }) =>
        background === 'black' ? `${colors.black}` : `${colors.gray}`};

    ${Card} {
        background-color: ${({ background }) =>
            background === 'black' ? `${colors.gray}` : `${colors.black}`};
    }

    p {
        max-width: 640px;
        font-size: 14px;
        font-weight: normal;
        line-height: 22px;
    }
`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 40px;
`
