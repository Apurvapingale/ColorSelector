import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ColorChange from "./components/ColorChange";
function App() {
  return (
    <div class="background d-flex flex-column justify-content-center align-items-center">
      <h1 class="text-center h1 fw-weight-bold">Color Selector</h1>
      <ColorChange />
    </div>
  );
}

export default App;
