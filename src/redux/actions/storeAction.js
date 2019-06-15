import { storeConstants } from "../../constants/storeConstants";
import axios from 'axios'
export const addStockitem = () => {
    return {
        type: storeConstants.ADD_STOCKITEM
    }
}

export const getStockitems = () => {
    return {
        type: storeConstants.ALL_STOCKITEMS
    }
}