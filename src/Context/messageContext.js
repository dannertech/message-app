import createDataContext from "./createDataContext";
import { reducer } from "../Reducers/reducer";
import { actions } from "../Reducers/reducer";


export const {Context, Provider} = createDataContext(reducer, initialState = [], actions);