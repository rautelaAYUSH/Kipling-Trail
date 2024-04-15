import './AroundKipling.css';
import PropTypes from 'prop-types';

function AroundKipling({ AroundKiplingImages }){
    return(
        <>
            {AroundKiplingImages.map((prop,index)=>(
                <div className='InKiplingBack' key={index}>
                    <div className='InKiplingContent'>
                        <h1 style={{margin:'0.5rem',padding:'1.5rem'}}>{prop.heading}</h1>
                        <div className='InKiplingCard'>
                            <img src={prop.image} style={{width:'50%',height:'32rem',borderRadius:'2rem'}} />
                            <p style={{margin:'0',padding:'0',width:'50%',fontSize:'1.5rem'}}>{prop.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

AroundKipling.propTypes = {
    AroundKiplingImages: PropTypes.arrayOf(
      PropTypes.shape({
        heading: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };
  

export default AroundKipling;