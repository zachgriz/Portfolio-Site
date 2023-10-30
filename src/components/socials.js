import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import '../styles/socials.scss'

export default class Socials extends React.Component{
    render() {
        return <div className='socials'>
            <a href="https://www.linkedin.com/in/zach-griswold/">
            <FontAwesomeIcon icon={faLinkedin} className='icon'/>
            </a>
            <a href="https://github.com/zachgriz">
            <FontAwesomeIcon icon={faGithubSquare} className='icon'/>
            </a>
            <a href='mailto:zachgrizzly@gmail.com?subject=Contact via Portfolio'>
            <FontAwesomeIcon icon={faEnvelopeSquare} className='icon'/>
            </a>
        </div>
    }
}
