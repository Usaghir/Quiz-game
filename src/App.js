import logo from './logo.svg';
import './App.css';
import { QuizProvider } from './context/QuizContext';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Quiz/>
     </QuizProvider>
    </div>
  );
}

export default App;
