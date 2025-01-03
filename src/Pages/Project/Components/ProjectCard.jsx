import "./ProjectCard.css";

const ProjectCard = (props) => {
  

  return (
    <>
      <div className="project-card_main">
        <div className="project-card-img">
          <a href={props.ProjectLink}aria-hidden="true" tabIndex="-1" target="_blank">
            <img src={props.ProjectImg} alt={props.ProjectTitle} width="" height="" loading="lazy" />
          </a>
        </div>
        <div>{props.ProjectTitle}</div>
        <button
          aria-hidden="true"
          tabIndex="1"
          className="click-sound"
          onClick={() =>
            props.onShowPopup({
              ProjectTitle: props.ProjectTitle,
              ProjectDesc: props.ProjectDesc,
            })
          }
        >
          Description
        </button>
      </div>
    </>
  );
};
export default ProjectCard;
