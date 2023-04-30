
import React from 'react';
import { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {

  const [user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
           {/* <Route path="/" element= {
               ...user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
              } /> */}
      {/* <   Route  exact path="/" component={(props) => user && user._id ?<Homepage setLoginUser={setLoginUser}></Homepage>:<Login setLoginUser={setLoginUser}></Login>} />
          <Route path="/login" element={<Login setLoginUser={setLoginUser} />}  /> */}

              {/* <Route path="/register" component={(props) => <Register setLoginUser={setLoginUser}></Register>} /> */}
          {/* <Route path="/login" component={(props) => <Login setLoginUser={setLoginUser}></Login>} /> */}
          
          {/* <Route path="/register" element={<Register />} /> */}

      </Routes>

      </Router>

    </div>
  );
}

export default App;
