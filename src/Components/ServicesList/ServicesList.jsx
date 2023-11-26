import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Bob_img from '../Assets/blob-primary.png'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

function ServicesList(props) {
  return (
    <div className="services-box w-[85%] text-center mx-auto bg-slate-100 py-20 px-0 rounded-lg relative overflow-hidden">
    <div className="flex flex-col justify-center items-center">
      <img src={Bob_img} alt="" className="mx-auto w-[100px] bob-img" />
      <span className="absolute font-semibold text-light text-3xl services-box-icon">
        <FontAwesomeIcon icon={props.icon} />
      </span>
    </div>
    <h5 className="mt-3 font-medium text-xl w-max mx-auto services-box-title">
      {props.title}
    </h5>
    <p className="text-[#777] w-[80%] mx-auto mt-3 text-lg services-box-text">
      Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed
      diam stet diam sed stet lorem.
    </p>
    <div className="w-[50px] h-[100px] bg-white absolute overflow-hidden mt-6 text-center top-[100%] left-[42%] rounded-t-3xl arrow-bg shadow-lg cursor-pointer">
      <span className="absolute left-1/2 top-[10%] text-primary text-lg arrow">
        <FontAwesomeIcon icon={faArrowRight} />
      </span>
    </div>
  </div>
  )
}

export default ServicesList