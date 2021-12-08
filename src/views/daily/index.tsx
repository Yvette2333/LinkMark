// 日历
import React, { FC } from 'react';
interface DailyProps {
   props: any;
}

const Daily: FC<DailyProps> = () => {
    return (
        <div>
            Hello Function Component 日历～ 
        </div>
    );
};

export default React.memo(Daily);
