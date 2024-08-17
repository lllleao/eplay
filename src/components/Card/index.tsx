import { Container } from './style'

type Props = {
    title: string
    children: JSX.Element
}

const Card = ({ title, children }: Props) => {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}

export default Card
