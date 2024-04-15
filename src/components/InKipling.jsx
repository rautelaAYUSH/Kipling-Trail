import './inKipling.css'

function InKipling() {
    return(
        <div className='InKiplingBack'>
            <div className='InKiplingContent'>
                <h1 style={{margin:'0.5rem',padding:'1rem'}}>Bonfire</h1>
                <div className='InKiplingCard'>
                    <img src="trek.jpg" style={{width:'50%',borderRadius:'2rem'}} />
                    <p style={{margin:'0',padding:'0',width:'50%',fontSize:'1.5rem'}}>Are you looking for the perfect spot to enjoy a bonfire with your friends and family? Look no further than Kipling Trails Cottage near the breathtaking waterfall! With its picturesque scenery, you can watch a movie outdoors or just sit around the fire and enjoy nature. The cottage offers plenty of opportunities to make your bonfire experience even more memorable. Whether you are looking to watch a movie under the stars or just relax by the fire, Kipling Trail Cottage is sure to provide an unforgettable experience.</p>
                </div>
            </div>
            <div className='InKiplingContent'>
                <h1 style={{margin:'1rem',padding:'2rem'}}>Board Games</h1>
                <div className='InKiplingCard2'>
                    <img src="boardgame.jpg" style={{width:'50%',borderRadius:'2rem'}} />
                    <p style={{margin:'0',padding:'0',width:'50%',fontSize:'1.5rem'}}>Play ludo, chess, UNO, and other games with your friends and family. Get closer, bond over the competition, and create memories that will last a lifetime.</p>
                </div>
            </div>
        </div>
    );
}

export default InKipling;