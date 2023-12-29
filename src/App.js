import React from 'react'
import loginImage from './images/login_image.png'
import { useFormik  } from 'formik';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()

  const formik = useFormik({
   initialValues: {
    name : "",
    email :"",
    country : 'India',
    terms : "",
   },

    validationSchema : Yup.object({
      name: Yup.string()
        .max(20, "Name must be 20 characters or less.")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      terms: Yup.array().required("Terms of service must be checked"),
    }),

    onSubmit: (values) => {
    console.log('form submitted', values);
     navigate('/success', { state: values })

    }
  })
  return (
    <div className="absolute w-full">
      <main className="  h-screen items-center flex justify-center">
        <form
          className="bg-white flex rounded-lg w-1/2 font-sans"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex-1 text-gray-700  p-20">
            <h1 className="text-3xl pb-2 font-serif">Let's get started</h1>
            <p className="text-lg  text-gray-500">
              Join E-learning Platform today & unlock over 500+ assests ready to
              download
            </p>
            <div className="mt-6 ">
              {/* name */}
              <div className="pb-4">
                <label
                  htmlFor="name"
                  className={`block font-latoBold text-sm pb-2 ${
                    formik.touched.name && formik.errors.name
                      ? 'text-red-400'
                      : ''
                  } `}
                >
                  {formik.touched.name && formik.errors.name
                    ? formik.errors.name
                    : 'Name'}
                </label>
                <p className="text-sm font-sans font-bold text-red-400 "></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500 "
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* Email input field */}
              <div className="pb-4">
                <label
                  htmlFor="email"
                  className={`block font-sans font-bold text-sm pb-2 ${
                    formik.touched.email && formik.errors.email
                      ? 'text-red-400'
                      : ''
                  }`}
                >
                  {formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : 'Email'}
                </label>

                <p></p>
                <input
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  onBlur={formik.handleBlur}
                />
              </div>
              {/* countrry */}
              <div className="pb-4">
                <label
                  htmlFor="country"
                  className="block font-sans font-bold text-sm pb-2"
                >
                  Country
                </label>
                <select
                  className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500"
                  name="country"
                >
                  <option value="India">India</option>
                  <option value="United State">United State</option>
                  <option value="Russia">Russia</option>
                  <option value="Indonsia">Indonsia</option>
                </select>
              </div>
              {/* terms */}
              <div className="pb-4">
                <label
                  htmlFor="terms"
                  className={`block font-sans font-bold text-sm pb-2 ${
                    formik.touched.terms && formik.errors.terms
                      ? 'text-red-400'
                      : ''
                  }`}
                >
                  {formik.touched.terms && formik.errors.terms
                    ? formik.errors.terms
                    : 'Terms of service'}
                </label>

                <div className="flex items-center gap-2">
                  <input
                    className="h-5 w-5 text-teal-500 border-2  background-gray-500 focus:border-teal-500 focus:ring-teal-500"
                    type="checkbox"
                    name="terms"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <p className="text-sm font-latoBold text-gray-500">
                    I agree to the Terms and Service that my data will be taken
                    and sold.
                  </p>
                </div>
              </div>
              <button
                className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-full"
                type="submit"
              >
                Star Learning
              </button>
            </div>
          </div>
          <div className="relative flex-1 ">
            <img
              className=" object-cover rounded-lg "
              priority="true"
              fill="true"
              src={loginImage}
              alt="form-learn"
            />
          </div>
        </form>
      </main>
    </div>
  )
}

export default App;
