import { useState } from 'react';
import { PLACE_DATA } from '../../api/mock_data';
import Place from './Place';

const PlacesList = () => {
    const [places, setPlaces] = useState(PLACE_DATA);

    const handleDeletePlace = (id) => {
        setPlaces((places) => places.filter((p) => p.id !== id));
    };

    return (
        <>
            <h1 className="text-4xl mb-4">Places</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
                {places
                    .sort((a, b) =>
                        a.name.toUpperCase().localeCompare(b.name.toUpperCase()),
                    )
                    .map((p) => (
                        <div key={p.id}>
                            <Place {...p} onDelete={handleDeletePlace} />
                        </div>
                    ))}
            </div>
        </>
    );
};

export default PlacesList;