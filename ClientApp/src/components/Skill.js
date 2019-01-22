import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Skill.css';
export class Skill extends Component{

    render() {
        return(
            <div className="skill">
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