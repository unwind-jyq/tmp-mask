import './mask.less';
import React from 'react';


export default function (props) {
    return <div className="mask-detail">
        { props.children }
    </div>
};