import { useDispatch, useSelector } from "react-redux"
import { Dispatch, useEffect } from "react"

import { instance } from "../../api/instance"
import fetchData from "../../action"


const ListProducts = () => {
    const dispatch: Dispatch<any> = useDispatch();
    const { products } = useSelector((state: any) => state.products)
    console.log(products)
    useEffect(() => {
        dispatch(fetchData())
    }, [])
    const addProduct = async (product: any) => {
        try {
            const { data } = await instance.post("/products", product)
            dispatch({ type: "adddata", payload: data })
        } catch (error) {

        }

    }
    const editProduct = async (product: any) => {
        try {
            const { data } = await instance.put(`/products/${product.id}`, product)
            dispatch({ type: "updatedata", payload: data })
        } catch (error) {

        }

    }
    const removeProduct = async (product: any) => {
        try {
            await instance.delete(`/products/${product.id}`)
            dispatch({ type: "deletedata", payload: product.id })
        } catch (error) {

        }

    }
    return (
        <>
            <div>
                {products?.map((item: any) => <p key={item.key}>{item.name}</p>)}
            </div>
            <button onClick={() => addProduct({ name: "sản phẩm 3" })}>
                thêm
            </button>
            <button onClick={() => editProduct({ name: "sản phẩm 3 update", id: 3 })}>
                sửa
            </button>
            <button onClick={() => removeProduct({ id: 3 })}>
                xoá
            </button>
        </>



    )
}

export default ListProducts