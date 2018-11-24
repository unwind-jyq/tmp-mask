import './mask.less';
import React from 'react';

export default function Mask (props) {
    return <div className="detail-mask">
        { props.children }
    </div>;
}