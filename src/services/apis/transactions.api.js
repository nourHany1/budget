import Use from "./axiosApi";

export const getTransactions = async () => {
    const { data } = await Use.get('/transactions')
    return data
}

export const deleteTransactions = async (id) => {
    const { data } = await Use.delete('/transactions/' + id)
    return data
}

export const updateTransactions = async (id, body) => {
    const { data } = await Use.put('/transactions/' + id, body)
    return data
}

export const postTransactions = async (body) => {
    const { data } = await Use.post('/transactions' , body)
    return data
}