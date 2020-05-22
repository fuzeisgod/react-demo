import React from 'react';
import { render } from 'react-dom';

const Counter = () => {
    return (
        <div>
            <button>-</button>
            <span>10</span>
            <button>+</button>
        </div>
    )
}

render(
    <Counter />,
    document.querySelector('#root')
);

