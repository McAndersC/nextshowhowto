/* 
    "_id" : "1234",
    "name": "Anders",
    "email": "anders@medieskolerne.dk",
    "age": 33,
    "profile": "656f931094ba01f1d2b76553.jpg",
*/

import Image from "next/image";
import styles from "./user.module.css"
const User = ({user}) => {

    return <div className={styles.user}>
        
        <h1>{user.name}</h1>
        <div className={styles.age}>{user.age}</div>
        
      
        <Image src={user.profile} alt="sdad" width={255} height={255}></Image>
    </div>

};

export default User