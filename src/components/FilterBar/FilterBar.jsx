import { Formik, Form, Field } from "formik";
import { useEffect, useRef } from "react";
import s from "./FilterBar.module.css";

const FilterBar = ({ handleChangeQuery, autoFocus = false }) => {
  const inputRef = useRef(null);

  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    handleChangeQuery(values.query);
  };

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            name="query"
            className={s.input}
            placeholder="Search for movies..."
            autoComplete="off"
            innerRef={inputRef}
          />
          <button type="submit" className={s.button}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default FilterBar;
