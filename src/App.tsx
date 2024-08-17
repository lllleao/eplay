import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './style'
import Rotas from './routes'
import { store } from './store'
import Footer from './components/Footer'
import Cart from './components/Cart'

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalCss />
                <div className="container">
                    <Header />
                </div>
                <Rotas />
                <Footer />
                <Cart />
            </BrowserRouter>
        </Provider>
    )
}

export default App
