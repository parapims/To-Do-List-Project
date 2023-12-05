import "./Header.css";
import { GoSun,GoMoon } from "react-icons/go";
export default function Header(props){
    const{theme,setTheme}=props;
    function toggleTheme(){
        if(theme==="daymode"){
            setTheme("nightmode")
        }else{
            setTheme("daymode")
        }
    }
    return(
        <header>
            <div className="logo">
                <span>task management</span>
            </div>
            <div className="theme-container">
                <div className="mode">{theme==="daymode"?"day mode":"night mode"}</div>
                {/* <GoArrowSwitch className="icon" onClick={toggleTheme}/> */}
                <div className="icon" onClick={toggleTheme}>
                    {theme==="daymode"?<GoSun />:<GoMoon />}
                </div>
            </div>
        </header>
    );
}