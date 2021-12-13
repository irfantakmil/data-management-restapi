import * as Yup from 'yup';

export const formValues = {
    name:'',
    description:'',
    status: true
}

export const validation = () => (
    Yup.object({
        name:Yup.string().required('Names is required'),
        description:Yup.string().required('Description is required').max(200,'Maximum is 200'),
        status:Yup.bool().required("status is required")
    })
)