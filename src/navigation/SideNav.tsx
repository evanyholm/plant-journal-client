import React from 'react';
import {observer} from 'mobx-react';
import './SideNav.css'

const SideNav = observer(({ prop }) => {
    return (
        <div className='container'>
            <p>Sidenav</p>
            <p>Sidenav</p>
            <p>Sidenav</p>
        </div>
    )
})
export default SideNav