import React, { useContext, useState } from 'react'
import { categoriesContext } from 'services/context/budget/categoriesContext'
import { transactionsContext } from 'services/context/transactionsContext'

const TransHeader = () => {
    const {data: categories} = useContext(categoriesContext)
    const {handleFilters} = useContext(transactionsContext)
    const [inputs ,setInputs] = useState({
        keys: '',
        category: '',
        type: ''
    })

    const handleChange = e => {
        const name = e.target.name
        const value = e.target.value
        const f = {...inputs, [name] : value}
        setInputs(f)
        handleFilters(f)
    }
    console.log(inputs);
    return (
        <div className='trans_header'>
            <h3 className='trans_header-title'> Recent Transactions</h3>
            <div className='trans_header-filters'>
                <select className='filters-select' name='keys' value={inputs.keys} onChange={handleChange}>
                    <option value=""> Sort By </option>
                    <option value="date"> Date </option>
                    <option value="amount"> Amount </option>
                </select>
                <select className='filters-select' name='category' value={inputs.category} onChange={handleChange}>
                    <option> Categories </option>
                    {categories && categories.map(cat => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                </select>
                <select className='filters-select' name='type' value={inputs.type} onChange={handleChange}>
                    <option value=''> All </option>
                    <option value='income'> Income </option>
                    <option value='expanse'> Expanse </option>
                </select>
            </div>
        </div>
    )
}

export default TransHeader
