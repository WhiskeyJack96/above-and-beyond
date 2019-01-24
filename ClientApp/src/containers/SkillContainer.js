import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import {AbilityScoreBox} from '../components/AbilityScoreBox';
import '../components/Skill.css';

const proficiencyBonus = 3;
const AbilityScoreInfo = [{name: 'Strength', score: 9, skills: [{name: 'Saving Throw', proficient: false}, {name: 'Athletics', proficient:true}] },
                        {name: 'Dexterity', score: 16, skills: [{name: 'Saving Throw', proficient: false}, {name: 'Acrobatics', proficient:true}, {name: 'Sleight of Hand', proficient:false}, {name: 'Stealth', proficient:false}] },
                        {name: 'Constitution', score: 13, skills: [{name: 'Saving Throw', proficient: false}]},
                        {name: 'Inteligence', score: 12, skills: [{name: 'Saving Throw', proficient: true}, {name: 'Arcana', proficient:false}, {name: 'History', proficient:false}, {name: 'Investigation', proficient:false},  {name: 'Nature', proficient:false}, {name: 'Religion', proficient:false}] },
                        {name: 'Wisdom', score: 17, skills: [{name: 'Saving Throw', proficient: true}, {name: 'Animal Handling', proficient:false}, {name: 'Insight', proficient:false}, {name: 'Medicine', proficient:true}, {name: 'Perception', proficient:true}, {name: 'Survival', proficient:false}] },
                        {name: 'Charisma', score: 17, skills: [{name: 'Saving Throw', proficient: false}, {name: 'Deception', proficient:false}, {name: 'Intimidation', proficient:false}, {name: 'Performance', proficient:false}, {name: 'Persuasion', proficient:false}] }];

export class SkillContainer extends Component {
  
    constructor (props) {
        super(props);
        this.RawToModifierConverter.bind(this);
        this.state = {'AbilityScoreInfo':AbilityScoreInfo,'proficiencyBonus':proficiencyBonus}
    }
    RawToModifierConverter (score){
        //Subtracts 10 from the raw score, divides by 2 rounding down, and returns a new value to be used as a modifer
        return Math.floor((score-10)/2); 
    }


    render () {
        return ( 
        <div className='container'>
            {this.state.AbilityScoreInfo.map((attribute, i) => <AbilityScoreBox {...attribute} proficiencyBonus={proficiencyBonus} rawToModifierConverter={this.RawToModifierConverter} key={i} />)}
        </div>
        );
    }
}