import "./App.css";
import ThemeBox from "./components/ThemeBox";
import ThemeToggleButton from "./components/ThemeToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <h1>React-useContext-ThemeApp</h1>
      <ThemeProvider>
        <div>
          <ThemeBox />
          <ThemeToggleButton />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
