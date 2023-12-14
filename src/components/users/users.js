import User from "./user"
import styles from "./users.module.css"
let dummyUser = {
    "_id" : "1234",
    "name": "Anders",
    "email": "anders@medieskolerne.dk",
    "age": 33,
    "profile": "http://localhost:3001/profiles/656f931094ba01f1d2b76553.jpg",
}

const Users = () => {

    return (
        <div className={styles.container}>
            <User user={dummyUser}></User>
            <User user={dummyUser}></User>
            <User user={dummyUser}></User>
            <User user={dummyUser}></User>
        </div>
    )
}

export default Users