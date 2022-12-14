import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }
  return (
    <div className="timeline-container">
      <div className="responsive-container">
        <h1 className="heading">
          MY JOURNEY OF <br />
          <span className="span">CCBP 4.0</span>
        </h1>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(eachTimeline => renderCard(eachTimeline))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
