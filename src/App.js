import AppRoutes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";


// test
function App() {
  return (
    <div data-testid="app-container" className="App">
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;
