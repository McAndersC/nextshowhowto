'use client'
import Avatar from "./avatar";
import styles from "./avatar.module.css";

const Avatars = ({avatarsData}) => {


    return <div className={styles.avatarsContainer}>
        
        {avatarsData.map( (avatar) => <Avatar key={avatar.name} 
            name={avatar.name} 
            age={avatar.age} 
            imagePath={avatar.imagePath}
            surname={avatar.surname}
            data={avatar}

            /> 
        )}
        
    </div>

}

export default Avatars;