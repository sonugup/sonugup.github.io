import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./Routes/AllRoutes";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <Box
      className="App"
      id="home"
      fontFamily={"Titillium Web"}
      pt={12}
      bg="rgb(34,39,51)"
    >
     
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
