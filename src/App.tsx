import "./App.css";
import ThemeBox from "./components/ThemeBox";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-700">
        <h1>React-useContext-ThemeApp</h1>
        <ThemeProvider>
          <div>
            <ThemeBox />
            <ThemeToggleButton />
          </div>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
