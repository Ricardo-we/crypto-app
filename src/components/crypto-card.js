import { useState } from "react";
import { keyframes } from "styled-components";
import '../css/crypto-card-animation.css'

function CryptoCard({ key_, image, alt="", name, value, changePorcent, lastUpdate, marketCap, totalVolume }) {
    const [dataOpened, setDataOpened] = useState(false);
    const [detailsVisible, setDetailsVisible] = useState("d-none");
    
    const handleDetailsVisibility = () => {
        if(dataOpened) {
            let hideTime = 400;
            setDataOpened(false)
            setDetailsVisible("hideDetailsAnimation")
            setTimeout(() => setDetailsVisible("d-none"), hideTime)
        }
        else {
            setDataOpened(true)
            setDetailsVisible("detailsContainer" )
        }
    }

    return (
        <div style={{display:"flex", flexDirection: "column"}} className="bg-black">
            <button className="btn container-xl" style={styles.container}
                key={key_}
                onClick={handleDetailsVisibility}
                >
                <img src={image} alt={alt} style={styles.img} className="col-lg-0"/>
                <p className="col-lg-1"><strong>{name}</strong></p>
                <h5 className="col-lg-2">${value}</h5>
            </button>
            <div className={detailsVisible}>
                <ul className="list-group" style={{width: "100%"}}>
                    <li key={1} className="list-group-item">change porcentage: {changePorcent}</li>
                    <li key={2} className="list-group-item">last update: {lastUpdate}</li>
                    <li key={3} className="list-group-item">market cap: {marketCap}</li>
                    <li key={4} className="list-group-item">total volume: {totalVolume}</li>
                </ul>
            </div>
        </div> 


     );
}


const styles = {
    img: {
        width: "50px",
        height: "50px"
    },
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: "100%",
        margin:"10px 0",
    },
}

export default CryptoCard;