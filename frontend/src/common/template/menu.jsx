import React from 'react';
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#' label='Dashboard' icon='dashboard' />
        <MenuTree path='#' label='Cadastro' icon='edit'>
            <MenuItem path='#billingCycles' label='Pagamentos' icon='usd' />
        </MenuTree>
    </ul>
);