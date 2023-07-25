import { instance } from "../api/instance";
const fetchData = () => async (dispatch: any) => {
    try {
        const { data } = await instance.get(`/products`);
        console.log(data)
        dispatch({ type: "fetchdatas", payload: data });
    } catch (error: any) {
    }
};
export default fetchData