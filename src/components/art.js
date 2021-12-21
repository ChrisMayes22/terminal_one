import React from "react";
import { Link } from "react-router-dom";
import MusicRow from './musicRow.js';
import './art.css';

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

    const payload = [
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire.png' }}>
            Art for Imperial Guests (1)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire2.png' }}>
            Art for Imperial Guests (2)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire3.png' }}>
            Art for Imperial Guests (3)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire4.png' }}>
            Art for Imperial Guests (4)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire4.png' }}>
            Art for Imperial Guests (5)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/solar_empire5.png' }}>
            Art for Imperial Guests (6)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/royal_guard.png' }}>
            Art for Militaristic Guests (1)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/lunar_republic.png' }}>
            Art for Democratic Guests (1)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/lunar_republic1.png' }}>
            Art for Democratic Guests (2)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/loose_lips.png' }}>
            Internal Material (DO NOT SHARE)
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/inspire.png'}}>
            Nettlekiss
        </Link>,
        <Link to="/image" state={{imgPath: 'https://chrismayes22.github.io/terminal_one/air_cavalry.png' }}>
            Internal Recruitment
        </Link>,
    ];

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

const art = () => {
    return(
        <div className={'art-flex-root'}>
                <div className={'art-list'}>
                    <h1>Welcome to the Fine Art Collection of Equestria!</h1>
                    <div className={'art-body'}>
                        Fine Art is practiced across virtually all known cultures, so it is a powerful diplomatic 
                        tool for connecting with potential allies, friends, and vassals. Your guests may 
                        want to see some examples of equestrian work. Choose from the selection below to impress them!
                    </div>
                    {getRandomAgony().map((item) => {
                        return <MusicRow title={item}/>
                    })}
                </div>
        </div>
    )
}

export default art;