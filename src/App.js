import 'bootswatch/dist/cyborg/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainApp from './views/main-app';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
export const APIURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'