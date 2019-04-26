import React, { Component } from 'react';

export default function StarWarsChar(props){
//console.log(props.char)

const getAvatar = char => {
  let sex = char.gender === 'n/a' ? 'male':char.gender;
  let Avatar =  <object width="150px" type="image/svg+xml" data={`img/${sex}Avatar.svg`}></object>
   return Avatar
}

return(
    <div className="StarWarsChar">
        <h2>{props.char.name}</h2>
        <p>Hello, I am {props.char.name}.</p>
        {getAvatar(props.char)}

    </div>
)


}