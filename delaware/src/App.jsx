import { Link } from 'react-router';

function App() {
  return (
    <div className="mx-4">
      <h1 className="text-4xl mb-4">Welkom!</h1>
      <p>Kies één van de volgende links:</p>
      <ul>
        <li>
          <Link to='/transactions' className="text-blue-600 underline">Transacties</Link> {/* 👈 */}
        </li>
        <li>
          <Link to='/places' className="text-blue-600 underline">Plaatsen</Link> {/* 👈 */}
        </li>
        <li>
          <Link to='/about' className="text-blue-600 underline">Over ons</Link> {/* 👈 */}
        </li>
      </ul>
    </div>
  );
}

export default App;
