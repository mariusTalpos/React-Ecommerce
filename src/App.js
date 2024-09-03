import './categories.styles.scss'

import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation></Navigation>}>
          <Route index element={<Home></Home>}></Route>
          <Route path='sign-in' element={<SignIn></SignIn>}></Route>
        </Route>
      </Routes>
    </div>
  );
}
{/* <Route path='shop' element={fake}></Route>  the path is relative to the parent & the parent component will render unless specified*/}
{/* The index property denotes that this component should be loaded whent he parent path is matched exactly */}
export default App;
