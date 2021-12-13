import { GET_BINATANG, ADD_BINATANG, UPDATE_BINATANG, DELETE_BINATANG, CLEAR_CURRENT_BINATANG, GET_BINATANG_BY_ID } from "../types";

export default function binatangReducer(state={},action){
    switch(action.type){
        case GET_BINATANG:
            return {...state, binatang:action.payload}
        case GET_BINATANG_BY_ID:
            return {...state, current:action.payload}
        case ADD_BINATANG:
            return {...state, newBinatang: action.payload, success:true}
        case UPDATE_BINATANG:
            return {...state, newBinatangData: action.payload, success:true}
        case DELETE_BINATANG:
            return {...state, deleteBinatang:true}
        case CLEAR_CURRENT_BINATANG:
            return {...state, current:''}
        default:
            return state
    }
}