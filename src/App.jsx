import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Agrifood from './components/subpages/Agrifood';
import Biomedical from './components/subpages/Biomedical';

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Agrifood" element={<Agrifood />} />
        <Route path="Biomedical" element={<Biomedical />} />
      </Routes>
    </Router>
  );
}

export default App;