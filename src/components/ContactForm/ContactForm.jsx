import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

export default function ContactForm({ onAddContact }) {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Number must be at least 3 characters")
      .max(50, "Number must be at most 50 characters"),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = {
          id: nanoid(),
          name: values.name,
          number: values.number,
        };
        onAddContact(newContact);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={css.container}>
          <label>
            Name:
            <Field type="text" name="name" />
            {errors.name && touched.name && <ErrorMessage name="name" />}
          </label>
          <br />
          <label>
            Number:
            <Field type="text" name="number" />
            {errors.number && touched.number && <ErrorMessage name="number" />}
          </label>
          <br />
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}
