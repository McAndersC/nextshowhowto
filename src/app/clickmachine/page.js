import ClickMachines from "@/components/clickmachines/clickmachines"


const Header = ({headline, level}) => {


    return (

        level == 2 ? <h1>{headline}</h1> : <h2>{headline}</h2>
    )

}

const Page = () => {

    return <div>
     
        <Header headline="Klik Maskiner" level="1"></Header>
        <Header headline="Klik Maskiner" level="2"></Header>

      

        <div>
            <ClickMachines></ClickMachines>
        </div>
     
        
    </div>

}

export default Page