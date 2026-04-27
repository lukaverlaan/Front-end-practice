import useSWR from 'swr';
import { getAll } from '../../api';
import SitesCards from '../../components/sites/SitesCards';
import AsyncData from '../../components/AsyncData';

const SitesList = () => {

    const { data: sites = [], error, isLoading } = useSWR('sites', getAll);

    return (
        <>
            <h1>Sites</h1>

            <AsyncData loading={isLoading} error={error}>
                <SitesCards sites={sites} />
            </AsyncData>
        </>
    );
};

export default SitesList;