import styled from 'styled-components'
import { colors } from '../../style'
import { HashLink } from 'react-router-hash-link'

export const Container = styled.footer`
    padding: 32px 0;
    background-color: ${colors.gray};
    font-size: 14px;
    margin-top: 40px;
`
export const SectionFooter = styled.div`
    margin-bottom: 64px;
`
export const FooterTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 16px;
    color: ${colors.withe};
`
export const Copy = styled.p`
    color: ${colors.withe};
`
export const Links = styled.ul`
    display: flex;
    li {
        margin-right: 8px;
    }
`
export const Link = styled(HashLink)`
    color: ${colors.lightGray};
    text-decoration: none;
`
