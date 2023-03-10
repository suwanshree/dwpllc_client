import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Members from "./pages/Members";
import theme from "./theme";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/members" element={<Members />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
