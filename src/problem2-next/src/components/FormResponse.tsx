import React from 'react'

interface FormResponseProps {
  isEmpty: boolean
}

const FormResponse: React.FC<FormResponseProps> = ({ isEmpty }) => {
  return (
    <div
      className={`${
        isEmpty ? 'opacity-100' : 'opacity-0'
      } transition-opacity duration-1000 ease-out ${
        isEmpty ? 'bg-red-200 text-red-900' : 'bg-green-200 text-green-900'
      } p-2 text-sm`}
    >
      {isEmpty ? 'Please fill out all fields!' : 'Thank you!'}
    </div>
  )
}

export default FormResponse
