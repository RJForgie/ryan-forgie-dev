import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"

import Layout from "../components/layout"

export default () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email addresss`")
        .required("Required"),
      message: Yup.string()
        .max(100, "Must be 100 characters or less")
        .required("Required"),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Layout>
      <form
        action="/contact/"
        name="contact"
        method="POST"
        data-netlify="true"
        className="w-full max-w-lg"
      >
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="first-name"
              type="text"
              {...formik.getFieldProps("firstName")}
            />
            <p className="text-red-500 text-xs italic">
              {formik.getFieldMeta("firstName").touched &&
                formik.errors.firstName}
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="last-name"
              type="text"
              {...formik.getFieldProps("lastName")}
            />
            <p className="text-red-500 text-xs italic">
              {formik.getFieldMeta("lastName").touched &&
                formik.errors.lastName}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="text"
              {...formik.getFieldProps("email")}
            />
            <p className="text-red-500 text-xs italic">
              {formik.getFieldMeta("email").touched && formik.errors.email}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-300 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              type="text"
              rows="4"
              {...formik.getFieldProps("message")}
            />
            <p className="text-red-500 text-xs italic">
              {formik.getFieldMeta("message").touched && formik.errors.message}
            </p>
          </div>
        </div>
        <button
          className="disabled:opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={!formik.isValid}
        >
          Send
        </button>
      </form>
    </Layout>
  )
}
