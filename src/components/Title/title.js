import titleBG from '../../titleBG.png';
import Logo from '../../logo2.png';
import Line from '../../line.png';
import NiceMan from '../../niceMan.png'
import Yang from '../../yang.jpg';
import TruckMan from '../../TruckMan.jpg'
import './title.css'

function Title(){
    return(
        <div id="title">
            <img id="titleBG" src={titleBG} alt="water droplet"/>
            <div id="titleName">
                <img id="titleLogo" src={Logo} alt="aquatech logo"/>
                <h3>Quality Water Softeners, Professional Installation and Maintenance</h3>
                <img id="lineImage" src={Line} alt="graphic line"/>
                <button className='button'>Learn More</button>
                <div id="titleImages">
                    <img alt="man installing water softener" src={NiceMan}/>
                    <img alt="main standing next to truck" src={TruckMan}/>
                    <img alt="owner and founder" src={Yang}/>
                </div>
            </div>
        </div>
    )
}
export default Title;