import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { timelineElements } from "../data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Timeline() {
    return (
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My History
        </h1>
        <VerticalTimeline> 
        <div >  

                {timelineElements.map((element) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work " 
                    date={element.date}
                    contentStyle={{ background: '#DCDCDC', color: 'black', fontFamily: 'Averia Gruesa Libre' }}
                    iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                    icon={<FontAwesomeIcon class="d-flex justify-content-center" size="2x" icon={element.icon} />}>
                    <b className="vertical-timeline-element-title ">{element.role} at {element.company}</b><hr></hr>     
                    {element.desc.map((bullet) => (<li> {bullet}</li>))}
                    </VerticalTimelineElement>
                ))}
                </div>
        </VerticalTimeline>
      </div>
    );
  }

