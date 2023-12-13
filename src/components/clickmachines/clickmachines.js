"use client";

import { useState } from "react";
import ClickMachine from "./clickmachine"

const machines = [
    {
        id: 0,
        amount: 500,
    },
    {
        id: 1,
        amount: 1000
    }
]

const ClickMachines = () => {

    const [totalCount, setTotalCount] = useState(0);

    const onTotalCountUpdate = (count) => {

        let newNum = count;

        
        setTotalCount(count)

    }

    return <div>

        <h1>{totalCount}</h1>
        {machines.map( (machine) => <ClickMachine key={machine.id} updateTotal={onTotalCountUpdate} amount={machine.amount}></ClickMachine>)}
        {/* <ClickMachine updateTotal={onTotalCountUpdate} amount={1}></ClickMachine>
        <ClickMachine updateTotal={onTotalCountUpdate} amount={10}></ClickMachine> */}

    </div>

}

export default ClickMachines