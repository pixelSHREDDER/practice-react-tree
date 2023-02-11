import React from 'react';
import Branch from './branch/branch';

export default function Tree({data}) {
    const onChange = e => {
        alert(`I want to change ${e.target.name} to ${e.target.value}`);
    }
    
    return Object.entries(data).map((branch, index) => {
        return <Branch
            key={index}
            data={branch}
            parent={data.parent}
            onChange={onChange} />
    });
}