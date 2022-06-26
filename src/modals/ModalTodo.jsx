import React from 'react';
import ReactDOM from 'react-dom';

import { ContainerModal } from '../style/styledComponent/modal.element'

function ModalTodo({children}){
    return ReactDOM.createPortal(
        <ContainerModal>
            {children}
        </ContainerModal>,
        
        document.getElementById('Modal')
    );
}

export default ModalTodo

