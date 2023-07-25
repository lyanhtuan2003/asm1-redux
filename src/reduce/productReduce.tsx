import { produce } from "immer";

const initialState = {
    products: [],

} as { products: any[] };
const ProductReducer = (state = initialState, action: any) => {
    return produce(state, draftState => {
        switch (action.type) {
            case "fetchdatas":
                draftState.products = action.payload
                break;

            case "deletedata":
                const id = action.payload
                draftState.products = state.products.filter((item: any) => item.id != id)
                break;

            case "adddata":
                draftState.products.push(action.payload)
                break;

            case "updatedata":
                const product = action.payload
                draftState.products = action.payload.map((item: any) => item.product = product.id ? product : item)
                break;


            default:
                return state;
        }

    })

}
export default ProductReducer