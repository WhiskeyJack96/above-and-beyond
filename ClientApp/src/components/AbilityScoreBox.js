import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Skill} from './Skill';
import './Skill.css';
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
        //Called in Skill.js on checkbox click, inverts the proficient prop and re renders the card.
        for (var i=0; i<this.state.skills.length; i++){
            if (this.state.skills[i].name == skillName){
                var temp = this.state.skills;
                temp[i].proficient = !temp[i].proficient;
                console.log(temp);
                this.setState(temp);
            }
        } 
        return 
    }

   render(){
       return(
            <div className ="card">
                    <strong>{this.state.name}</strong><br />
                <label>
                    Raw Score: {this.state.score}
                </label>    
                <label>
                    Modifier: {this.modifier}
                </label>                      
                {this.state.skills.map((skill, i) => <Skill name={skill.name} score={this.GetModifier(skill.proficient)} handleClick = {this.ProficiencyChange} key={i} proficient={skill.proficient}/>)}         
            <br />
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