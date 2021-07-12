import React, { FC } from 'react';
import './MultipleItem.less';

interface MultipleItemProps {
    children?: React.ReactNode;
    title?: string | React.ReactNode;
    key: string; 
}


const MultipleItem: FC<MultipleItemProps> = ({
    children,
    title,
    key
}) => {

    return (
        <div className="multipleItem" key={key}>
            <div className="multipleItem-title">{title}</div>
            <div className="multipleItem-img">{title}</div>
            <div className="multipleItem-title">{title}</div>
        </div>
    )
}

export default MultipleItem