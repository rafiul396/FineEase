import React, { useState } from 'react';
import Container from '../../components/layout/Container';
import { Link } from 'react-router';

const AddT = () => {
    const [bool, setBool] = useState('income')

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
                                    <form className='space-y-3'>

                                        <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Select Income Category</label>
                                        <select id="category"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary" name='category'>
                                            <option>Salary</option>
                                            <option>Ride sharing</option>
                                            <option>Pocket Money</option>
                                            <option>Side Business</option>
                                        </select>

                                        <label
                                            for="amt" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label for="des" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            class="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                        />

                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="text"
                                            id="email"
                                            class="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Amount'
                                            defaultValue={"rafiul@gmail.com"}
                                            readOnly
                                            name='email'
                                        />

                                        <label for="names" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="text"
                                            id="names"
                                            class="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Amount'
                                            defaultValue={"Rafiul Islam"}
                                            readOnly
                                            name='names'
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

                                        <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Select Expense Category</label>
                                        <select id="category"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary" name='category'>
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

                                        <label for="amt" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="number"
                                            id="amt"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Amount'
                                            name='amount'
                                        />

                                        <label for="des" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                        <textarea
                                            id="des"
                                            cols="30"
                                            rows="4"
                                            class="w-full px-3 py-2 border border-accent rounded-lg bg-white text-gray-700 focus:outline-none focus:border-primary"
                                            placeholder='Write Your Income Description...'
                                            name='description' ></textarea>

                                        <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                                        <input
                                            type="date"
                                            id="date"
                                            class="w-full px-3 py-2 border border-accent rounded-lg text-gray-700 bg-white focus:outline-none focus:border-primary"
                                            name="date"
                                        />

                                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="text"
                                            id="email"
                                            class="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Amount'
                                            defaultValue={"rafiul@gmail.com"}
                                            readOnly
                                            name='email'
                                        />

                                        <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                                        <input
                                            type="text"
                                            id=""
                                            class="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none border-primary"
                                            placeholder='Amount'
                                            defaultValue={"Rafiul Islam"}
                                            readOnly
                                            name='names'
                                        />

                                        <button className='btn p-5 rounded-lg w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition'>
                                            Add Transaction
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






{/* <form className='space-y-4'>
                                radio buttons
                                <div>
                                    <p className='font-semibold text-xl mb-2'>Choose your transaction type : </p>
                                    <div class="flex items-center space-x-4">
                                        <label class="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="income"
                                                class="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-primary checked:bg-accent transition duration-200 cursor-pointer"
                                            />
                                            <span class="text-gray-700 font-semibold">Income</span>
                                        </label>

                                        <label class="flex items-center space-x-2 cursor-pointer">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="expense"
                                                class="appearance-none w-5 h-5 border-2 border-gray-400 rounded-full checked:border-primary checked:bg-accent transition duration-200 cursor-pointer"
                                            />
                                            <span class="text-gray-700 font-semibold">Expense</span>
                                        </label>
                                    </div>
                                </div>

                                category



                                <input type="text" className="p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight" placeholder="Name" name='name' required />
                                <input type="email" className="p-2 pl-4 border border-accent w-full rounded-full outline-primary text-xl font-extralight" placeholder="Email" name='email' />

                                <button className="btn p-6 rounded-full w-full hover:bg-primary border-none shadow-none duration-300 text-lg bg-[#ff6900de] font-semibold text-white transition">Sign Up</button>
                            </form>
                            <p className='text-center font-semibold md:hidden'>Already have an account. Please <Link className='text-primary hover:underline' to="/login">Login</Link></p>
                            <div className="divider divider-neutral">or</div>
                            <button className="btn p-6 rounded-full w-full hover:bg-accent shadow-none duration-300 bg-base-100 font-semibold text-secondary border border-accent transition text-lg">
                                <img src="data:image/svg+xml,%3Csvg%20width%3D%2248%22%20height%3D%2248%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_15258_34551%29%22%3E%3Cpath%20d%3D%22M24%2019.6367V28.9313H36.9163C36.3492%2031.9204%2034.6471%2034.4514%2032.0944%2036.1532L39.8835%2042.1968C44.4217%2038.0079%2047.0399%2031.8551%2047.0399%2024.546C47.0399%2022.8443%2046.8872%2021.2077%2046.6035%2019.637L24%2019.6367Z%22%20fill%3D%22%234285F4%22%2F%3E%3Cpath%20d%3D%22M10.5492%2028.5684L8.7925%2029.9131L2.57422%2034.7567C6.5233%2042.5893%2014.6172%2048.0003%2023.999%2048.0003C30.4788%2048.0003%2035.9115%2045.8621%2039.8825%2042.1968L32.0934%2036.1531C29.9552%2037.5931%2027.2279%2038.4659%2023.999%2038.4659C17.759%2038.4659%2012.4574%2034.255%2010.559%2028.5822L10.5492%2028.5684Z%22%20fill%3D%22%2334A853%22%2F%3E%3Cpath%20d%3D%22M2.57436%2013.2432C0.938084%2016.4721%200%2020.1158%200%2023.9994C0%2027.8829%200.938084%2031.5266%202.57436%2034.7556C2.57436%2034.7773%2010.5599%2028.5592%2010.5599%2028.5592C10.08%2027.1192%209.79624%2025.5921%209.79624%2023.9991C9.79624%2022.4062%2010.08%2020.879%2010.5599%2019.439L2.57436%2013.2432Z%22%20fill%3D%22%23FBBC05%22%2F%3E%3Cpath%20d%3D%22M23.9996%209.55636C27.5342%209.55636%2030.676%2010.7781%2033.1851%2013.1345L40.0577%206.2619C35.8904%202.37833%2030.4797%200%2023.9996%200C14.6179%200%206.52342%205.38908%202.57434%2013.2437L10.5597%2019.44C12.4578%2013.7672%2017.7596%209.55636%2023.9996%209.55636Z%22%20fill%3D%22%23EA4335%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_15258_34551%22%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E" alt="google logo" className='w-[25px]' />
                                <span>Sign up with Google</span>
                            </button> */}