import Tag from '../Tag'
import * as S from './style'

type Props = {
    title: string
    category: string
    system: string
    description: string
    infos: string[]
    image: string
    id: number
}

const Product = ({
    title,
    category,
    system,
    description,
    infos,
    image,
    id
}: Props) => {
    const getDescription = (text: string) => {
        if (text.length > 95) {
            return text.slice(0, 91) + '...'
        }
        return text
    }

    return (
        <S.Card
            title={`Clique aqui para ver mais detalhes do jogo ${title}`}
            to={`/product/${id}`}
        >
            <img srcSet={image} alt="" />
            <S.Info>
                {infos.map((card) => (
                    <Tag key={id}>{card}</Tag>
                ))}
            </S.Info>
            <S.Title>{title}</S.Title>
            <Tag>{category}</Tag>
            <Tag>{system}</Tag>
            <S.Description>{getDescription(description)}</S.Description>
        </S.Card>
    )
}

export default Product
