import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div>
      <div className="title-duration">
        <h1 className="item-heading">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="item-duration">{duration}</p>
        </div>
      </div>
      <p className="item-description">{description}</p>
      <ul className="tags">
        {tagsList.map(eachTag => (
          <li className="tag-item" key={eachTag.id}>
            <p className="tag-para">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
