import 'bootswatch/dist/cyborg/bootstrap.min.css'
import MainApp from './views/main-app';

function App() {
  return (
    <MainApp/>
  );
}

export default App;
export const APIURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'