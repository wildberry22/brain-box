import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/HomePage";
import TopicsPage from "./pages/TopicsPage";
import QuizPage from "./pages/QuizPage";
import NotFoundPage from "./pages/NotFoundPage";

import Transition from "./animation/transition";

function App() {
  const location = useLocation();
  return (
    <div className="App">
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
  );
}

export default App;
