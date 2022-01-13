import './App.css';
import Dashboard from './page/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Edit from './page/dashboard/edit';
import Create from './page/dashboard/create';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='edit/' element={<Edit />} />
          <Route exact path='create-item/' element={<Create />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
