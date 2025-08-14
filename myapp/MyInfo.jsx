import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function MyInfo() {
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .min(2, "Name must be at least 2 characters long"),
        email: Yup.string()
            .required("Email is required")
            .email("Email is not valid"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters long"),
        confirmPassword: Yup.string()
            .required("Confirm Password is required"),
    });

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "", confirmPassword: "" }}
            onSubmit={(values) => {
                console.log("Form submitted", values);
            }}
            validationSchema={validationSchema}
        >
            <Form>
                <Field name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />

                <Field name="email" type="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />

                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />

                <Field name="confirmPassword" type="password" placeholder="Confirm Password" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
}