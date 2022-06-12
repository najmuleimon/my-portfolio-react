import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import ProjectDetail from './components/Home/ProjectDetail/ProjectDetail';
import AllProjects from './components/Home/AllProjects/AllProjects';
import Footer from './components/Footer/Footer';
import AboutMe from './components/AboutMe/AboutMe';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<AllProjects />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/blog" element={<Blogs />}></Route>
        <Route path="/project/:project_id" element={<ProjectDetail />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
