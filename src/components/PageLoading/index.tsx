import React, { FC } from 'react';
import { Spin } from 'antd';
import FlexLayout from '@/styles/components/FlexLayout';

const PageLoading: FC = () => (
    <FlexLayout>
        <Spin size="large" />
    </FlexLayout>
);

export default React.memo(PageLoading);
