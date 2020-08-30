import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TableDropdown = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    function createItems() {
        return props.items.map((item) => {
            return <DropdownItem onClick={() => props.changeFilter(item)} key={item}>{item}</DropdownItem>
        })
    }
    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle tag="span">
                Activity
            </DropdownToggle>
            <DropdownMenu>
                {createItems()}
            </DropdownMenu>
        </Dropdown>
    );
}

export default TableDropdown;
