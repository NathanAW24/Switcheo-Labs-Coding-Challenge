import React , { FormEvent, useState } from 'react';

type FormData = {
    ethAddress: string;
    amountToSend: number;
    otpAuth: string;
  };
  
const TokenForm:any = () => {
  const [formData, setFormData] = useState<FormData>({
    ethAddress: '',
    amountToSend: 0,
    otpAuth: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);

    // Send the data to the server, e.g., using fetch or axios
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
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
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
      >
        Send Tokens
      </button>
    </form>
  );
};

export default TokenForm;