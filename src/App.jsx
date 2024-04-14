import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from './components/Data'; // Import the data array
import Accommodation from './components/Accommodation';
import image from './components/Images';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass the data array as a prop to the AboutUs component */}
        <Route path="/aboutus" element={<AboutUs data={data} />} />
        <Route path="/accommodation" element={<Accommodation image={image} />} />
      </Routes>
    </Router>
  );
}

export default App;

