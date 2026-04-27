import { memo } from 'react';
import { Link } from 'react-router';

const MemoizedSite = memo(function Site({ id, naam, capaciteit, locatie, operationele_status, productie_status }) {

    return (
        <div className="p-3 outline outline-black/5 rounded-md shadow-lg mb-4">
            <h5 className="text-xl font-medium mb-2">
                <Link className="text-blue-600 underline" to={`/sites/${id}`}>
                    {naam}
                </Link>
            </h5>

            <div className="text-sm mb-2">
                <p><strong>Locatie:</strong> {locatie}</p>
                <p><strong>Capaciteit:</strong> {capaciteit}</p>
                <p><strong>Operationele status:</strong> {operationele_status}</p>
                <p><strong>Productie status:</strong> {productie_status}</p>
            </div>
        </div>
    );
});

export default MemoizedSite;