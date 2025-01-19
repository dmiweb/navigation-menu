import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import {HomePage, DriftPage, TimeAttackPage, ForzaPage} from './pages';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Route>
    </Routes>
  )
}

export default App;