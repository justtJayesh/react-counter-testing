import React from "react";

export const Button = ({ children, func }) => {
    return <button data-testid="custom-btn" onClick={func}>{children}</button>;
};
