import React, {useState} from 'react';
import './App.css';
import {Switch} from "./Switch/Switch";

export function App() {

    const [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <Switch
                value={switchOn}
                onChange={setSwitchOn}
                activeTitle={"must contain"}
                inactiveTitle={"must not contain"}
            />
        </div>
    );
}
