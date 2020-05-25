import React, { FC } from 'react'

const MyComponent: FC<{ text: string }> = ({ text }) => <h1>
  {text}
</h1>

export default MyComponent
