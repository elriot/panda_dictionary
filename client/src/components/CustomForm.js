import React from 'react';
import "./CustomForm.css";

export const CustomForm = ({ onSubmit, children }) => {
    return (
        <form onSubmit={onSubmit} className="form-container">
            {children}
        </form>
    );
};