import Tap from '../../Tap.png';
import Sink from '../../sink.png';
import Sprinkler from '../../sprinkler.png';
import Vent from '../../vent.png'
import WaterSoftener from '../../waterSoftener.jpg';
import '../Main/main.css'

function Main2(){
    return(
        <div id="main2">
            <div id="main2Left">
                <h2>What We Can Do For You</h2>
                <div id="services" >
                    <div className="serviceExample mainDescription" >
                        <img id="tapImage" alt="water tap" src={Tap}/>
                        <p>Maintenance: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                    </div>
                    <div className="serviceExample mainDescription">
                        <img id="sprinklerImage" alt="sprinkler" src={Sprinkler}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                    </div>
                    <div className="serviceExample mainDescription">
                        <img id="tapImage" alt="vent" src={Vent}/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus venenatis ex, tincidunt sodales magna suscipit ac.</p>
                    </div>
                    <div className="serviceExample mainDescription">
                        <img id="tapImage" alt="sink" src={Sink}/>
                        <p>2pacific.com</p>
                    </div>
                </div>
            </div>
            <div id="main2Right">
                <img src={WaterSoftener} alt="water softener" />
            </div>
        </div>
    )
}
export default Main2;