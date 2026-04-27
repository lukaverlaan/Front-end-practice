import { useParams } from 'react-router';
import { getById } from '../../api/index';
import useSWR from 'swr';
import AsyncData from '../../components/AsyncData';

const SiteDetail = () => {
    const { id } = useParams();
    const idAsNumber = Number(id);

    const {
        data: site,
        error: siteError,
        isLoading: siteLoading,
    } = useSWR(id ? `sites/${idAsNumber}` : null, getById);

    if (!site) {
        return (
            <div>
                <h1>Site niet gevonden</h1>
                <p>Er is geen site met id {id}.</p>
            </div>
        );
    }

    return (
        <AsyncData loading={siteLoading} error={siteError}>
            <div className="p-4">
                <h1 className="text-2xl font-semibold mb-4">
                    {site.naam}
                </h1>

                <div className="space-y-2">
                    <p><strong>Locatie:</strong> {site.locatie}</p>
                    <p><strong>Capaciteit:</strong> {site.capaciteit}</p>
                    <p><strong>Operationele status:</strong> {site.operationele_status}</p>
                    <p><strong>Productie status:</strong> {site.productie_status}</p>
                </div>
            </div>
        </AsyncData>
    );
};

export default SiteDetail;