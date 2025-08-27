import React from 'react'

const Btn = ({text}) => {
  return (
    <button className="inline-block mt-3 bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition">{text}</button>
  )
}

export default Btn