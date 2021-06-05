import React from "react"

const CenterContainer: React.FC = ({ children}) => (
  <div className="max-w-4xl mx-auto px-8">
    {children}
  </div>
)

export default CenterContainer