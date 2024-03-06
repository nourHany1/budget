import React, { useContext } from 'react'
import BudgetNumbers from './BudgetNumbers'
import './hero.css'
import {Coins, Wallet, CreditCard} from "phosphor-react"
import { transactionsContext } from 'services/context/transactionsContext'

const Hero = () => {
    const {totals} = useContext(transactionsContext)
    return (
        <div className='hero_budget'>
            <div className='hero_budget-bg'>
                <img src='https://unsplash.it/1200/400' alt='random img'/>
            </div>
            <div className='container'>
                <div className='hero_budget-numbers'>
                    <BudgetNumbers money = {totals.total} title = "total money"> <Coins weight='duotone' /> </BudgetNumbers>
                    <BudgetNumbers money = {totals.income} title = "total income"> <Wallet weight='duotone'/>  </BudgetNumbers>
                    <BudgetNumbers money = {totals.expanse} title = "total expance"> <CreditCard weight='duotone'/>  </BudgetNumbers>
                </div>
            </div>
        </div>
    )
}

export default Hero