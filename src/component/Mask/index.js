import React from 'react';
import Mask from './Mask.jsx';
import Slide from './PicInfo';
import Detail from './Detail';
import ImageContainer from './image-contarner';

export default function (props) {
    return <Mask>
        <Slide>
            <ImageContainer height="300" width="300" url="http://f.hiphotos.baidu.com/image/pic/item/d439b6003af33a8724e4b645cb5c10385243b5e0.jpg"/>
        </Slide>
        <Detail>detail</Detail>
    </Mask>
}