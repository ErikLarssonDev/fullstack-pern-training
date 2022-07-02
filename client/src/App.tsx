import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import UserListPage from './pages/UserListPage'


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/user-list' element={<UserListPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
