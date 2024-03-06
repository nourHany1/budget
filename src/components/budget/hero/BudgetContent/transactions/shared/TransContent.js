    import { transactionsContext } from "services/context/transactionsContext"
import SingleTrans from "./SingleTrans"
import { useContext } from "react"
import { categoriesContext } from "services/context/budget/categoriesContext"

    const TransContent = () => {

    const { filteredData: transactions, loading, error } = useContext(transactionsContext)
    const { data: categories, loading: catLoading } = useContext(categoriesContext)
    
    return (
        <div className="trans_content">

            {!loading && !catLoading && categories.length&& transactions && transactions.length && !error ? (
                <>
                    {transactions.map((transaction) => (
                        <SingleTrans transaction={transaction} key={transaction.id} categories = {categories}/>
                    ))}
                </>
            ): <></>}

            {!loading && transactions && !transactions.length && !error && (
                <p className="no-data"> No data </p>
            )}

        {loading || catLoading&& (
            <p className="loading"> loading ... </p>
        )}
        {error && !loading && (
            <p className="data-error"> {error}  </p>
        )}
        </div>
    )
    }

    export default TransContent