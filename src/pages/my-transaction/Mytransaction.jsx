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


    // const sortedApps = (
    //     () => {
    //     if(sorted === 'lowToHigh'){
    //         return [...installApp].sort((a, b) => parseShorthandNumber(a.downloads) - parseShorthandNumber(b.downloads))
    //     }else if(sorted === 'highToLow'){
    //         return [...installApp].sort((a, b) => parseShorthandNumber(b.downloads) - parseShorthandNumber(a.downloads))
    //     }else {
    //         return installApp;
    //     }
    // }
    // )()

    // const uninstallApp = (appId) => {
    //         //remove from local storage
    //         removeApps(appId);
    //         // instant update
    //         setInstalledApp(prev => prev.filter(p => p.id !== appId));
    //     }

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
                    <select defaultValue={"Sorted my Date and Amount"} className="select w-[130px]">
                        <option value='none'>Sort by Size</option>
                        <option value='lowToHigh'>Low - High</option>
                        <option value='highToLow'>High - Low</option>
                    </select>
                </div>
                {
                    infos.length === 0 ? (
                        <NoDataMsg />
                    ) : (
                        <div className='grid px-5 md:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                infos.map(info => <Transactioncard key={info._id} info={info} infos={infos} setInfos={setInfos} />)
                            }
                        </div>
                    )
                }
            </Container>
        </section>
    );
};

export default Mytransaction;