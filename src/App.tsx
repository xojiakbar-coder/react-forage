import viteLogo from "/vite.svg";
import reactLogo from "/react.svg";
import mantineLogo from "/mantine.svg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://mantine.dev" target="_blank">
          <img src={mantineLogo} className="logo mantine" alt="Mantine logo" />
        </a>
      </div>

      <h1>React Forage</h1>
    </>
  );
}

export default App;
