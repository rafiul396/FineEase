import React from 'react';
import Container from '../../components/layout/Container';
import { useLoaderData } from 'react-router';

const Details = () => {
    const transactionDetails = useLoaderData();
    console.log(transactionDetails);

    const { type, category, amount, date, description, email, name } = transactionDetails;
    

    const onUpdate = () => {
        alert('on update')
    }

    const onDelete = () => {
        alert('on delete')
    }


    return (
        <div>
            <section className='flex items-center min-h-screen py-10 bg-[#f5f5f5] text-black px-7 xl:px-0'>
                <Container>
                    <div className='shadow-sm p-10 xl:px-52 rounded-xl bg-base-100 relative overflow-hidden'>
                        <div className='w-[200px] h-[200px] bg-accent rounded-full absolute -top-16 -left-28 '></div>
                        <div className='w-[170px] h-[40px] bg-accent rounded-2xl absolute -right-5 -bottom-5'></div>
                        <div className='space-y-3'>
                            <h2 className='text-4xl text-primary text-center font-semibold'>{type}</h2>
                            <div className='flex justify-between'>
                                <p className='text-2xl font-semibold'>Amount of Income : {amount} BDT</p>
                                <p className='text-xl text-gray-500'>Date of Income : {date}</p>
                            </div>
                            <p className='text-2xl font-semibold'>Incomed by "{category}"</p>
                            <div>
                                <h2 className='text-2xl'>Description</h2>
                                <p className='text-base text-gray-400'>
                                    {description}
                                </p>
                            </div>
                            <div className='text-end space-x-2'>
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
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Details;