import './App.css';
// import React, { useState } from 'react';

export default function Box({type  , onboxClick})
{
    return <button className={type} onClick={onboxClick}> </button>
}