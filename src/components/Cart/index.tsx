import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Tag from '../Tag'
import Button from '../Button'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { parseToBrl, sumTot } from '../utils'
import * as S from './style'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const closeCart = () => {
        dispatch(close())
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    const goToCheckOut = () => {
        navigate('/checkout')
        closeCart()
    }

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

    return (
        <S.CartContainer className={isOpen ? 'is-open' : ''}>
            <S.Overlay onClick={closeCart} />
            <S.Aside>
                {items.length > 0 ? (
                    <>
                        <ul>
                            {items.map((item) => (
                                <S.CartItem key={item.id}>
                                    <img
                                        src={item.media.thumbnail}
                                        alt={item.name}
                                    />
                                    <div>
                                        <h3>{item.name}</h3>
                                        <Tag>{item.details.category}</Tag>
                                        <Tag>{item.details.system}</Tag>
                                        <span>
                                            {parseToBrl(item.prices.current)}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        type="button"
                                    />
                                </S.CartItem>
                            ))}
                        </ul>
                        <S.Quantity>
                            {items.length} jogo(s) no carrinho
                        </S.Quantity>
                        <S.Prices>
                            Total de {parseToBrl(sumTot(items))}{' '}
                            <span>Em até 6x sem juros</span>
                        </S.Prices>
                        <Button
                            title="Clique aqui para continuar com a compra"
                            type="button"
                            onClick={goToCheckOut}
                        >
                            Continuar com a compra
                        </Button>
                    </>
                ) : (
                    <p className="empty-text">
                        O carrinho está vazio, adicione pelo menos um produto
                        para continuar com a compra
                    </p>
                )}
            </S.Aside>
        </S.CartContainer>
    )
}

export default Cart
