"use client";

import { useState } from "react";
import ClickMachine from "./clickmachine"

const ClickMachines = () => {

    const [totalCount, setTotalCount] = useState(0);

    const onTotalCountUpdate = (count) => {

        let newNum = count;

        
        setTotalCount(count)

    }

    return <div>

        <h1>{totalCount}</h1>

        <ClickMachine updateTotal={onTotalCountUpdate}></ClickMachine>
        <ClickMachine updateTotal={onTotalCountUpdate}></ClickMachine>

    </div>

}

export default ClickMachines