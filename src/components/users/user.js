/* 
    "_id" : "1234",
    "name": "Anders",
    "email": "anders@medieskolerne.dk",
    "age": 33,
    "profile": "656f931094ba01f1d2b76553.jpg",
*/

const User = ({user}) => {

    return <div>
        
        User {user.name}
        User {user.profile}
    
    </div>

};

export default User