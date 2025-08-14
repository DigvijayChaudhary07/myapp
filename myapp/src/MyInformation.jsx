import React from 'react';
import { Formik, Field, Form } from 'formik';

export default function MyInformation() {
  return (
    <div>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', address: '', city: '', gender: '', toggle: false }}
        onSubmit={(values) => {
          console.log("Form data", values);
        }}
      >
        <Form>
          <h1>My Information</h1>
          <Field name="firstName" type="text" placeholder="First Name" />
          <Field name="lastName" type="text" placeholder="Last Name" />
          <Field name="email" type="email" placeholder="Email" />
          <Field name="address" type="text" placeholder="Address" className="form-textarea" />
          <Field name="city" as="select" className="my-select">
            <option value="">Select City</option>
            <option value="Vadodara">Vadodara</option>
            <option value="Ahmedabad">Ahmedabad</option>
            <option value="Surat">Surat</option>
          </Field>

            
              <label>
                <Field type="radio" name="gender" value="male" /> Male
              </label>
             
              <label>
                <Field type="checkbox" name="toggle"/> Female
              </label>

            
            <button type="submit">Submit</button>

        </Form>
      </Formik>
    </div>
  );
}
