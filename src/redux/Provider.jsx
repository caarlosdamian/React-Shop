import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

const Provider = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            {children}
        </ReduxProvider>
    )
}

export default Provider
