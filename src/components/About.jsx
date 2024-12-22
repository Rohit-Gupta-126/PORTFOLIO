import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap } from 'react-icons/fa';

export default function About(className) {
    return (
        <section className="About flex flex-col items-center gap-16 py-10" id="about">
            <p className='text-4xl'>Educational Qualification</p>
            <VerticalTimeline lineColor='#d51542'>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d51542', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #d51542' }}
                    date="July 26, 2004"
                    iconStyle={{ background: '#d51542', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d51542', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #d51542' }}
                    date="October 2023"
                    iconStyle={{ background: '#d51542', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d51542', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #d51542' }}
                    date="January 19, 2024"
                    iconStyle={{ background: '#d51542', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d51542', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #d51542' }}
                    date="January 19, 2024"
                    iconStyle={{ background: '#d51542', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>

            </VerticalTimeline>
        </section>
    )
}
