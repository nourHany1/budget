    import React, { useContext, useMemo, useState } from 'react'

    import { CurrencyDollar, PencilLine, Trash } from 'phosphor-react'
    import Button from 'components/ui/Buttons/Button'
import { transactionsContext } from 'services/context/transactionsContext'
import Modal from 'components/ui/modal/Modal'
import BudgetForm from 'components/budget/budgetForm/BudgetForm'

    const SingleTrans = ({transaction , categories}) => {
        const {handleDelete} = useContext(transactionsContext)
        const [showModel, setShowModel] = useState(false)
        const currentCat = useMemo(() => {
            // eslint-disable-next-line eqeqeq
            let cat = categories.find(c => c.id == transaction.category)
            if (cat && cat.name) {
                return cat.name
            } else {
                return ''
            }
        }, [categories,transaction])
    return (
        <div className="trans_item">
        <div className={`trans_item-icon ${transaction.type === "expanse" ? 'error' : ''}`}>
            <CurrencyDollar />
            </div>
        <div className="trans_item-data">
            <h4> {transaction.title} </h4>
            <div>
                <small> ${transaction.amount} </small>,
                <small>{transaction.date}</small>,
                <small> {currentCat}</small>
            </div>
            
        </div>
        <div className="trans_item-cta">
            <Button icon onClick={() => setShowModel(true)}>
            <PencilLine />
            </Button>
            <Button type="error" icon onClick = {() => handleDelete(transaction.id)}>
            <Trash />
            </Button>
        </div>
            <Modal visable={showModel} closeModel = {() => setShowModel(false)}>
                <BudgetForm visable={() => setShowModel(false)} defaultData={transaction}/>
            </Modal>
        </div>
    )
    }

    export default SingleTrans