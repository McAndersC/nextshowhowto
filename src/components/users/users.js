import User from "./user"

let dummyUser = {
    "_id" : "1234",
    "name": "Anders",
    "email": "anders@medieskolerne.dk",
    "age": 33,
    "profile": "http://localhost:3001/656f931094ba01f1d2b76553.jpg",
}

const Users = () => {

    return (
        <div>
            <User user={dummyUser}></User>
        </div>
    )
}

export default Users