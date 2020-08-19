import React, { useContext } from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { UserContext } from "./userContext";

const MyForm = ({ closeForm }) => {
  const { users } = useContext(UserContext);
  const user = users[0];

  const { dispatch } = useContext(UserContext);

  return (
    <Formik
      initialValues={user}
      onSubmit={(values, actions) => {
        dispatch({ type: "EDIT_PERSON", person: values });
        closeForm();
        console.log("spreading..", ...values);
      }}
    >
      {(props: FormikProps<any>) => (
        <Form>
          <Field type="email" name="email" placeholder="Email" />
          <br />
          <Field name="firstName" placeholder="firstName" />
          <br />
          <Field name="lastName" placeholder="Doe" />
          <br />
          <Field as="select" name="color">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <br />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
