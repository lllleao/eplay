import ProductList from '../../components/ProductList'
import { game } from '../../mock'

import {
    useGetActionGamesQuery,
    useGetFightGamesQuery,
    useGetRPGGamesQuery,
    useGetSimulationGamesQuery,
    useGetSportsGamesQuery
} from '../../services/api'

const Categories = () => {
    const { data: gamesAcao, isLoading: isLoadingAction } =
        useGetActionGamesQuery()
    const { data: gamesLuta, isLoading: isLoadingFight } =
        useGetFightGamesQuery()
    const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
    const { data: gamesSimulacao, isLoading: isLoadingSimulation } =
        useGetSimulationGamesQuery()
    const { data: gamesEsportes, isLoading: isLoadingSports } =
        useGetSportsGamesQuery()
    const gameProductList: Game[] = [game, game, game, game, game]

    return (
        <>
            <ProductList
                id="action"
                games={gameProductList}
                background="black"
                title="Ação"
                isLoading={isLoadingAction}
            />
            <ProductList
                id="sports"
                games={gameProductList}
                background="gray"
                title="Esportes"
                isLoading={isLoadingSports}
            />
            <ProductList
                id="fight"
                games={gameProductList}
                background="black"
                title="Luta"
                isLoading={isLoadingFight}
            />
            <ProductList
                id="rpg"
                games={gameProductList}
                background="gray"
                title="RPG"
                isLoading={isLoadingRPG}
            />
            <ProductList
                id="simulation"
                games={gameProductList}
                background="black"
                title="Simulação"
                isLoading={isLoadingSimulation}
            />
        </>
    )
}

export default Categories
