import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Agrifood from './components/subpages/Agrifood';

function App() {
  return (
    <Router basename="/KosmodeHealth">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Agrifood" element={<Agrifood />} />
      </Routes>
    </Router>
  );
}

export default App;
