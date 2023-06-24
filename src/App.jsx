import {Routes, Route} from 'react-router-dom'

import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import StatisticsPage from './pages/StatisticsPage';
import TopicsPage from './pages/TopicsPage';
import QuizPage from './pages/QuizPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:quizName" element={<QuizPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
