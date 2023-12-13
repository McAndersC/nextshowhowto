import Image from 'next/image'
import styles from './page.module.css'
import ClickMachines from '@/components/clickmachines/clickmachines'

export default function Home() {
  return (
    <main className={styles.main}>
        HELLO WORLD

        <ClickMachines></ClickMachines>
    </main>
  )
}
