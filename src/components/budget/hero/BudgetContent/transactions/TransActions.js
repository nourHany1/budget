import React from 'react'
import "./transActions.css"
import TransHeader from './shared/TransHeader'
import TransContent from './shared/TransContent'

const TransActions = () => {
    return (
        <div className='trans'>
            <TransHeader/>
            <TransContent/>
        </div>
    )
}

export default TransActions