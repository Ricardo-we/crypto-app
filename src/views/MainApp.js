import 'bootswatch/dist/lux/bootstrap.min.css'
import NavBar from '../components/NavBar';
import { useState, useEffect } from 'react';
import CryptoCard from '../components/CryptoCard';
import { getAllCryptos } from '../utils/get-api-data';

function MainApp() {
    const [coins, setCoins] = useState([{symbol:'', id:'', name:''}])
    const [search, setSearch] = useState('');

    const getAllCryptosHandler = async () => {
        const response = await getAllCryptos();
        setCoins(response);
        console.log(response);
    }
    
    useEffect( () => {
        getAllCryptosHandler()
    }, [])

    return (
        <div className="bg-dark">
            <NavBar searchHandler={(text) => setSearch(text)}/>

            <div className="container-xxl">
                {coins.filter(coin => coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search))
                .map(crypto => {
                    return (
                        <div key={crypto.symbol} id={crypto.id}>
                            <CryptoCard coin={crypto}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MainApp;