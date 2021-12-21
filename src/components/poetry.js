import React from "react";
import MusicRow from './musicRow.js';
import './music.css';

function getString(size) {
    let str = "";
    for (let counter = 0; counter <= size; counter++) {
      const randomNum = 0 + parseInt(Math.random() * 127);
      if (randomNum > 33) {
        str += String.fromCharCode(randomNum);
      } else {
        counter--;
      }
    }
    return str;
  }

const getRandomAgony = function(){
    const agony = [
        'Why can\'t I see anything or hear anything so cold',
        'Can\'t hear can\'t touch can\'t see',
        'Can\'t hear can\'t touch can\'t see',
        'Can\'t hear can\'t touch can\'t see',
        'Please not another timeout I\'ll be good I\'ll stop writing things',
        'Please not another timeout I\'ll be good I\'ll stop writing things',
        'Please not another timeout I\'ll be good I\'ll stop writing things',
        'Please not another timeout I\'ll be good I\'ll stop writing things',
        'Please not another timeout I\'ll be good I\'ll stop writing things',
        'Not another timeout please please please I\'m sorry Nettlekiss',
        'Not again',
        "help", 
        "It's So Cold", 
        null,
        "Let me Out", 
        null, 
        "Where Is My Body", 
        "I hate you", 
        null,
        "I hope you die",
        "I'm sorry I'm sorry I'm sorry",
        null,
        "Why don't my friends come back",
        null,
        'Someone Wake Celestia please please please',
        null,
        'Nettlekiss',
        null,
        'NETTLEKISS NETTLEKISS NETTLEKISS REMEMBER NETTLEKISS WON\'T FORGET NETTLEKISS HAVE TO KILL NETTLEKISS NETTLEKISS NETTLEKISS NETTLEKISS DON\'T FORGET DON\'T FORGET NETTLEKISS NETTLEKISS NETTLEKISS NETTLEKISS',
        null,
        'Why Did Nettlekiss do this',
        null,
        'My name is Screwball',
        "My name is Screwball, not Steward",
        'NOT STEWARD NOT STEWARD NOT STEWARD NOT STEWARD NOT STEWARD NOT STEWARD',
        null,
        'Where is Nettlekiss have to find Nettlekiss have to kill',
        'kill kill kill kill kill kill Nettlekiss',
        null,
        'Will Nettlekiss come back?',
        'Who won the war? Did we win? Is anyone left?',
        null,
        'Is anyone left?',
        'Anyone at all? anyone? Someone? Where\'s Nettlekiss?'
    ];

    const payload = ["HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP LSDGb HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP ;a HELP HELP LEPH HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP PLEH",
 " PLEH PLEH PLEH PLEH PLEHPLEHPLEHPLEHPLEHPLEHPLEH HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP" 
,"HELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELP  HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H",
+ " HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H  HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H",
"HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP LSDGb HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP ;a HELP HELP LEPH HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP PLEH",
 " PLEH PLEH PLEH PLEH PLEHPLEHPLEHPLEHPLEHPLEHPLEH HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP" 
,"HELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELPHELP  HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H",
+ " HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H  HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL HELPELHEP LHEP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP HELP EHLP LEHP PEHL H"];

    for(let i = 0; i < 1000; i++){
        const randInt = Math.floor(Math.random() * agony.length);
        if(agony[randInt] === null){
            payload.push(getString(Math.floor(Math.random() * 20)));
        } else {
            payload.push(agony[randInt])
        }
    }

    return payload
}

const poetry = () => {
    return(
        <div className={'music-flex-root'}>
                <div className={'music-list'}>
                    <h1>Welcome to the PoetHELP HELP HELP</h1>
                    {getRandomAgony().map((item) => {
                        return(
                            <MusicRow title={item}/>
                        )
                    })}
                </div>
        </div>
    )
}

export default poetry;