import Home from './components/Home';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from './components/Data'; // Import the data array
import Accommodation from './components/Accommodation';
import image from './components/Images';
import TariffDetails from './components/TariffDetails';
import InKipling from './components/InKipling';
import inKiplingImages from './components/InKiplingImages';
import AroundKipling from './components/AroundKipling';
import AroundKiplingImages from './components/AroundKiplingImages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Pass the data array as a prop to the AboutUs component */}
        <Route path="/aboutus" element={<AboutUs data={data} />} />
        <Route path="/accommodation" element={<Accommodation image={image} />} />
        <Route path="/tariffDetails" element={<TariffDetails />} />
        <Route path="/inKipling" element={<InKipling inKiplingImages={inKiplingImages}/>} /> 
        <Route path="/AroundKipling" element={<AroundKipling AroundKiplingImages={AroundKiplingImages} />} />
      </Routes>
    </Router>
  );
}

export default App;

