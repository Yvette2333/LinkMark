// 回收站
import React, { Fragment, FC } from 'react';
interface RecycleBinProps {
   props: any;
}

const RecycleBin: FC<RecycleBinProps> = () => {
    return (
        <Fragment>
          Hello Function Component 回收站
        </Fragment>
    );
};

export default React.memo(RecycleBin);
