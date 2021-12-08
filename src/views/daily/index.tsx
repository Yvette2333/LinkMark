/** 日历 */
import React, {
    useState, useEffect, FC
} from 'react';

interface DailyProps {
   props: any;
}

const Daily: FC<DailyProps> = () => {
    const [state, setState] = useState<any>();

    useEffect(() => {
        setState('Hello Function Component 日历～ ');
    }, []);

    return (
        <div>
            {state}
        </div>
    );
};

export default React.memo(Daily);
