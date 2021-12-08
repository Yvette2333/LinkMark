/** 最近7天 */
import React, { Fragment, FC } from 'react';
import ToolBar from '@/components/ToolBar';
import MutipleList from '@/components/MutipleList';

interface RecentProps {
   props: any;
}

const Recent: FC<RecentProps> = () => {
    return (
        <Fragment>
            <ToolBar></ToolBar>
            <MutipleList/>
        </Fragment>
    );
};

export default React.memo(Recent);
