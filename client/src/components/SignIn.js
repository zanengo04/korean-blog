import React from 'react'

import * as Yup from 'yup'
import { Formik, Form, ErrorMessage  } from 'formik';
import {TextField, Button} from '@material-ui/core';
export default function SignIn() {
    return (
        <main>
        <Formik
            initialValues={{
                    username:'',
                    password:''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().required().email().label("Email"),
                password: Yup.string().required().min(4).label("Password"),
            })}
            onSubmit={(values, {setSubmitting, resetForm})=>{
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2));
                    resetForm();
                    setSubmitting(false)
                }, 3000)
            }}
        >
        {({ isSubmitting }) => (
            <Form>
                <TextField
                    type='email' 
                    id="email" 
                    label="Email" 
                    variant="outlined"
                    required
                />
                <TextField
                    name="password"
                    type='password' 
                    id="password" 
                    label="Password" 
                    variant="outlined"
                    required
                />
                <Button 
                    type = "submit" 
                    disabled={isSubmitting} 
                    variant="contained" 
                    color="primary">Submit
                </Button>
            </Form>
        )}
        </Formik>
        </main>
    )
}
