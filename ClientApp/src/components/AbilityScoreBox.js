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
        this.ScoreChange = this.ScoreChange.bind(this);
        this.ModifierChange = this.ModifierChange.bind(this);
    }

    GetModifier(isProficient){
        if (isProficient){
            return this.state.proficiencyBonus + Math.floor((this.state.score-10)/2);
        }
        else{
            return Math.floor((this.state.score-10)/2);
        }
    }

    ProficiencyChange(skillName){
        //Called in Skill.js on checkbox click, inverts the proficient prop and re renders the card.
        for (var i=0; i<this.state.skills.length; i++){
            if (this.state.skills[i].name == skillName){
                var temp = this.state.skills;
                temp[i].proficient = !temp[i].proficient;
                this.setState(temp);
            }
        } 
        return 
    }

    ModifierChange() {
        console.log(this.modifier)
        this.setState({modifier: Math.floor((this.score-10)/2)});
        console.log(this.modifier)
        return
    }

    ScoreChange(e) {
       // console.log(this.state.score);
        this.setState({score: e.target.value});
        setTimeout(this.ModifierChange, 3000);
        
        //console.log(this.state.score);
        //WAIT AND RERENDER MODIFER MODIFIER
        return 
    }

  


   render(){
       return(
            <div className ="card">
                    <strong>{this.state.name}</strong><br />
                <label>
                    Raw Score:
                    <input
                        type="number"
                        name="rawscore"
                        // NOT WORKING?!
                        min='1'
                        max='30'
                        value= {this.state.score}
                        onChange = {(e) => this.ScoreChange(e)}
                    ></input>
                </label>    
                <label>
                    Modifier: {Math.floor((this.state.score-10)/2)}
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