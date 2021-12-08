import React, {
    useState, useEffect, Fragment, FC
} from 'react';

interface SettingProps {
   props: any;
}

const Setting: FC<SettingProps> = () => {
    const [state, setState] = useState<string>('1');

    useEffect(() => {
        setState('Hello Function Component');
    }, []);

    return (
        <Fragment>
            {state}
        </Fragment>
    );
};

export default React.memo(Setting);
