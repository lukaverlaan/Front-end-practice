import { useState } from 'react';
import useSWR from 'swr';
import { getAll } from '../../api';
import AsyncData from '../../components/AsyncData';
import { Link } from 'react-router';
import StatusBadge from '../../components/StatusBadge';

const UsersList = () => {
    const { data: users = [], error, isLoading } = useSWR('gebruikers', getAll);

    const [search, setSearch] = useState('');

    // 🔍 Filter logic
    const filteredUsers = users.filter((u) => {
        const fullName = `${u.voornaam || ''} ${u.naam || ''}`.toLowerCase();

        return (
            fullName.includes(search.toLowerCase()) ||
            u.email?.toLowerCase().includes(search.toLowerCase()) ||
            u.rol?.toLowerCase().includes(search.toLowerCase())
        );
    });

    return (
        <div className="p-6 max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold mb-2">Gebruikers</h1>
                <p className="text-gray-400">Beheer alle gebruikers</p>
            </div>

            {/* 🔍 Search */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Zoek op naam, email of rol..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full md:w-96 px-4 py-2 rounded-lg 
                    bg-white/5 border border-white/10 
                    focus:outline-none focus:border-(--primary)
                    transition"
                />
            </div>

            {/* List */}
            <AsyncData loading={isLoading} error={error}>
                <div className="border border-white/10 rounded-xl overflow-hidden">

                    {filteredUsers.length === 0 ? (
                        <div className="p-6 text-gray-400 text-sm">
                            Geen gebruikers gevonden.
                        </div>
                    ) : (
                        filteredUsers.map((u) => (
                            <Link
                                key={u.id}
                                to={`/gebruikers/${u.id}`}
                                className="flex items-center justify-between px-5 py-4 
                                hover:bg-white/5 transition border-b border-white/5 last:border-none"
                            >
                                {/* Left */}
                                <div className="flex items-center gap-4">

                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-(--primary)/20 flex items-center justify-center text-sm font-semibold">
                                        {u.voornaam?.[0]}{u.naam?.[0]}
                                    </div>

                                    <div>
                                        <p className="font-medium">
                                            {u.voornaam} {u.naam}
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            {u.email}
                                        </p>
                                    </div>
                                </div>

                                {/* Right */}
                                <div className="flex items-center gap-4">

                                    <span className="text-sm text-gray-400">
                                        {u.rol}
                                    </span>

                                    <StatusBadge value={u.status} />

                                </div>
                            </Link>
                        ))
                    )}

                </div>
            </AsyncData>

        </div>
    );
};

export default UsersList;