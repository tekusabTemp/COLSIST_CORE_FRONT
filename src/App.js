import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { UserProvider } from "./UserContext";
import NavBar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (

    // <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <NavBar />
        <div className="bg-sky-200 min-h-screen">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        </div>
      </Router>
    // </UserProvider>
  );
}

export default App;
