"use client"

import { useState } from "react"

const ClickMachine = ({updateTotal}) => {

    const [count, setCount] = useState(0)

    const onClickHandler = () => {

        let newCount = count + 1;


        setCount(newCount)
        updateTotal(newCount);
        
    }

    return <div>
        <div>{count}</div>
        <button onClick={onClickHandler}>Click</button>
    </div>

}

export default ClickMachine