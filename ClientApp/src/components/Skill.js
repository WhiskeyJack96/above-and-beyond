import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Skill extends Component{

    render() {
        return(
            <div>
            <label>
                <input
                    type="checkbox"
                    value="Proficiency"
                    checked={this.props.proficient}
                    onChange = {() => this.props.handleClick(this.props.name)}
                ></input>
                {this.props.name} {this.props.score}
            </label>            
            </div>

        )
    }
}