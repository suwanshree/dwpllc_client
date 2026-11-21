import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import PrivateRoute from "./components/PrivateRoute";
import theme from "./theme";
import Home from "./pages/Home";

const Members = lazy(() => import("./pages/Members"));

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route
              path="/members"
              element={
                <PrivateRoute>
                  <Suspense
                    fallback={
                      <div
                        className="public-site"
                        role="status"
                        style={{
                          minHeight: "100svh",
                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        Opening member portal…
                      </div>
                    }
                  >
                    <Members />
                  </Suspense>
                </PrivateRoute>
              }
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
