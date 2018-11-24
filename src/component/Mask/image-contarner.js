import './image-container.less';
import React from 'react';

export default (props) => {
    return <div className="image-container" style={{ height: `${ props.height }px`, width: `${ props.width }px` }}>
       <img src={ props.url } style={{ maxHeight: `${ props.height }px`, width: `${ props.width }px` }}/>
    </div>
}