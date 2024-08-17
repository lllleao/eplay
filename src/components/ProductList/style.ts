import styled from 'styled-components'
import { breakpoints, colors } from '../../style'
import { Card } from '../Product/style'

type Props = {
    $background: 'gray' | 'black'
}

export const Container = styled.section<Props>`
    padding: 32px 0;
    background-color: ${({ $background }) =>
        $background === 'black' ? `${colors.black}` : `${colors.gray}`};

    ${Card} {
        height: 100%;
        background-color: ${({ $background }) =>
            $background === 'black' ? `${colors.gray}` : `${colors.black}`};
    }
`
export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 40px;

    @media (max-width: ${breakpoints.desktop}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: 1fr;
    }
`
export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
`
