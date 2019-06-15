import React from 'react';

export const InputField = ({
    label,
    placeholder,
    required,
    type,
    errorMessage,
    name,
    value,
    onChange,
    length }) => {
    return (
        <div className={length}>
            <div className="form-group">
                <label for="feFirstName">{label}</label>
                <input type={type} className="form-control" id="feFirstName" name={name} required={required} onChange={onChange} placeholder={placeholder} value={value} />
            </div>
        </div>

    )
}


InputField.defaultProps = {
    type: "text",
    required: false,
    placeholder: "",
    length: "col-sm-6"
};