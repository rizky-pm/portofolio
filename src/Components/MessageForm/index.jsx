import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  from_name: '',
  from_email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  from_name: Yup.string().required("This field can't be empty"),
  from_email: Yup.string()
    .email("It's looks like not an email address")
    .required("This field can't be empty"),
  subject: Yup.string().required("This field can't be empty"),
  message: Yup.string().required("This field can't be empty"),
});

const MessageForm = () => {
  const onSubmit = (values, actions) => {
    actions(false);
    console.log(values);
    // e.preventDefault();
    // send('SERVICE ID', 'TEMPLATE ID', toSend, 'User ID')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //   })
    //   .catch((err) => {
    //     console.log('FAILED...', err);
    //   });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnMount
      // onSubmit={(values, actions) => {
      //   onSubmit(values, actions.setSubmitting);
      // }}
    >
      {(formik) => {
        let disabledButton = !formik.isValid;

        return (
          <Form
            className='flex flex-col space-y-4 text-lg font-medium'
            method='post'
          >
            <div className='flex flex-col'>
              <div className='flex flex-col h-16 mb-2'>
                <label htmlFor='from_name' className='mb-1'></label>
                <Field
                  type='text'
                  id='from_name'
                  name='from_name'
                  className='input-field basic-transition'
                  placeholder='FULL NAME'
                />
                <ErrorMessage
                  name='from_name'
                  component='span'
                  className='appear-error-message'
                />
              </div>

              <div className='flex flex-col h-16 mb-2'>
                <label htmlFor='from_email' className='mb-1'>
                  {/* Full Name */}
                </label>
                <Field
                  type='email'
                  id='from_email'
                  name='from_email'
                  className='input-field basic-transition'
                  placeholder='EMAIL ADDRESS'
                />
                <ErrorMessage
                  name='from_email'
                  component='span'
                  className='appear-error-message'
                />
              </div>

              <div className='flex flex-col h-16 mb-2'>
                <label htmlFor='subject' className='mb-1'>
                  {/* Full Name */}
                </label>
                <Field
                  type='text'
                  id='subject'
                  name='subject'
                  className='input-field basic-transition'
                  placeholder='SUBJECT'
                />
                <ErrorMessage
                  name='subject'
                  component='span'
                  className='appear-error-message'
                />
              </div>

              <div className='flex flex-col h-32 mb-2'>
                <label htmlFor='message' className='mb-1'>
                  {/* Full Name */}
                </label>
                <Field
                  as='textarea'
                  id='message'
                  name='message'
                  className='input-field basic-transition h-full resize-none'
                  placeholder='MESSAGE'
                />
                <ErrorMessage
                  name='message'
                  component='span'
                  className='appear-error-message'
                />
              </div>
            </div>

            <button
              type='button'
              className={`flex justify-center items-center border-2 border-dark uppercase tracking-widest ${
                !disabledButton ? 'bg-dark' : 'bg-lightGray border-lightGray'
              } text-light py-2 px-8 ${
                !disabledButton ? 'hover:bg-veryLightBlue hover:text-dark' : ''
              } basic-transition`}
              disabled={disabledButton}
              onClick={() => {
                onSubmit(formik.values, formik.setSubmitting);
              }}
            >
              Send
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default MessageForm;
