import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Transactioncard = ({ info, infos, setInfos }) => {
    const [bool, setBool] = useState(null)


    const { type, category, amount, date, description, _id } = info;

    const onDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/my-transaction/${_id}`, {
                    method: 'DELETE'
                })
                    .then(result => result.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your transaction has been deleted.",
                                icon: "success"
                            });
                            const remainData = infos.filter(remain => remain._id !== _id);
                            setInfos(remainData)
                        }
                    })



            }
        });
    }

    const onUpdate = () => {
        alert('hello')
    }

    return (
        <>
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
                    <Link
                        to={`/update/${_id}`}
                        className="px-4 py-1.5 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg text-sm transition"
                    >
                        Update
                    </Link>
                    <button
                        onClick={onDelete}
                        className="px-4 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm transition"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div className="fieldset mt-2">
                        {/* <h2 className='font-semibold text-xl lg:text-3xl mb-8 text-center'>Choose Your <span className='text-primary'>Transaction</span></h2> */}
                        <div className='flex justify-center'>
                            <button className={`px-10 py-2 border-2 border-primary border-r-0 font-semibold rounded-tl-lg rounded-bl-lg cursor-pointer text-black ${bool === 'income' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('income')}>Income</button>
                            <button className={`px-10 py-2 border-2 border-primary border-l-0 font-semibold rounded-tr-lg rounded-br-lg cursor-pointer text-black ${bool === 'expense' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('expense')}>Expense</button>
                        </div>
                        {
                            bool === 'income' ? (
                                <div className='mt-5'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Add Your <span className='text-primary'>Income</span></h2>
                                    <form className='space-y-3'>

                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Select Income Category</label>
                                        <select id="category"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            name='category'>
                                            <option>Salary</option>
                                            <option>Ride sharing</option>
                                            <option>Pocket Money</option>
                                            <option>Side Business</option>
                                        </select>

                                        <label
                                            htmlFor="amt" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition'>
                                            Add Transaction
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className='mt-5'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Add Your <span className='text-primary'>Expense</span></h2>
                                    <form className='space-y-3'>

                                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Select Expense Category</label>
                                        <select id="category"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary" name='category'>
                                            <option>Home rent</option>
                                            <option>Food</option>
                                            <option>Transportation</option>
                                            <option>Health</option>
                                            <option>Personal</option>
                                            <option>Education</option>
                                            <option>Technology</option>
                                            <option>Entertainment</option>
                                            <option>Family</option>
                                            <option>Others</option>
                                        </select>

                                        <label htmlFor="amt" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition'>
                                            Add Transaction
                                        </button>
                                    </form>
                                </div>
                            )
                        }
                    </div>
                    <form method='dialog' className="fieldset mt-2">
                        <button onClick={() => setBool(null)} className="btn bg-[#309256d9] text-primary hover:bg-secondary join-item">Discard</button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default Transactioncard;