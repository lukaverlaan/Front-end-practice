import { IoTrashOutline, IoPencilOutline } from 'react-icons/io5';
import { Link } from 'react-router';
import { memo } from 'react';

const dateFormat = new Intl.DateTimeFormat('nl-BE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
});

const amountFormat = new Intl.NumberFormat('nl-BE', {
    currency: 'EUR',
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
});

const TransactionMemoized = memo(function Transaction({ id, date, amount, user, place, onDelete }) {
    const handleDelete = () => {
        onDelete(id);
    };
    return (
        <tr className="border-b border-gray-200 dark:border-gray-800" data-cy="transaction">
            <td className="py-2" data-cy='transaction_date'>{dateFormat.format(new Date(date))}</td>
            <td className="py-2" data-cy='transaction_user'>{user.name}</td>
            <td className="py-2" data-cy='transaction_place'>{place.name}</td>
            <td className='text-end py-2' data-cy='transaction_amount'>{amountFormat.format(amount)}</td>
            <td className="py-2 flex justify-end">
                {onDelete ?
                    <>
                        <Link to={`/transactions/edit/${id}`} className='mx-2 py-2
            px-2.5 rounded-md bg-blue-600'  data-cy='transaction_edit_btn'>
                            <IoPencilOutline />
                        </Link>
                        <button className='py-2 px-2.5 rounded-md bg-blue-600'
                            onClick={handleDelete} data-cy='transaction_remove_btn'>
                            <IoTrashOutline />
                        </button>
                    </> : ''}
            </td>
        </tr>
    );
});

export default TransactionMemoized;
