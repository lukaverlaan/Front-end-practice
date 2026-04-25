import Transaction from './Transaction';

function TransactionTable({ transactions }) {
    if (transactions.length === 0) {
        return (
            <div className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50'>There are no transactions yet.</div>
        );
    }

    return (
        <table className='table-auto w-full border-collapse'>
            <thead>
                <tr className="border-b-2 border-gray-300">
                    <th className="text-start py-2">Date</th>
                    <th className="text-start py-2">User</th>
                    <th className="text-start py-2">Place</th>
                    <th className='text-end py-2'>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((transaction) => (
                    <Transaction key={transaction.id} {...transaction} />
                ))}
            </tbody>
        </table>
    );
}

export default TransactionTable;
