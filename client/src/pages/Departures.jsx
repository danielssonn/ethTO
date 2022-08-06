import { Footer, Header } from '../components'

import AuthRoute from '../components/AuthRoute'

export default function Departures() {
    return (
        <AuthRoute>
            <Header />
            Your rented NFTs go here
            <Footer />
        </AuthRoute>
    )
}
