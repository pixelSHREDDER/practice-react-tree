import React from 'react';
import Branch from './branch/branch';

export default function Tree({data}) {
    return Object.entries(data.components).map((branch, index) => {
        return <Branch
            key={index}
            data={branch}
            parent={data.parent}
            level={0}/>
    });
}