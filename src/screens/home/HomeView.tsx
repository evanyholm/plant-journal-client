import React from 'react';
import {observer} from 'mobx-react';

const HomeView = observer(({ prop }) => {
    return (
        <div>
            <p>HomeView</p>
        </div>
    )
})
export default HomeView
