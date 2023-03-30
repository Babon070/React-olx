const initalState = {
    likeProducts: []
}


const likeReducer = (state = initalState, action) => {
    switch (action.type){
        case "LIKE_PRODUCT":
            return {
                likeProducts: [...state.likeProducts, action.products]
            }

            case "REMOVE_FROM_LIKE":
                let removedShopProductsIndex = state.likeProducts.findIndex(p => p?.id === action?.id);
                state.likeProducts.splice(removedShopProductsIndex, 1);
                return {
                    likeProducts: [...state.likeProducts]
                }
            default : return state
    }
}

export default likeReducer