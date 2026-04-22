import Transaction from './components/transactions/Transaction';
import { TRANSACTION_DATA } from './api/mock_data';
import PlacesList from './components/places/PlacesList';

function App() {
  return (
    <div className="bg-white text-gray-900">
      <h1 className="text-2xl font-bold text-center mb-4">
        Mijn Budget App
      </h1>
      {TRANSACTION_DATA.map((t) => (<Transaction {...t} key={t.id} />))}
      <PlacesList />
    </div>);
}

export default App;
