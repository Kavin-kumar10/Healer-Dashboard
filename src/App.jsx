import './App.scss';
import Dashboard from './Dashboard';
import Doctors from './Doctors';
import Leave from './Leave';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListProvider } from './ListContext';


function App() {
  return (
    <Router>
      <div className="App">
        <ListProvider>
        <Routes>
          <Route path='/Healer-Dashboard' element={<Dashboard/>} />
          <Route path='/Doctors' element={<Doctors/>} />
          <Route path='/Leave' element={<Leave/>} />
        </Routes>
        </ListProvider>
      </div>
    </Router>
  );
}

export default App;
