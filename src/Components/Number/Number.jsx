import React from "react";
import NumberBg from "../NumberBg/NumberBg";
import {
  faCertificate,
  faUsersGear,
  faUsers,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

function Number() {
  return (
    <div className="mt-10">
      <NumberBg>
        <div className="number-box w-1/4">
          <div className="text-center">
            <p className="text-secondary text-5xl">
              <FontAwesomeIcon icon={faCertificate} />
            </p>
            <h4 className="text-light font-semibold mt-3 text-4xl">
              <CountUp delay={1} end={5} duration={5} />+
            </h4>
            <p className="text-light text-lg mt-2 font-medium">
              Years Experience
            </p>
          </div>
        </div>
        <div className="number-box w-1/4">
          <div className="text-center">
            <p className="text-secondary text-5xl">
              <FontAwesomeIcon icon={faUsersGear} />{" "}
            </p>
            <h4 className="text-light font-semibold mt-3 text-4xl">
              <CountUp delay={1} end={47} duration={5} />
            </h4>
            <p className="text-light text-lg mt-2 font-medium">Team Members</p>
          </div>
        </div>
        <div className="number-box w-1/4">
          <div className="text-center">
            <p className="text-secondary text-5xl">
              <FontAwesomeIcon icon={faUsers} />{" "}
            </p>
            <h4 className="text-light font-semibold mt-3 text-4xl">
              <CountUp delay={1} end={1456} duration={5} />
            </h4>
            <p className="text-light text-lg mt-2 font-medium">
              Satisfied Clients
            </p>
          </div>
        </div>
        <div className="number-box w-1/4">
          <div className="text-center">
            <p className="text-secondary text-5xl">
              <FontAwesomeIcon icon={faCheck} />{" "}
            </p>
            <h4 className="text-light font-semibold mt-3 text-4xl">
              <CountUp delay={1} end={1556} duration={5} />
            </h4>
            <p className="text-light text-lg mt-2 font-medium">
              Compleate Projects
            </p>
          </div>
        </div>
      </NumberBg>
    </div>
  );
}

export default Number;
