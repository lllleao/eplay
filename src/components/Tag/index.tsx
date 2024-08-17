import { TagContainer } from './style'

type Props = {
    children: string
    size?: 'small' | 'big'
}

const Tag = ({ children, size = 'small' }: Props) => {
    return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
