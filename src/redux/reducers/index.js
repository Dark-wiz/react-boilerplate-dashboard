import { combineReducers } from "redux";
import { StoreReducer } from "./storeReducer";
import { VehicleReducer } from "./vehicleReducer";
export default combineReducers({
  store: StoreReducer,
  vehicle: VehicleReducer
});
