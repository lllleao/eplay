import Baner from '../../components/Baner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

const Home = () => {
    const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
    const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

    return (
        <>
            <Baner />
            <ProductList
                games={onSaleGames}
                background="black"
                title="Promoções"
                id="on-sale"
                isLoading={isLoadingSale}
            />
            <ProductList
                id="coming-soon"
                games={soonGames}
                background="gray"
                title="Em breve"
                isLoading={isLoadingSoon}
            />
        </>
    )
}

export default Home
