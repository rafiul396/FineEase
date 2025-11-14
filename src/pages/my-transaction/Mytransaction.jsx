import React, { useState } from 'react';
import Container from '../../components/layout/Container';
import Transactioncard from './Transactioncard';
import { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import NoDataMsg from '../../components/no-data-msg/NoDataMsg';
import Loader from '../../loader/Loader';

const Mytransaction = () => {
    const { user } = use(AuthContext)

    const [infos, setInfos] = useState([])
    const [loader, setLoader] = useState(true)
    const [sorted, setSorted] = useState('Sort by Date & Amount');
    const [sortedType, setSortedType] = useState('Sort by Income & Expense')

    useEffect(() => {
        fetch(`https://finease-lyart.vercel.app/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => result.json())
            .then(data => {
                setInfos(data)
                setLoader(false)
            })
    }, [])

    const sortedByType = (
        () => {
            if (sortedType === 'Income') {
                return [...infos].filter(info => info.type === 'Income')
            } else if (sortedType === 'Expense') {
                return [...infos].filter(info => info.type === 'Expense')
            } else {
                return infos;
            }
        }
    )()
    console.log(sortedByType);
    


    const sortedTransactions = (
        () => {
            if (sorted === 'lowToHigh') {
                return [...sortedByType].sort((a, b) => (a.amount) - (b.amount))
            } else if (sorted === 'highToLow') {
                return [...sortedByType].sort((a, b) => (b.amount) - (a.amount))
            } else if (sorted === 'Newest') {
                return [...sortedByType].sort((a, b) => (new Date((a.amount))) - (new Date((b.amount))))
            } else if (sorted === 'Oldest') {
                return [...sortedByType].sort((a, b) => (new Date((b.amount))) - (new Date((a.amount))))
            } else {
                return sortedByType;
            }
        }
    )()


    if (loader) {
        return <Loader />
    }


    return (
        <section className='bg-neutral py-10 min-h-screen'>
            <Container>
                <h2 className='font-semibold text-lg lg:text-3xl mb-8 text-center'>My <span className='text-primary'>Transactions</span></h2>
                <div className='flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center mb-4'>
                    <h5 className='font-semibold'>{infos.length} Transaction Found</h5>
                    {/* sorting apps by its size */}
                    <div className='flex flex-col md:flex-row gap-2'>
                        <select defaultValue={"Sorted my Income & Expense"} onChange={(e) => setSortedType(e.target.value)} className="select w-[200px] outline-0">
                            <option value='none'>Sort by Income & Expense</option>
                            <option value='Income'>Income</option>
                            <option value='Expense'>Expense</option>
                        </select>
                        <select defaultValue={"Sorted my Date and Amount"} onChange={(e) => setSorted(e.target.value)} className="select w-[200px] outline-0">
                            <option value='none'>Sort by Date & Amount</option>
                            <option value='lowToHigh'>Low Amount - High Amount</option>
                            <option value='highToLow'>High Amount - Low Amount</option>
                            <option value='Newest'>Newest First</option>
                            <option value='Oldest'>Oldest First</option>
                        </select>
                    </div>
                </div>
                {
                    infos.length === 0 ? (
                        <NoDataMsg />
                    ) : (
                        <div className='grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                sortedTransactions.map(info => <Transactioncard key={info._id} info={info} infos={infos} setInfos={setInfos} />)
                            }
                        </div>
                    )
                }
            </Container>
        </section>
    );
};

export default Mytransaction;