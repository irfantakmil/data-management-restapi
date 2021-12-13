import React,{useState,useEffect} from "react";
import { useFormik } from "formik";
import { useDispatch,useSelector } from "react-redux";
import { addBinatang } from "../../store/actions/binatang_actions";
import { validation, formValues } from "./validationSchema";
import Loader from "../../utils/loader";
import {
    TextField,
    Button,
    Divider,
    FormControl,
    Select,
    MenuItem
} from '@material-ui/core'


const Add = (props) => {
    const dispatch = useDispatch();
    const notifications = useSelector(state => state.notifications);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: formValues,
        validationSchema: validation,
        onSubmit: (values,{resetForm}) => {
            setIsSubmitting(true);
            dispatch(addBinatang(values));
        }
    })
    
    const errorHelper = (formik,values) => ({
        error: formik.errors[values] && formik.touched[values] ? true:false,
        helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
    })

    useEffect(()=>{
        if(notifications && notifications.success){
            props.history.push("/");
        }
        if(notifications && notifications.error){
            setIsSubmitting(false);
        }
    },[notifications, props.history])

    return (
        <>
            <h1 style={{marginTop:'80px'}}>Add new Binatang</h1>
            <div className="add_container">
                {
                    isSubmitting ?
                    <Loader/>
                        :
                        <form className="mt-3 binatang_form" onSubmit={formik.handleSubmit}>
                            <h5>Name</h5>
                            <div className="form-group">
                                <TextField
                                    style={{width:'100%'}}
                                    name="name"
                                    label="Enter binatang's name"
                                    variant="outlined"
                                    {...formik.getFieldProps('name')}
                                    {...errorHelper(formik,'name')}
                                />
                            </div>

                            <Divider className="mt-3 mb-3"/>
                
                            <h5>Description</h5>
                            <div className="form-group">
                                <TextField
                                    style={{width:'100%'}}
                                    name="description"
                                    label="Enter binatang's description"
                                    variant="outlined"
                                    {...formik.getFieldProps('description')}
                                    {...errorHelper(formik,'description')}
                                />
                            </div>
                            
                            <Divider className="mt-3 mb-3"/>

                            <FormControl variant="outlined">
                                <h5>Select the status</h5>
                                <Select
                                    name="status"
                                    {...formik.getFieldProps('status')}
                                    error={formik.errors.status && formik.touched.status ? true:false}
                                >
                                    <MenuItem value="true">True</MenuItem>
                                    <MenuItem value="false">False</MenuItem>
                                </Select>
                            </FormControl>

                            <Divider className="mt-3 mb-3"/>

                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Add Binatang
                            </Button>
                        </form>
                }
            </div>
        </>
    )
}

export default Add;