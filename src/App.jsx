import './App.css'
import List from './components/List'
import { myStore } from './redux/Store'
import { Provider } from 'react-redux'

function App() {

  return (
    <>
      <Provider store={myStore}>
        <List/>
      </Provider>
    </>
  )
}

export default App
