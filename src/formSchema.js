import * as yup from 'yup';

export const formSchema = yup.object().shape( {
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(3, 'Must be at least 3 characters long'),
    size: yup
        .string()
        .oneOf( ['Personal', 'Small', 'Medium', 'Large'], 'Size is required'),
    sauce: yup
        .string()
        .oneOf( ['redSauce', 'whiteSauce'], 'Sauce is required'),
    cheese: yup.boolean(),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    mushrooms: yup.boolean(),
    bacon: yup.boolean(),
    instructions: yup   
        .string()
        .trim()
})