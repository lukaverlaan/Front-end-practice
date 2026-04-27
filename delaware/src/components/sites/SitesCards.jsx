import Site from './Site';

export default function SitesCards({ sites }) {

    if (sites.length === 0) {
        return (
            <div className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50'>
                There are no sites yet.
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
            {sites
                .sort((a, b) => a.naam.toUpperCase().localeCompare(b.naam.toUpperCase()))
                .map((s) => (
                    <div key={s.id}>
                        <Site {...s} />
                    </div>
                ))}
        </div>
    );
}