import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Projects from './components/pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route exact path="/" element={<Home />} > </Route>
      </Routes>
      <Routes>
        <Route path="/NewProject" element={<NewProject />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/company" element={<Company />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />} >
        </Route>
      </Routes>
      <Routes>
        <Route path="/Projects" element={<Projects />} >
        </Route>
      </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
