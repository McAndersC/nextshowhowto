"use client"
import styles from './clickmachine.module.css'
import { useState } from "react"

const ClickMachine = ({updateTotal, amount}) => {

    const [count, setCount] = useState(0)

    const onClickHandler = () => {

        let newCount = count + amount;

        setCount(newCount)
        updateTotal(amount);
        
    }

    let colorMe = count > 1 ? styles.bgRed : ''

    return <div className={`${styles.container} ${colorMe}`}>
     
        <div>COUNT: {count}</div> Amount: {amount} <br/>
        <button onClick={onClickHandler}>Click</button>
    </div>

}

export default ClickMachine