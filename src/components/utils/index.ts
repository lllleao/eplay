export const parseToBrl = (amonut = 0) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(amonut)
}

export const sumTot = (items: Game[]) => {
    return items.reduce((acum, currentItem) => {
        if (currentItem.prices.current) {
            return (acum += currentItem.prices.current)
        }
        return 0
    }, 0)
}
