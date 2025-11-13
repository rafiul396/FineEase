import React from 'react';
import Container from '../../components/layout/Container';
import PieChartExample from './PieChart';
import { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';
import Loader from '../../loader/Loader';

const Report = () => {
    const [infos, setInfos] = useState([])
    // const [categories, setCategories] = useState([])
    const [loader, setLoader] = useState(true)
    const { user } = use(AuthContext)

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

    if (loader) {
        return <Loader />
    }

    const allExpenses = infos.filter(expense => expense.type === 'Expense');
    const categories = [...new Set(allExpenses.map(item => item.category))];

    const expenseData = categories.map((category) => ({
        name: category,
        value: 0, // replace with real expense amount later
    }));

    const updatedExpenseData = expenseData.map((item) => {
  const total = allExpenses
    .filter(exp => exp.category === item.name)
    .reduce((acc, curr) => acc + Number(curr.amount), 0);

  return { ...item, value: total };
});

    return (
        <div className='bg-[#f5f5f5] py-10'>
            <Container>

                <PieChartExample updatedExpenseData={updatedExpenseData} />

            </Container>
        </div>
    );
};

export default Report;