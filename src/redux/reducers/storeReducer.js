import { storeConstants } from '../../constants/storeConstants'
let initialState = {
  stockItem: {},
  allStockItems: []
};
export function StoreReducer(state = initialState, action) {
  switch (action.type) {
    case storeConstants.ADD_STOCKITEM:
      return {

      }

    case storeConstants.ALL_STOCKITEMS:
      return {
        ...state,
        allStockItems: action.payload
      }
    default:
      return state;
  }
}
