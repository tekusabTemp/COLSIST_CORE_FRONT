import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import coverPage from "./images/coverPage.jpg";

// import { UserProvider } from "./UserContext";
import NavBar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    // <UserProvider value={{ user, setUser, unsetUser }}>
    <Router>
      <NavBar />
      <div
        className="bg-sky-200 min-h-[calc(100vh_-_60px)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${coverPage})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </div>
    </Router>
    // </UserProvider>
  );
}

export default App;
