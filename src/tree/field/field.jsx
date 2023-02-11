import React, { Fragment } from 'react';

export default function Field({name, type, parent, onChange}) {
    const id = `${parent}_${name}`;
    const spacedName = name.replace(/([A-Z])/g, " $1");
    const readableName = `${spacedName.charAt(0).toUpperCase()}${spacedName.slice(1)}`;

    if (Array.isArray(type)) {
        return (
            <Fragment>
                <label htmlFor={id}>{readableName}</label>
                <select name={name} id={id} defaultValue="">
                    <option value="">--Select an option--</option>
                    {type.map((option, index) => <option key={`${id}_${index}`} value={option}>{option}</option>)}
                </select>
            </Fragment>
        );
    } else if (typeof type !== 'string') {
        return;
    }

    if (type === 'boolean') {
        return (
            <Fragment>
                <label htmlFor={id}>{readableName}</label>
                <input
                    type="checkbox"
                    id={id}
                    name={name}
                    value={false}
                    onChange={onChange} />
            </Fragment>
        );
    } else if (type === 'string') {
        return (
            <Fragment>
                <label htmlFor={id}>{readableName}</label>
                <input
                    type="text"
                    id={id}
                    name={name}
                    value={''}
                    onChange={onChange} />
            </Fragment>
        );
    } else if (type === 'number') {
        return (
            <Fragment>
                <label htmlFor={id}>{readableName}</label>
                <input
                    type="number"
                    id={id}
                    name={name}
                    value={0}
                    onChange={onChange} />
            </Fragment>
        );
    }
}