import React, {useState} from 'react';
import {Switch} from './Switch';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Switch stories',
    component: Switch,
};


const callback = action("Active or Inactive was clicked")

export const ActiveMode = () => <Switch
    value={true}
    onChange={callback}
    inactiveTitle={'off'}
    activeTitle={'on'}/>;

export const InactiveMode = () => <Switch
    value={false}
    onChange={callback}
    inactiveTitle={'Inactive'}
    activeTitle={'Active'}/>;

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Switch value={value} onChange={setValue} activeTitle={"Must contain"}
                   inactiveTitle={"Must not contain"}/>
}