import { useState } from "react";
import '../css/CryptoCard.css'

function CryptoCard({ coin }) {
    const [detailsVisible, setDetailsVisible] = useState(false);
    
    const handleDetailsVisibility = () => {
        detailsVisible? setDetailsVisible(false)
        : setDetailsVisible(true);
    }

    return (
        <div style={{display:"flex", flexDirection: "column"}} className="bg-black">
            <button className="btn container-xl" style={styles.container} onClick={handleDetailsVisibility}>
                <div className="d-flex align-items-start">
                    <img src={coin.image} alt={coin.name} style={styles.img} className="col-lg-0"/>
                    <div style={{width: 'fit-content'}}className="ms-3 d-flex flex-column align-items-center text-white">
                        <strong style={{width:'100%', textAlign:'left'}}>{coin.name}</strong>
                        <span style={{width:'100%', textAlign: 'left'}}>{coin.symbol}</span>
                    </div>
                </div>
                <h5 className="text-success">${coin.current_price}</h5>
            </button>
            <div className={detailsVisible?'details-container details-container-open':'details-container'}>
                <ul className='list-group' style={{width: "100%", height:'100%', borderRadius: 0}}>
                    <li className={
                            coin.price_change_percentage_24h > 0? "list-group-item list-group-item-success" 
                            : "list-group-item list-group-item-danger"
                        }
                    >
                        price change percentage: {coin.price_change_percentage_24h}%
                    </li>
                    <li className={
                            coin.price_change_24h > 0? "list-group-item list-group-item-success" 
                            : "list-group-item list-group-item-danger"
                        }
                    >
                        price change: {coin.price_change_24h}$
                    </li>
                    <li className="list-group-item">
                        last update: {coin.last_updated? coin.last_updated.split("T")[0]: "loading"}
                    </li>
                    <li className="list-group-item">
                        market cap: {coin.market_cap}
                    </li>
                    <li className="list-group-item">
                        total volume: {coin.total_volume}
                    </li>
                </ul>
            </div>
        </div> 


     );
}


const styles = {
    img: {
        width: "40px",
        height: "40px"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        margin:"10px 0",
    },
}

export default CryptoCard;