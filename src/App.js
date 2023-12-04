import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Display from "./Rou/Display";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Display />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
