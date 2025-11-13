import React, { use, useState } from 'react';
import Container from '../../components/layout/Container';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';

const AddT = () => {
    const [bool, setBool] = useState('income');
    const [loading, setLoading] = useState(false)
    const [errAmount, setErrAmount] = useState(null);
    const [errDes, setErrDes] = useState(null);
    const [errDate, setErrDate] = useState(null);
    const { user } = use(AuthContext)

    const loaderTrueFalse = () => {
            setLoading(true)
        }

    const handleIncome = (e) => {
        e.preventDefault();
        const amountV = e.target.amount.value;
        const descripV = e.target.description.value;
        const dateV = e.target.date.value;

        const incomeData = {
            type: "Income",
            category: e.target.category.value,
            amount: e.target.amount.value,
            description: e.target.description.value,
            date: e.target.date.value,
            email: e.target.email.value,
            name: e.target.names.value
        }

        // clear error msg
        setErrAmount(false)
        setErrDes(false)
        setErrDate(false)
        setLoading(false)

        if (!amountV) {
            toast.error('Please enter a valid amount!')
            setErrAmount(true)
            return
        }
        if (!descripV) {
            toast.error('Please enter a valid description!')
            setErrDes(true)
            return
        }
        if (!dateV) {
            toast.error('Please select a valid date!')
            setErrDate(true)
            return
        }

        loaderTrueFalse();



        fetch('https://finease-lyart.vercel.app/my-transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(incomeData)
        })
            .then(result => result.json())
            .then(data => {
                e.target.reset()
                toast.success('Transaction Successfully Added!')
                setLoading(false)
            })
            .catch(err => {
                // console.log(err);

            })

    }

    const handleExpense = (e) => {
        e.preventDefault();
        const amountV = e.target.amount.value;
        const descripV = e.target.description.value;
        const dateV = e.target.date.value;

        const expenseData = {
            type: 'Expense',
            category: e.target.category.value,
            amount: e.target.amount.value,
            description: e.target.description.value,
            date: e.target.date.value,
            email: e.target.email.value,
            name: e.target.names.value
        }
        

        // clear error msg
        setErrAmount(false)
        setErrDes(false)
        setErrDate(false)
        setLoading(false)

        if (!amountV) {
            toast.error('Please enter a valid amount!')
            setErrAmount(true)
            return
        }
        if (!descripV) {
            toast.error('Please enter a valid description!')
            setErrDes(true)
            return
        }
        if (!dateV) {
            toast.error('Please select a valid date!')
            setErrDate(true)
            return
        }

        loaderTrueFalse();

        fetch('https://finease-lyart.vercel.app/my-transaction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(expenseData)
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                e.target.reset()
                toast.success('Transaction Successfully Added!')
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })

    }


    return (
        <section className='flex items-center py-10 min-h-screen bg-[#f5f5f5] text-black px-7 xl:px-0'>
            <Container>
                <div className='flex flex-col md:flex-row justify-center items-center shadow-sm p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                    <div className='w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] bg-accent rounded-full absolute -top-12 -left-16 lg:-top-16 lg:-left-28 '></div>
                    <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                    <div className='justify-center items-center flex-col space-y-4 hidden lg:flex'>

                    </div>
                    <div className="w-full lg:w-[400px]">
                        {/* <h2 className='font-semibold text-xl lg:text-3xl mb-8 text-center'>Choose Your <span className='text-primary'>Transaction</span></h2> */}
                        <div className='flex justify-center'>
                            <button className={`px-10 py-2 border-2 border-primary border-r-0 font-semibold rounded-tl-lg rounded-bl-lg cursor-pointer text-black ${bool === 'income' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('income')}>Income</button>
                            <button className={`px-10 py-2 border-2 border-primary border-l-0 font-semibold rounded-tr-lg rounded-br-lg cursor-pointer text-black ${bool === 'expense' ? 'bg-accent' : 'bg-base-100'}`} onClick={() => setBool('expense')}>Expense</button>
                        </div>
                        {
                            bool === 'income' ? (
                                <div className='mt-5'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Add Your <span className='text-primary'>Income</span></h2>
                                    <form onSubmit={handleIncome} className='space-y-3'>

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
                                            className={`w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary ${errAmount ? 'border-2 border-red-700' : ''}`}
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className={`w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary ${errDes ? 'border-2 border-red-700' : ''}`}
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className={`w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary ${errDate ? 'border-2 border-red-700' : ''}`}
                                            name="date"
                                        />

                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary cursor-no-drop"
                                            placeholder='Email'
                                            defaultValue={user?.email}
                                            readOnly
                                            name='email'
                                        />

                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary cursor-no-drop"
                                            placeholder='Name'
                                            defaultValue={user?.displayName}
                                            readOnly
                                            name='names'
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition'>
                                            Add Transaction{loading ? <span className='text-xl animate-pulse'>. . .</span> : ''}
                                        </button>
                                    </form>
                                </div>
                            ) : (
                                <div className='mt-5'>
                                    <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>Add Your <span className='text-primary'>Expense</span></h2>
                                    <form onSubmit={handleExpense} className='space-y-3'>

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
                                            className={`w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary ${errAmount ? 'border-2 border-red-700' : ''}`}
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label htmlFor="des" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            className={`w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary ${errDes ? 'border-2 border-red-700' : ''}`}
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            className={`w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary ${errDate ? 'border-2 border-red-700' : ''}`}
                                            name="date"
                                        />

                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                        <input
                                            type="text"
                                            id="email"
                                            className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Email'
                                            defaultValue={user?.email}
                                            readOnly
                                            name='email'
                                        />

                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Name'
                                            defaultValue={user?.displayName}
                                            readOnly
                                            name='names'
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition'>
                                            Add Transaction{loading ? <span className='text-xl animate-pulse'>. . .</span> : ''}
                                        </button>
                                    </form>
                                </div>
                            )
                        }
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default AddT;