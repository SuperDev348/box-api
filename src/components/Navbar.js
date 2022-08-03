import { Styles } from "./NavbarStyle"

const navList = [
    {name: 'NBA'},
    {name: 'MLB'},
]

export default function Navbar({league, setLeague}){
    return(
        <Styles>
            <div className="nav">
                <div className="logo">Boxscore Challenge</div>
                <div className="item-block">
                    {navList.map((item, idx) => {
                        return (
                            <div
                                className={league === item.name?'nav-item active':'nav-item'} 
                                onClick={() => setLeague(item.name)}
                                key={idx}
                            >{item.name}</div>
                        )
                    })}
                </div>
            </div>
        </Styles>
    )
}