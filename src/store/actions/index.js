import {GET_BINATANG, ADD_BINATANG, UPDATE_BINATANG, DELETE_BINATANG, CLEAR_CURRENT_BINATANG, ERROR_GLOBAL, SUCCESS_GLOBAL, CLEAR_NOTIFICATION, DELETE_NOTIFICATION, GET_BINATANG_BY_ID} from '../types'

export const getBinatang = (binatang) => ({
    type: GET_BINATANG,
    payload: binatang
})

export const getBinatangById = (id) => ({
    type: GET_BINATANG_BY_ID,
    payload: id
})

export const addBinatang = (binatang) => ({
    type: ADD_BINATANG,
    payload: binatang
})

export const updateBinatang = (newData) => ({
    type: UPDATE_BINATANG,
    payload: newData
})

export const deleteBinatang = () => ({
    type: DELETE_BINATANG
})

export const clearCurrentBinatang = () => ({
    type: CLEAR_CURRENT_BINATANG
})

export const errorGlobal = (msg) => ({
    type: ERROR_GLOBAL,
    payload: msg
})

export const successGlobal = (msg) => ({
    type: SUCCESS_GLOBAL,
    payload: msg
})

export const clearNotification = () => {
    return(dispatch) => {
        dispatch({
            type: CLEAR_NOTIFICATION
        })
    }
}

export const deleteNotification = () => {
    return(dispatch) => {
        dispatch({
            type: DELETE_NOTIFICATION
        })
    }
}