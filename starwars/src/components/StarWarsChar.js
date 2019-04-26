import React, { Component } from 'react';
import ScgRender from './svgRender/SvgRender';
import SvgRender from './svgRender/SvgRender';

export default function StarWarsChar(props){


return(
    <div className="StarWarsChar">
        <h2>{props.char.name}</h2>
        <p>Hello, I am {props.char.name}.</p>
        <SvgRender char={props.char}/>

    </div>
)


}