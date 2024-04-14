import './Accommodation.css';
import image from './Images.js';

function Accommodation(){
    return(
        <>
        {/* {image.map((item,index)=>(

        ))} */}
            <div className="accom-body">
                {image.map((item, index) => (
                    <div className="card-container" key={index}>
                        <h1 style={{ margin:"2rem", padding:"0" ,fontSize:"3rem"}}>{item.txt}</h1>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </>
    );
}

export default Accommodation;


