import React, { Fragment } from 'react';
import Field from '../field/field';

export default function Branch({data, parent, level}) {
    if (typeof data[1] === 'object' && !Array.isArray(data[1])) {
        return (
            <div>
                {level}: {data[0]}<br/>
                {Object.entries(data[1]).map((child, index) => {
                    return <Branch key={index} data={child} parent={data[0]} level={level + 1} />;
                })}
            </div>
        );
    } else {
        return <Fragment>
            {level}: <Field name={data[0]} type={data[1]} parent={parent} onChange={()=>{}} />
            <br/>
        </Fragment>
    }
}