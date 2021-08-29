import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { timelineElements } from "../data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Timeline() {
    return (
        <div>
         <br></br><br></br><br></br><br></br><br></br>
          <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white text-center">
          My History
          </h1>
        </div>
        

        <VerticalTimeline> 
        <div >  

                {timelineElements.map((element) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work " 
                    date={element.date}
                    contentStyle={{ background: '#DCDCDC', color: 'black', fontFamily: 'Averia Gruesa Libre'}}
                    iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                    icon={<FontAwesomeIcon class="d-flex justify-content-center" size="2x" icon={element.icon} />}>
                    <b className="vertical-timeline-element-title ">{element.role} at {element.company}</b><hr></hr>     
                    <h4 className="vertical-timeline-element-subtitle ">{element.date}</h4><hr></hr>     
                    {element.desc.map((bullet) => (<li> {bullet}</li>))}
                    </VerticalTimelineElement>
                ))}
                </div>
        </VerticalTimeline>
      </div>
    );
  }

