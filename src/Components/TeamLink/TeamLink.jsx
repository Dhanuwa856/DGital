import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'

function TeamLink(props) {
  return (
    <div className="team-box w-1/4 bg-slate-100 pt-4 px-4 pb-7 rounded-lg">
    <img src={props.image} alt={props.name} className="w-full rounded-full" />
    <h4 className="font-medium text-lg mt-7 text-center">{props.name}</h4>
    <p className="text-[#777] text-center mt-1">{props.position}</p>
    <hr />
    <div className="flex justify-center gap-4 mt-3 text-lg text-primary team-icon">
      <span><FontAwesomeIcon icon={faFacebookF} /></span>
      <span><FontAwesomeIcon icon={faTwitter} /></span>
      <span><FontAwesomeIcon icon={faInstagram} /></span>
      <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
    </div>
  </div>
  )
}

export default TeamLink