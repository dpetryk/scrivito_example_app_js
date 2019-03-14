import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormFieldCheckboxWidget", ({ widget }) => {
    const name = widget.get("name");
    const label = widget.get("label");
    const required = widget.get("required") === "true" ? true : false;
    const value = widget.get("value");

    return (
            <div className="form-check">
                <input
                    className="form-check-input"
                    name={name}
                    type="checkbox"
                    required={required}
                    value={value ? value : label}
                /> 
                {required ? <span className="required-mark">* </span> : ""}{label}
            </div>
    )
})

