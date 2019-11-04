import React from 'react';
import { withRouter } from 'react-router-dom';

const Button= withRouter(({ history }) => (
        <button type='button' onClick={ () => {
            history.push('/')
        }}
        onChange={console.log('soy yo')}
    >
        Click meee!
    </button>
    )
)

export default Button;