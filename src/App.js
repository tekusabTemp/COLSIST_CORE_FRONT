import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import { UserProvider } from "./UserContext";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    // <div className="App">
    //   <h1 class="text-3xl font-bold underline text-orange-500">
    //   Hello world!
    // </h1>
    // </div>

    // <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        {/* <NavBar /> */}
        {/* <Container fluid className="p-sm-3 p-md-5 main-container"> */}
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="*" element={<Error />} /> */}
          </Routes>
        {/* </Container> */}
      </Router>
    // </UserProvider>
  );
}

export default App;
