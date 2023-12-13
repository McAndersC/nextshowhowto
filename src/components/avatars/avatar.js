import Image from "next/image";
import styles from "./avatar.module.css";

const Avatar = ({name, age, imagePath, surname = 'testnavn', data}) => {

    return <div className={styles.avatarContainer}>

        <h5>AVATAR {name} {age} Data Age: {data.age} {data.surname} {surname}</h5>
        <Image src={imagePath} alt="avatar" width="100" height="100"></Image>
    
    </div>
}

export default Avatar;