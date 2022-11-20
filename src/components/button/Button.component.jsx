import React from 'react'
import "./button.style.scss"

const BUTTON_TYPE_CLASSES = {
  add: 'add',
  deleteAll: 'deleteAll',
};

const ButtonCustom = ({
    children, 
    buttonType = '', 
    ...otherProps 
  }) => {

  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default ButtonCustom