import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Landing, Lend, Rent } from './pages'

const App = () => {
    useEffect(() => {
        window.process = {
            ...window.process,
        }
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/lend" element={<Lend />} />
                <Route path="/rent" element={<Rent />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
