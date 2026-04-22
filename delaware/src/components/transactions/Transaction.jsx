export default function Transaction({ user, amount, place }) {
    return (
        <div className="bg-amber-800 text-amber-100 border rounded-lg text-center">
            {user.name} gaf €{amount} uit bij {place.name}
        </div>
    );
}