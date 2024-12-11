
import "./App.css"

import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import  Login   from "./Login"
import  Signup from "./Signup"
import UserData from "./UserData"

export const App = () => {

 return (
  <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/UserData" element={<UserData />} />
        </Routes>
      </div>
    </Router>
 )
 
}
export default App