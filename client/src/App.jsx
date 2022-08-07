import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Arrivals, Checkout, Departures, Landing } from './pages'

const App = () => {
    useEffect(() => {
        window.process = {
            ...window.process,
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/arrivals" element={<Arrivals />} />
                <Route
                    path="/checkout/:chainName/:address/:tokenId"
                    element={<Checkout />}
                />
                <Route path="/departures" element={<Departures />} />
                <Route path="/" element={<Landing />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
