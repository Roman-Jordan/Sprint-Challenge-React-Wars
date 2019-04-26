import React, { Component } from 'react';
import ScgRender from './svgRender/SvgRender';
import SvgRender from './svgRender/SvgRender';

export default function StarWarsChar(props){


return(
    <div className="StarWarsChar">
        <div className="StarWarsCharContent">
            <h2>{props.char.name}</h2>
            <p>Hello, I'm {props.char.name}.</p>
            <p>Height:{props.char.height}</p>
            <p>Mass :{props.char.mass}</p>
            <p>Eyes: {props.char.eye_color}</p>
        </div>
        <div className="Avatar">
            <SvgRender char={props.char}/>
        </div>
    </div>
)


}