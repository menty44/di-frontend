import React, {Component} from 'react'
import Game from "./game.component";

class Intro extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <h2>HackerBay MAZE GAME</h2>
                <p>You need to attack all the grimlins in 64 steps. By Default maze size is 10 x 10, you can change it by reloading or entering the height and width in prompt.</p>
            </div>
        );
    }

}
export default Intro