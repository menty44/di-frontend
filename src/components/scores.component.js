import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'

class Stats extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div id="score">
                <div>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Score Achieved</Card.Title>
                            <Card.Text>
                                <p style={{color: '#00adef'}} id="score_achieved">0</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div>

                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>Steps Used</Card.Title>
                            <Card.Text>
                                <p style={{color: '#00adef'}} id="no_of_moves">0</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
                <div >
                    <p>Steps Remaining</p>
                    <p style={{color: '#00adef'}} id="steps_remaining">0</p>
                </div>
                <div >
                    <p>Mashroom Remaining</p>
                    <p style={{color: '#00adef'}} id="mashrooms_remaining">0</p>
                </div>
            </div>
        );
    }

}
export default Stats