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
        //Called in Skill.js on checkbox click, inverts the proficient prop and re renders the card.
        for (var i=0; i<this.state.skills.length; i++){
            if (this.state.skills[i].name == skillName){
                var temp = this.state.skills;
                temp[i].proficient = !temp[i].proficient;
                console.log(temp);
                //temp.proficient = temp.proficient? false:true;
                this.setState(temp);
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
                {this.state.skills.map((skill, i) => <Skill name={skill.name} score={this.GetModifier(skill.proficient)} handleClick = {this.ProficiencyChange} key={i} proficient={skill.proficient}/>)}      
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