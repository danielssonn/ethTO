import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Departures, Landing, Rent, RentCheckout } from './pages'

const App = () => {
    useEffect(() => {
        window.process = {
            ...window.process,
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/departures" element={<Departures />} />
                <Route path="/" element={<Landing />} />
                <Route path="/rent" element={<Rent />} />
                <Route
                    path="/rent-checkout/:chainName/:address/:tokenId"
                    element={<RentCheckout />}
                />
            </Routes>
        </BrowserRouter>
    )
}

export default App
