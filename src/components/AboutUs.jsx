// import PropTypes from 'prop-types';
// import './AboutUs.css';

// function AboutUs({ data }) {
//   if (!Array.isArray(data) || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   return (
//     <>
//       <div className="body">
//         {data.map(item => (
//           <div className="about-container" key={item.image}>
//             <img src={item.image} alt="" className="about-image" />
//             <p className="about-text">{item.text}</p>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// // PropTypes for prop validation
// AboutUs.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired
//     })
//   )
// };

// export default AboutUs;

import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './AboutUs.css';

function AboutUs({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle switching to the next card
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  // Effect to switch to the next card every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(nextCard, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, data.length, nextCard]);

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
      <div className="back">
        <h1 style={{fontSize:"4rem", fontWeight:"2000",padding:"0", margin:"1rem"}}>About Us</h1>
        <div className="about-container">
          <img src={data[currentIndex].image} alt="" className="about-image" />
          <p className="about-text" style={{fontSize:"1.5rem"}}>{data[currentIndex].text}</p>
        </div>
      </div>
    </>
  );
}

AboutUs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  )
};

export default AboutUs;


// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import './AboutUs.css';

// function AboutUs({ data }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Function to handle switching to the next card
//   // eslint-disable-next-line react-hooks/exhaustive-deps, no-undef
//   const nextCard = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
//   });

//   // Function to handle switching to the previous card
//   const prevCard = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
//   };

//   // Effect to switch to the next card every 5 seconds
//   useEffect(() => {
//     const intervalId = setInterval(nextCard, 5000);
//     return () => clearInterval(intervalId);
//   }, [currentIndex, data.length, nextCard]);

//   if (!Array.isArray(data) || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   return (
//     <>
//       <div className="body">
//         <div className="about-container">
//           <img src={data[currentIndex].image} alt="" className="about-image" />
//           <p className="about-text">{data[currentIndex].text}</p>
//         </div>
//         <div className="navigation-buttons">
//           <button className="navigation-button" onClick={prevCard}>{'<'}</button>
//           <button className="navigation-button" onClick={nextCard}>{'>'}</button>
//         </div>
//       </div>
//     </>
//   );
// }

// AboutUs.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       text: PropTypes.string.isRequired
//     })
//   )
// };

// export default AboutUs;
