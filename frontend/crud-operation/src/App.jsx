
import "./App.css"

import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import  Login   from "./Login"
import  Signup from "./Signup"


export const App = () => {

 return (
  <Router>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
 )
 
}
export default App