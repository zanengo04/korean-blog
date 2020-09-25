import React from 'react'
import {Formik} from 'formik'
import * as Yup from 'yup'

export default function About() {
    return (
        <main>
            <p>fsa</p>
            <Formik 
                initialValues={{
                    username:'',
                    password:''
                }}
                validationSchema={Yup.object({
                    username:Yup.string().min(3,'Must be at least 3 character').required('Required'),
                    email: Yup.string().email('Invalid email address').required('Require')
                })}
                onSubmit={(values, {setSubmitting, resetForm})=>{
                    setTimeout(()=>{
                        alert(JSON.stringify(values, null, 2));
                        resetForm();
                        setSubmitting(false)
                    }, 3000)
                }}
            >

            </Formik>
        </main>
        
    )
}
