import { Navigate } from 'react-router-dom'

import useWeb3 from '../hooks/use-web3'

const AuthRoute = ({
    children
}) => {
    const { currentAccount } = useWeb3()

    if (currentAccount) {
        return children
    } else {
        return (
            <Navigate to="/" replace />
        )
    }
}

export default AuthRoute
