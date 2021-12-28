import 'bootswatch/dist/cyborg/bootstrap.min.css'
import NavBar from '../components/navbar';
import { searchData } from '../utils/get-api-data';
import { useState, useEffect } from 'react';
import CryptoCard from '../components/crypto-card';
import { APIURL } from '../App';

function MainApp() {
    const [cryptosInfo, setCryptosInfo] = useState([{}])
    const [allCryptosName, setAllCryptosName] = useState([]);

    const getAllCryptos = async () => {
        const request = await fetch(APIURL);
        const cryptosData = await request.json();
        setAllCryptosName(cryptosData.map(crypto => crypto.id))
        setCryptosInfo(cryptosData);
    }
    
    useEffect( () => {
        getAllCryptos()
    }, [])

    return (
        <div className="App">
            <NavBar allCryptos={allCryptosName} />
            <div className="container">
                {cryptosInfo.map(crypto => {
                    return (
                        <div key={crypto.symbol} id={crypto.id}>
                            <CryptoCard 
                                image={crypto.image} 
                                name={crypto.id} 
                                value={crypto.current_price}
                                changePorcent={crypto.atl_change_percentage}
                                lastUpdate={crypto.last_updated? crypto.last_updated.split("T")[0]: "loading"}
                                marketCap={crypto.market_cap}
                                totalVolume={crypto.total_volume}
                            />
                        </div>
                    )
                })}

                <h3 className='d-none' id="not-found-modal">NOT FOUND</h3>
            </div>
        </div>
    );
}

export default MainApp;