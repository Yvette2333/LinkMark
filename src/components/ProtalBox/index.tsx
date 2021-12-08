import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { StyledContainer } from './styled';

const Container = window.document.createElement('div');
Container.id = 'ProtalBox';

function ProtalBox() {
    useEffect(() => {
        window.document.body.appendChild(Container);

        return (): void => {
            window.document.body.removeChild(Container);
        };
    }, []);

    return createPortal(
        <StyledContainer>
            <h3>Title</h3>

            <div>
                content , 这是protal 的哟～
            </div>
        </StyledContainer>,
        Container
    );
}

export default React.memo(ProtalBox);
