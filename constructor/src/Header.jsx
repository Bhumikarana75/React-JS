import {component} from "react";

class Header extends component {

    constructor(){
        super();
        this.reacord = {
            arr1 : [1,10,100],
            arr2 : [2,20,200]
        }
        console.log(this.reacord);
        
    }
    render(){
        return(
            <div>
                <ul>
                    <li>
                        <a href="#">Home</a>
                        <h2>{this.reacord}</h2>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Header