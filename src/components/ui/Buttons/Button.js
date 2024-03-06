import React from 'react'
import './button.css'
const Button = ({children, type = 'primary', size = 'normal', icon = false, block = false, ...props}) => {
    return (
        <div>
            <button className= {`btn btn-${type} btn-${size} ${icon ? 'btn-icon' : ''} ${block ? 'btn-block' : ''}`} {...props}>
                {children}
            </button>
        </div>
    )
}

export default Button