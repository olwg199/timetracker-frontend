import React from "react";

function InputGroup({ value, setValue, type, name, rows, options }) {
    let inputField;

    switch (type ? type.toLowerCase() : "input") {
        case ("textarea"):
            inputField = <textarea placeholder={name} onChange={setValue ? setValue : ""} value={value} className="input" rows={rows ? rows : ""} />
            break;
        case ("select"):
            inputField =
                <select onChange={setValue} className="input">
                    {options.map((opt) => <option value={opt} key={opt}>{opt}</option >)}
                </select>
            break;
        default:
            inputField = <input type={type} placeholder={name} onChange={setValue ? setValue : ""} value={value} className="input" />
    }


    return (
        <div className="input-group">
            <label htmlFor={value}>{name}</label>
            {inputField}
        </div>
    );
}

export default InputGroup;
