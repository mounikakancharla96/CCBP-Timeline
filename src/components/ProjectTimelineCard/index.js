import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props

  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" />
      <div className="project-title-duration">
        <h1 className="project-heading">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
