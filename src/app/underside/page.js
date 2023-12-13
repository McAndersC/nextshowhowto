
import Avatars from "@/components/avatars/avatars"

const AvatarWithChildren = ({children}) => {

    return <div>

        {children}

    </div>
}

const avatarsData = [
    {
        "name" : "Lars",
        "age" : 18,
        "imagePath" : "https://i.imgur.com/1bX5QH6.jpg"
    },
    {
        "name" : "Henning",
        "surname" : "Christensen",
        "age" : 33,
        "imagePath" : "https://i.imgur.com/1bX5QH6.jpg"
    },
    {
        "name" : "Anders",
        "surname" : "Christensen",
        "age" : 33,
        "imagePath" : "https://i.imgur.com/1bX5QH6.jpg"
    }
];

const Page = () => {
    return <div>
        <h1>OverSKrift</h1>
        <Avatars avatarsData={avatarsData}></Avatars>
    </div>
}



export default Page