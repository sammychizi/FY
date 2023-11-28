import React from 'react'

export default function InputField(props) {
  return (
    <label>
        <span>Full Name:</span>
        <input 
          type={props.type}
          onChange={(e) => setEmail(e.target.value)}
          value={props.value}
          required 
    />
    </label>
  )
}
