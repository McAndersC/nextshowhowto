'use client'
import Link from "next/link";
import styles from "./navigation.module.css"
import { useState } from "react";

const Navigation = () => {

    const [open, setOpen] = useState(false)

    const onClickHandler = () => {

        setOpen(!open)
    }

    return (
        <div className={`${styles.navigation} ${open ? styles.active : ''}`}>

            {/* Navigations Bar */}
            <div onClick={onClickHandler}>NAVIGATIONS BAR {open.toString()}</div>

            {/* Menu Links */}
            <div className={styles.navigationBar}>     
                <Link href="/">Forside</Link> 
                | <Link href="/underside">Underside</Link> 
                | <Link href="/clickmachine">Klik Maskine</Link> 
                | <Link href="/enandenside">En anden side</Link>
                | <Link href="/users">Users</Link>
            </div>

        </div>
    )

}

export default Navigation