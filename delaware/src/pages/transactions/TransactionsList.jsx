import { useState, useMemo, useEffect } from 'react';
import TransactionTable from '../../components/transactions/TransactionTable';
import { TRANSACTION_DATA } from '../../api/mock_data';
import * as transactionsApi from '../../api/transactions';

export default function TransactionsList() {
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');

    const filteredTransactions = useMemo(() => TRANSACTION_DATA.filter((t) => {
        return t.place.name.toLowerCase().includes(search.toLowerCase());
    }), [search]);

    useEffect(() => {
        const fetchTransactions = async () => {
            const data = await transactionsApi.getAll();
            console.log(data);
        };

        fetchTransactions();
    }, []);

    return (
        <>
            <h1 className="text-4xl mb-4">Transactions</h1>
            <div className='flex mb-3 w-1/2 gap-2 mx-4'>
                <input
                    type='search'
                    id='search'
                    className='rounded grow bg-white p-1 text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300
          focus:outline-gray-600'
                    placeholder='Search'
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                />
                <button type='button' className='py-2 px-2.5 rounded-md text-blue-600 border border-blue-600' onClick={() => {
                    setSearch(text);
                }}>
                    Search
                </button>
            </div>
            <TransactionTable transactions={filteredTransactions} />
        </>
    );
}
