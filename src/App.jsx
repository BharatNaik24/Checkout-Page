import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="container mt-5 p-5">
      <Header />
      <Body />
    </div>
  );
}

export default App;
