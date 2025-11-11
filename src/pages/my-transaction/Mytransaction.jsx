import React, { useState } from 'react';
import Container from '../../components/layout/Container';
import Transactioncard from './Transactioncard';
import { useLoaderData } from 'react-router';
import useData from '../../hooks/useData';

const Mytransaction = () => {
    const transactionInfo = useLoaderData();
    const [infos, setInfos] = useState(transactionInfo)
    console.log(transactionInfo);
    
    

    return (
        <section className='bg-[#f5f5f5] py-10 min-h-screen'>
            <Container>
                <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>My <span className='text-primary'>Transactions</span></h2>
                <div className='grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        infos.map(info => <Transactioncard key={info._id} info={info} infos={infos} setInfos={setInfos} />)
                    }
                </div>
            </Container>
        </section>
    );
};

export default Mytransaction;