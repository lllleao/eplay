import ProductList from '../../components/ProductList'

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

    return (
        <>
            <ProductList
                id="action"
                games={gamesAcao}
                background="black"
                title="Ação"
                isLoading={isLoadingAction}
            />
            <ProductList
                id="sports"
                games={gamesEsportes}
                background="gray"
                title="Esportes"
                isLoading={isLoadingSports}
            />
            <ProductList
                id="fight"
                games={gamesLuta}
                background="black"
                title="Luta"
                isLoading={isLoadingFight}
            />
            <ProductList
                id="rpg"
                games={gamesRPG}
                background="gray"
                title="RPG"
                isLoading={isLoadingRPG}
            />
            <ProductList
                id="simulation"
                games={gamesSimulacao}
                background="black"
                title="Simulação"
                isLoading={isLoadingSimulation}
            />
        </>
    )
}

export default Categories
