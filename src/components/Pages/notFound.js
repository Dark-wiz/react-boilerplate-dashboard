import React from 'react'
import { NavLink } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="error">
            <div className="error__content">
                <h2>500</h2>
                <h3>Something went wrong!</h3>
                <NavLink to="/">
                    <button type="button" className="btn btn-accent btn-pill">&larr;Go Back</button>
                </NavLink>
            </div>
        </div >
    )
}

export default NotFound