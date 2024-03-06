    import { createContext, useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";
    import { deleteTransactions, getTransactions } from "services/apis/transactions.api";


    export const transactionsContext = createContext()

    const initialState = {
    data: [],
    loading: true,
    error: null
    }

    const contextReducer = (state, action) => {

    switch (action.type) {

        case 'FETCH_START':
        return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
        return { ...state, loading: false, data: action.payload };
        case 'FETCH_ERROR':
        return { ...state, loading: false, error: action.payload };
        case 'STOP_LOADING':
        return { ...state, loading: false };

        default:
        return state
    }
    }

    export const TransactionsProvider = ({ children }) => {

    const [state, disptch] = useReducer(contextReducer, initialState)
    const isMount = useRef(false)
    const [filters, setFilters] = useState({
        keys:null,
        category: null,
        type: null
    })

    const fetchData = useCallback(async () => {
        disptch({ type: 'FETCH_START' })
        try {
        const data = await getTransactions()
        disptch({ type: 'FETCH_SUCCESS', payload: data })
        } catch (error) {
        disptch({ type: 'FETCH_ERROR', payload: error.message })
        }
    }, [])

    const handleDelete = async (id) => {
        try {
            disptch({ type: 'FETCH_START' })
            await deleteTransactions(id)
            fetchData()
        } catch (error) {
            disptch({ type: 'FETCH_ERROR', payload: error.message })
        }
    }
    useEffect(() => {
        if (!isMount.current) {
        fetchData()
        isMount.current = true
        }
    }, [fetchData])



const handleFilters = (filterData) => {
    setFilters(filterData)
}

const filteredData = useMemo(() => {
    let data = [...state.data]
    if (!data || !data.length) return []
    if (filters.keys && filters.keys === 'date'){
        data = data.sort((a,b) => {
            const aData = new Date(a.date).getTime()
            const bData = new Date(b.date).getTime()
            return bData - aData
        })
    }
    if (filters.keys && filters.keys === 'amount'){
        data = data.sort((a,b) => {
            return +b.amount - +a.amount
        })
    }
    if (filters.category ){
        // eslint-disable-next-line eqeqeq
        data = data.filter(d => d.category == filters.category)
    }
    if (filters.type ){
        // eslint-disable-next-line eqeqeq
        data = data.filter(d => d.type == filters.type)
    }
    return data
},[state.data, filters])

const totals = useMemo(() => {
    let income = 0
    let expanse = 0
    if(state.data && state.data.length){
        state.data.forEach(d => {
            if (d.type === 'income'){
                income += +d.amount
            } else {
                expanse += +d.amount
            }
        })
    }
    return{income, expanse ,total: income - expanse}
}, [state.data])
    return (
        <transactionsContext.Provider value={{ ...state,totals, handleDelete, filteredData, fetchData,handleFilters }}>
        {children}
        </transactionsContext.Provider>
    )
    }