import React, { useId } from 'react';

const Input = React.forwardRef(function Input(
    {
        label,
        type = 'text',
        placeholder = 'Enter value',
        className = '',
        ...props
    },
    ref
    ) {
    const id = useId();
    return (
        <div className="w-full">
        {label && <label htmlFor={id}>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            id={id}
            {...props}
            ref={ref}
        />
        </div>
    );
});

export default Input;