import React from 'react';

const Transactioncard = ({ info }) => {
    const onUpdate = () => {
        alert('on update')
    }

    const onDelete = () => {
        alert('on delete')
    }

    const { type, category, amount, date, _id } = info;

    return (
        <div className="bg-base-100 rounded-xl shadow-md p-5 w-full transition hover:shadow-lg border border-accent hover:border-primary">
            <div className="flex justify-between items-start mb-4">
                <h3
                    className={`text-lg font-semibold`}
                >
                    {type}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{date}</span>
            </div>

            <div className="space-y-2 mb-4">
                <p className="text-gray-700 dark:text-gray-200">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Category:</span> {category}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                    <span className="font-medium text-gray-800 dark:text-gray-300">Amount:</span> {amount}
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                <a
                    className="px-4 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm transition"
                    href={`/transaction-details/${_id}`}
                >
                    View Details
                </a>
                <button
                    onClick={onUpdate}
                    className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition"
                >
                    Update
                </button>
                <button
                    onClick={onDelete}
                    className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Transactioncard;