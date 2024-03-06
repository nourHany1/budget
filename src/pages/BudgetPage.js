import React from 'react'
import MainLayout from 'layout/MainLayout'
import Hero from 'components/budget/hero/Hero'
import BudgetContant from 'components/budget/hero/BudgetContent/BudgetContant'
const BudgetPage = () => {
    return (
        <MainLayout>
            <Hero/>
            <BudgetContant/>
        </MainLayout>
    )
}

export default BudgetPage