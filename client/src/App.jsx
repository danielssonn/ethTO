import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Departures, Landing, Rent, RentCheckout, Temp } from './pages'

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
                <Route path="/rent-checkout" element={<RentCheckout />} />
                <Route path="/temp" element={<Temp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
