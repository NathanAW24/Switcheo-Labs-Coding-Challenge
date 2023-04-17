import React, { FormEvent, useState } from 'react'
import FormResponse from './FormResponse'

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
    if (!ethAddress || !amountToSend || !otpAuth) {
      setShowEmptyFormWarning(true)
      setTimeout(() => {
        setShowEmptyFormWarning(false)
      }, 3000)
      return
    }

    // Send the data to the server, e.g., using fetch or axios

    // after submit we want the form to be empty
    setFormData({
      ethAddress: '',
      amountToSend: 0,
      otpAuth: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <div>
          <label htmlFor="ethAddress" className="block text-sm font-medium">
            ETH Address
          </label>
          <input
            type="text"
            id="ethAddress"
            name="ethAddress"
            value={formData.ethAddress}
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="amountToSend" className="block text-sm font-medium">
            Amount to send
          </label>
          <input
            type="number"
            id="amountToSend"
            name="amountToSend"
            value={formData.amountToSend}
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <div>
          <label htmlFor="otpAuth" className="block text-sm font-medium">
            OTP Authentication
          </label>
          <input
            type="text"
            id="otpAuth"
            name="otpAuth"
            value={formData.otpAuth}
            onChange={handleChange}
            className="text-black"
          />
        </div>
        <FormResponse isEmpty={showEmptyFormWarning} />
        <button type="submit" className="bg-blue-800">
          Send Tokens
        </button>
      </div>
    </form>
  )
}

export default TokenForm
