
import { Routes, Route } from "react-router-dom";
import Users from "./views/Users/Users";
import User from "./views/Users/User";
import Login from "./views/Login/Login";
function App() {

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Users />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;