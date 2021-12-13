import axios from "axios";
import * as binatang from './index';
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9taXRyYW1hcy10ZXN0Lmhlcm9rdWFwcC5jb21cL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM5Mzg5NDM5LCJleHAiOjE2MzkzOTMwMzksIm5iZiI6MTYzOTM4OTQzOSwianRpIjoiWWptSkVRU1lYTXJvWW9XWiIsInN1YiI6MTMsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.dYclopikXp-agvHDsbfEyXRM1kPXy4NdW-8uDq67nmk";

export const getBinatang = () => {
    return(dispatch) => {
        try {
            axios.get('https://mitramas-test.herokuapp.com/binatang',{
                headers: {
                    'Authorization': `${token}`
                }
            })
            .then(function(response) {
                if(response.data.success === true){
                    let results = [...response.data.data];
                    console.log(results);
                    dispatch(binatang.getBinatang(results));
                }
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const getBinatangById = (id,currentData) => {
    return(dispatch) => {
        try {
            axios.get('https://mitramas-test.herokuapp.com/binatang',{
                headers: {
                    'Authorization': `${token}`
                },
                data:{
                    id:id,
                    currentData: currentData
                }
            })
            .then(function(response){
                let result = response.data;
                dispatch(binatang.getBinatangById(result));
            })
        } catch(err){
            console.log(err)
        }
    }
}

export const addBinatang = (newBinatang) => {
    return(dispatch) => {
        try {
            axios.post('https://mitramas-test.herokuapp.com/binatang', newBinatang,{
                headers:{
                    'Content-type':'application/json',
                    'Authorization': `${token}`
                }
            })
            .then(function(response){
                if(response.data.success === true){
                    let result = response.data;
                    dispatch(binatang.addBinatang(result));
                    dispatch(binatang.successGlobal(response.data.message));
                }
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const updateBinatang = (newBinatangData,id) => {
    return(dispatch) => {
        try {
            axios.put('https://mitramas-test.herokuapp.com/binatang', {
                headers:{
                    'Content-type':'application/json',
                    'Authorization': `${token}`
                }
            },{
                data:{
                    newBinatangData: newBinatangData,
                    id: id
                }
            })
            .then(function(response){
                let result = response.data;
                dispatch(binatang.updateBinatang(result));
                dispatch(binatang.successGlobal(response.data.message));
            })
        } catch(err){
            console.log(err);
        }
    }
}

export const deleteBinatang = (id) => {
    return(dispatch) => {
        try {
            axios.delete('https://mitramas-test.herokuapp.com/binatang',{
                headers:{
                    'Content-type':'application/json',
                    'Authorization': `${token}`
                },
                data:{
                    id:id
                }
            })
            .then(function(response){
                if(response.data.success === true){
                    console.log(response);
                    dispatch(binatang.deleteBinatang());
                    dispatch(binatang.successGlobal(response.data.message));
                }
            })
        } catch(err){
            console.log(err);
        }
    }
}