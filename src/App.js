import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ProjectDetail from './components/Home/ProjectDetail/ProjectDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:id" element={<ProjectDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
