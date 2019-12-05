import React from 'react'
import { navigate } from 'gatsby-link'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Layout from '../components/layout'

export default () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email addresss`')
        .required('Required'),
      message: Yup.string()
        .max(100, 'Must be 100 characters or less')
        .required('Required'),
    }),
  })

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formik.values,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <form
        action="/about/"
        name="contact"
        method="post"
        data-netlify="true"
        className="w-full max-w-lg"
        netifly-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <p className="pb-4">
          If you'd like get in touch please fill out the form below and i'll get
          back to you as soon as possible
        </p>
        <input type="hidden" name="bot-field" value="contact" />
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="input-label" htmlFor="first-name">
              First Name
            </label>
            <input
              className="standard-input"
              id="first-name"
              type="text"
              {...formik.getFieldProps('firstName')}
            />
            <p className="validation-text">
              {formik.getFieldMeta('firstName').touched &&
                formik.errors.firstName}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="label-input" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="standard-input"
              id="last-name"
              type="text"
              {...formik.getFieldProps('lastName')}
            />
            <p className="validation-text">
              {formik.getFieldMeta('lastName').touched &&
                formik.errors.lastName}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="label-input" htmlFor="email">
              Email
            </label>
            <input
              className="standard-input"
              id="email"
              type="email"
              {...formik.getFieldProps('email')}
            />
            <p className="validation-text">
              {formik.getFieldMeta('email').touched && formik.errors.email}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="standard-input"
              id="message"
              type="text"
              rows="4"
              {...formik.getFieldProps('message')}
            />
            <p className="validation-text">
              {formik.getFieldMeta('message').touched && formik.errors.message}
            </p>
          </div>
        </div>
        <button
          className="disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:shadow-outline"
          disabled={!formik.isValid}
          type="submit"
        >
          Send
        </button>
      </form>
    </Layout>
  )
}
