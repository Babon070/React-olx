const initalState = {
    addToBuy: []
}

const ShopReducer = (state = initalState, action) => {
    console.log(action);
    switch(action.type){
        case "ADD_TO_BUY":
            return {
                addToBuy: [...state.addToBuy, action.products]
            }

            case "REMOVE_BY_SHOP":
                let removedProductsIndex = state.addToBuy.findIndex(p => p?.id === action?.id);
                state.addToBuy.splice(removedProductsIndex, 1);
                return{
                    addToBuy: [...state.addToBuy]
                }
            default: return state
    }
}

export default ShopReducer;
