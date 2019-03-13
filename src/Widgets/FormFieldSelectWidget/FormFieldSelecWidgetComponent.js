
import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("FormFieldSelectWidget", ({ widget }) => {
    const name = widget.get("name");
    const label = widget.get("label");
    const options = widget.get("options").split(",");
    const values = widget.get("values");
    const required = widget.get("required") === "true" ? true : false;

    return (

        <div>
            <div className="form-group">
                <label htmlFor={name}>{label}{required ? <span className="required-mark"> *</span> : ""}</label>
                <select
                    className="form-control form-control-lg"
                    id={name}
                    name={name}
                    type="select"
                    required={required}
                >
                    {/* {options.forEach(item => item.trim())} */}
                    {options.map((item, index) => (
                        <option key={index}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
})

