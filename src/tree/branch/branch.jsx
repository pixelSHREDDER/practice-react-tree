import React from 'react';
import Field from '../field/field';
import Subtree from '../subtree/subtree';

export default function Branch({data, parent, onChange}) {
    if (data[0] === 'parent') {
        return <ul style={{padding: 0, margin: 0}}>
                <li style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 300px',
                    marginRight: '-7px',
                }}>
                    <Field name={data[0]} type={data[1]} parent={parent} onChange={onChange} />
                </li>
            </ul>;
    } else if (typeof data[1] === 'object' && !Array.isArray(data[1])) {
        return (
            <Subtree
                header={data[0]}    
                open
                children={Object.entries(data[1]).map((child, index) => {
                    return <Branch
                                key={index}
                                data={child}
                                parent={data[0]}
                                onChange={onChange} />;
                })} />
        );
    } else {
        return <li style={{
                display: 'grid',
                gridTemplateColumns: '0.8em auto 300px',
                marginRight: '-7px',
            }}>
                <Field name={data[0]} type={data[1]} parent={parent} onChange={onChange} />
            </li>
    }
}