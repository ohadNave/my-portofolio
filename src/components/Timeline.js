import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { timelineElements } from "../data.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Timeline() {
    return (
        
        <VerticalTimeline> 
        <div >  

                {timelineElements.map((element) => (
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work " 
                    date={element.date}
                    contentStyle={{ background: '#DCDCDC', color: 'black', fontFamily: 'Atma' }}
                    iconStyle={{ background: 'rgb(16, 185, 129)', color: '#fff' }}
                    icon={<FontAwesomeIcon class="d-flex justify-content-center" size="2x" icon={element.icon} />}>
                    <b className="vertical-timeline-element-title ">{element.role} at {element.company}</b><hr></hr>     
                    {element.desc.map((bullet) => (<li> {bullet}</li>))}
                    </VerticalTimelineElement>
                ))}
                </div>
        </VerticalTimeline>
      
    );
  }

