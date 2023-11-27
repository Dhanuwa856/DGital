import React from "react";
import { Carousel } from "flowbite-react";
import Men_1 from '../Assets/testimonial-1.jpg'
import Men_2 from '../Assets/testimonial-2.jpg'
import Men_3 from '../Assets/testimonial-3.jpg'
import Men_4 from '../Assets/testimonial-4.jpg'

function Testimonial01() {
  return (
    <div className="mt-20">
      <div className="mini-title w-max mx-auto">
        <span>TESTIMONIAL</span>
      </div>
      <h3 className="text-center font-bold text-dark mt-5 text-4xl">
        What Say Our Clients!
      </h3>

      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-10 w-[85%] mx-auto">
      <Carousel>
          <div className="flex gap-4 justify-center">
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_1} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_2} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_3} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_4} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_2} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] cooment-bg rounded-md">
              <div className="cooment rounded-md">
                <p className="text-[#444] text-sm font-medium mt-3 carosel-text">
                  Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
                  dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo
                  sed rebum vero dolor duo.
                </p>
                <div className="mt-3 flex items-center gap-4">
                  <img src={Men_3} alt="" className="w-[50px] ml-3" />
                  <div>
                    <p className="text-[#0e2e50] font-medium text-lg">
                      Client Name
                    </p>
                    <p className="text-sm font-medium">Profession</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonial01;
