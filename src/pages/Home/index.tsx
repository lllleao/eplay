import Baner from '../../components/Baner'
import ProductList from '../../components/ProductList'
import { game } from '../../mock'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
    const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
    const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()
    const gameProductList: Game[] = [game, game, game, game, game]
    return (
        <>
            <Baner />
            <ProductList
                games={gameProductList}
                background="black"
                title="Promoções"
                id="on-sale"
                isLoading={isLoadingSale}
            />
            <ProductList
                id="coming-soon"
                games={gameProductList}
                background="gray"
                title="Em breve"
                isLoading={isLoadingSoon}
            />
        </>
    )
}

export default Home
