import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const fields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'age', label: 'Age', type: 'number' },
];

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number().min(1, 'Age must be at least 1').required('Age is required'),
});

export default function DynamicForm() {
  return (
    <div>
      <h2>Dynamic Form</h2>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form>
          {fields.map(field => (
            <div key={field.name} style={{ marginBottom: '1rem' }}>
              <label htmlFor={field.name}>{field.label}</label>
              <Field
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.label}
              />
              <ErrorMessage name={field.name} component="div" className="error" />
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
