import Use from "./axiosApi";

export const getCategories = async () => {
    const { data } = await Use.get('/categories')
    return data
}

