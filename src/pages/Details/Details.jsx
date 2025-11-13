import React, { use, useEffect, useState } from 'react';
import Container from '../../components/layout/Container';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import Loader from '../../loader/Loader';

const Details = () => {
    const [sData, setSdata] = useState(null);
    const [loader, setLoader] = useState(true)
    const [infos, setInfos] = useState([])
    const { id } = useParams();
    const { user } = use(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://finease-lyart.vercel.app/my-transaction/${id}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(result => {
                return result.json()
            })
            .then(data => {
                setSdata(data)
                setLoader(false)
            })
    }, [])

    useEffect(() => {
        fetch(`https://finease-lyart.vercel.app/my-transaction?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${user.accessToken}`
            }
        })
        .then(result => result.json())
        .then(data => {
            setInfos(data)
        })
    }, [])






    const onUpdate = () => {
        alert('on update')
    }

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
                fetch(`https://finease-lyart.vercel.app/my-transaction/${id}`, {
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
                            navigate('/my-transaction')
                        }
                    })

            }
        });
    }

    if (loader) {
        return <Loader />
    }

    const { type, category, amount, date, description, email, name, _id } = sData;

    // Total amount
    const sameCate = infos.filter(cate => cate.category === category)
    // console.log(sameCate);
    const total = sameCate.reduce((acc, item) => acc + Number(item.amount), 0)

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
                                <p className='text-2xl font-semibold'>Amount of {type} : {amount} BDT</p>
                                <p className='text-xl text-gray-500'>Date of {type} : {date}</p>
                            </div>
                            <p className='text-2xl font-semibold'>{type} category "{category}"</p>
                            <div>
                                <h2 className='text-xl'>Description</h2>
                                <p className='text-base text-gray-800'>
                                    {description}
                                </p>
                            </div>
                            <div>
                                <p className='font-semibold'>Total {type} {type === 'Income' ? 'by' : 'for'} {category} : <b>{total}</b> BDT</p>
                            </div>
                            <div className='flex justify-between items-center'>
                                <div className='space-x-2'>
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
                                <Link className='bg-orange-500 text-white text-sm px-5 py-2 rounded-xl hover:bg-orange-400 transition' to="/my-transaction">
                                    Back
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Details;