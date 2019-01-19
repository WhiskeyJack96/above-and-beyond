import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Skill} from './Skill';

class AbilityScoreBox extends Component{
    constructor(props){
        super(props);
        this.state = this.props;
        this.modifier = this.state.rawToModifierConverter(this.state.score);
        this.ProficiencyChange = this.ProficiencyChange.bind(this);
    }

    GetModifier(isProficient){
        if (isProficient){
            return this.state.proficiencyBonus + this.modifier;
        }
        else{
            return this.modifier;
        }
    }

    ProficiencyChange(skillName){
        console.log(this.state);
        for (var i=0; i<this.state.skills.length; i++){
            if (this.state.skills[i].name == skillName){
                this.setState({})// this.state.skills[i].proficient = !this.state.skills.proficient;
                console.log("changing", this.state);
            }
        }
        return 
    }

   render(){
       return(
            <div>
                <label>
                    <input type="checkbox" value="Proficiency"/>
                    {this.state.name}<br />
                    Raw Score: {this.state.score} MAYBE LET USER EDIT<br />
                    Modifier: {}
                </label>                   
                {this.state.skills.map((skill, i) => <Skill name={skill.name} score={this.GetModifier(skill.proficient)} handleClick = {this.ProficiencyChange} key={i} />)}      
            </div>
       )
   }
}

AbilityScoreBox.PropTypes = {
    name: PropTypes.string.isRequired,
    proficiencyBonus: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    skills: PropTypes.shape({
        name: PropTypes.string,
        proficient: PropTypes.bool,
    }),
    rawToModifierConverter: PropTypes.func.isRequired
}

export {AbilityScoreBox};