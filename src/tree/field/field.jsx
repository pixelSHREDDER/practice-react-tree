import React, { Fragment } from 'react';

export default function Field(props) {
    const [name, type, parent, onChange] = props;

    const id = `${parent}_${name}`;
    const spacedName = name.replace(/([A-Z])/g, " $1");
    const readableName = `${spacedName.charAt(0).toUpperCase()}${spacedName.slice(1)}`;

    if (typeof(type) === 'array') {
        return (
            <Fragment>
                <label for={id}>{readableName}</label>
                <select name={name} id={id}>
                    {type.map(option => <option value={option}>{option}</option>)}
                </select>
            </Fragment>
        );
    } else if (type === 'boolean') {
        return (
            <Fragment>
                <label for={id}>{readableName}</label>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={data}
                    onChange={onChange} />
            </Fragment>
        );
    } else if (type === 'string') {
        return (
            <Fragment>
                <label for={id}>{readableName}</label>
                <input
                    type="text"
                    id={id}
                    name={name}
                    value={data}
                    onChange={onChange} />
            </Fragment>
        );
    } else if (type === 'number') {
        return (
            <Fragment>
                <label for={id}>{readableName}</label>
                <input
                    type="number"
                    id={id}
                    name={name}
                    value={data}
                    onChange={onChange} />
            </Fragment>
        );
    }
}