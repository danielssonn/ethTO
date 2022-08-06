import { Footer, Header } from '../components'

import AuthRoute from '../components/AuthRoute'

export default function Lend() {
    return (
        <AuthRoute>
            <Header />
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
                Select NFT to lend
            </h1>
            <a href="/lend-checkout">This would be your NFT (click here)</a>
            <Footer />
        </AuthRoute>
    )
}
