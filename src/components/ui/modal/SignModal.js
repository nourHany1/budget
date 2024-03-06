import React from 'react'
import  ReactDOM  from 'react-dom'
const SignModal = ({visable, children , closeModel}) => {
    if (!visable){
        return null
    }
    return ReactDOM.createPortal(
        <div className='modal-overlay' onClick={closeModel}>
            <div className='modal' onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>,
        document.querySelector("#sign-root")
    )
}

export default SignModal