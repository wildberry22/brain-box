import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Box } from "@chakra-ui/react";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import QuizPage from "./pages/QuizPage";
import NotFoundPage from "./pages/NotFoundPage";

import Transition from "./components/animation/Transition";
import Preloader from "./components/Preloader";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimation(!animation);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }, 1500);
  }, []);

  return (
    <Box position="relative">
      <Preloader animation={animation} />
      <div
        className="App"
        style={{ transition: ".4s ease", opacity: loading ? 0 : 1 }}
      >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Transition component={<HomePage />} />} />
              <Route
                path="/topics"
                element={<Transition component={<TopicsPage />} />}
              />
              <Route
                path="/quiz"
                element={<Transition component={<QuizPage />} />}
              />
              <Route
                path="/*"
                element={<Transition component={<NotFoundPage />} />}
              />
            </Route>
          </Routes>
        </AnimatePresence>
      </div>
    </Box>
  );
}

export default App;
