import React, {
    useState, useEffect, Fragment, FC
} from 'react';

interface SecurityLayoutProps {
   props: any;
}

const SecurityLayout: FC<SecurityLayoutProps> = () => {
    const [state, setState] = useState<any>();

    useEffect(() => {
        setState('Hello Function Component');
    }, []);

    return (
        <Fragment>
            {state}
        </Fragment>
    );
};

export default React.memo(SecurityLayout);
