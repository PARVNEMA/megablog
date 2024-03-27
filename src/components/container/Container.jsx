import React from 'react'
/**
 * The `Container` component is a simple wrapper div used to create a consistent
 * layout for the rest of the application. It is used as a placeholder for other
 * components to be rendered inside it, and can be styled to define the overall
 * layout of the page.
 *
 * This component is typically used in combination with other layout components,
 * such as `Header` and `Footer`, to create a full page layout.
 */
function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4 '>{children}</div>
  )
}

export default Container