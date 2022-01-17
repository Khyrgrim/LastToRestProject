import React, {useState} from 'react'
import Axios from "axios";

// Formik to ease formular creation
import { Formik, Field, ErrorMessage } from "formik";

// Yup to validate format (good idea ? Maybe regular expressions are enough)
import * as Yup from "yup";

export default function Auth({setUserTokenInParent}) {

    const [userToken, setUserToken] = useState("")

    const signup = (values, { resetForm }) => {
        Axios.post('http://localhost:3000/api/auth/signup', values)
            .then(res => {
                if (res.status === 201) {
                    console.log("SIGNUP - Axios post server response:");
                    console.log(res.data);
                }
                if(res.status === 400){
                    console.log("test");
                    console.log(res.data);
                }
            })
            .catch(error => console.log(error))

        resetForm()
    }

    const login = (values, { resetForm }) => {
        Axios.post('http://localhost:3000/api/auth/login', values)
            .then(res => {
                if (res.status === 200) {
                    console.log("LOGIN - Axios post server response:");
                    console.log(res.data);
                    setUserToken(res.data.token)
                    setUserTokenInParent(res.data.token)
                }
            })
            .catch(error => console.log(error))
        resetForm()
    }

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('').min(5, "5 characters min"),
        password: Yup.string().required('').min(5, "5 characters min"),
    })

    return (
        <div>
            <h1>Here Auth</h1>

            {/* User creation formular */}
            <Formik
                onSubmit={signup}
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
            >
                {({ values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        email:
                        <Field className="" name="email" value={values.email} placeholders="ajouter email" />
                        <ErrorMessage component="small" name="email" className='' />
                        <br />
                        mdp:
                        <Field className="" name="password" value={values.password} placeholders="ajouter password" />
                        <ErrorMessage component="small" name="password" className='' />
                        <br />
                        <button type='submit'>SignUp</button>
                    </form>
                )}
            </Formik>

                    <br />
                    <br />

            <Formik
                onSubmit={login}
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
            >
                {({ values, handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        email:
                        <Field className="" name="email" value={values.email} placeholders="ajouter email" />
                        <ErrorMessage component="small" name="email" className='' />
                        <br />
                        mdp:
                        <Field className="" name="password" value={values.password} placeholders="ajouter password" />
                        <ErrorMessage component="small" name="password" className='' />
                        <br />
                        <button type='submit'>Login</button>
                    </form>
                )}
            </Formik>

                    UserToken:{userToken}
        </div>
    )
}
