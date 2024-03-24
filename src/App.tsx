import "./App.scss";

import MainComponent from "./components/main-component/main-component.component";
import ToggleLanguages from "./components/toggle-languages/toggle-languages.component";

function App() {
  return (
    <div className="App">
      <ToggleLanguages />
      <MainComponent />
    </div>
  );
}

export default App;
