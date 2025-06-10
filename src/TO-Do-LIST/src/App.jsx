import MainTodo from "./component/MainTodo"
import { AppDataProvider } from "./component/NewContext"

function App() {
    return (
        <AppDataProvider>
            <MainTodo/>
        </AppDataProvider>
        
    )
    }

export default App
