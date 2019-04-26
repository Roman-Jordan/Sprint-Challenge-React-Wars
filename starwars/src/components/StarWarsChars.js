import React, { Component } from 'react';
import StarWarsChar from './StarWarsChar';
import './StarWars.scss'
export default function StarWarsChars(props){

    console.log()
    return(
        <div className="StarWarsChars">
            {props.listChars.map((char,i) => <StarWarsChar key={i} char={char} />)}
        </div>
    )
}