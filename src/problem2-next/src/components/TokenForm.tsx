import React, { FormEvent, useState } from 'react'

type FormData = {
  ethAddress: string
  amountToSend: number
  otpAuth: string
}

const TokenForm: any = () => {
  const [formData, setFormData] = useState<FormData>({
    ethAddress: '',
    amountToSend: 0,
    otpAuth: '',
  })

  const [showEmptyFormWarning, setShowEmptyFormWarning] = useState<boolean>(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { ethAddress, amountToSend, otpAuth } = formData
    console.log('Form data:', formData)

    // empty form handling, so that the empty data is not passed to database
    if (!ethAddress || amountToSend === 0 || !otpAuth) {
      setShowEmptyFormWarning(true)
      setTimeout(() => {
        setShowEmptyFormWarning(false)
      }, 3000)
      return
    }

    // Send the data to the server, e.g., using fetch or axios
    console.log('data sent!', formData)

    // after submit we want the form to be empty
    setFormData({
      ethAddress: '',
      amountToSend: 0,
      otpAuth: '',
    })
  }

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-xl text-center text-gray-700 font-bold my-3">Send Your ETH Coins!</h1>
        {showEmptyFormWarning && (
          <div className="bg-red-200 text-red-900 px-4 py-2 mb-2 rounded">
            Please fill out all fields before submitting the form!
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ethAddress">
            ETH Address
          </label>
          <input
            className="shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ethAddress"
            name="ethAddress"
            type="text"
            placeholder="ETH Address"
            value={formData.ethAddress}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amountToSend">
            Amount to Send
          </label>
          <input
            className="shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="amountToSend"
            name="amountToSend"
            type="number"
            placeholder="0"
            min="0"
            value={formData.amountToSend}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otpAuth">
            One Time Password
          </label>
          <input
            className="shadow bg-gray-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="otpAuth"
            name="otpAuth"
            type="text"
            placeholder="OTP"
            min="0"
            value={formData.otpAuth}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-center mt-3">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
        <p className="text-center text-gray-500 text-xs pt-3">
          &copy;2022 Switcheo Labs Pte. Ltd. All rights reserved.
        </p>
      </form>
    </div>
  )
}

export default TokenForm
