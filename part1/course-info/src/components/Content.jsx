/* eslint-disable react/prop-types */

import Part from "./parts/Part"

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  )
}

export default Content