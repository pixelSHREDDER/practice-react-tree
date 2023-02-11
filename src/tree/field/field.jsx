import React, { Fragment } from 'react';
import { getReadableText } from '../../util/transforms';

export default function Field({name, type, parent, onChange}) {
    const id = `${parent}_${name}`;
    const readableName = getReadableText(name);

    if (Array.isArray(type)) {
        return (
            <Fragment>
                <label htmlFor={id}>{readableName}</label>
                <select name={name} id={id} defaultValue="" onChange={onChange}>
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
                <span>
                    <input
                        type="checkbox"
                        id={id}
                        name={name}
                        value={false}
                        style={{marginLeft: 0}}
                        onChange={onChange} />
                </span>
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