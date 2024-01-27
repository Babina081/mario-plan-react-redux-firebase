import React from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = (props) => {
  const { id } = useParams();
  
  return (
    <div className="container section project-details ">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            exercitationem neque eaque quibusdam quod iure nostrum sit in
            aliquid eos eum, minus, voluptate molestiae nemo illum. Voluptatibus
            earum laborum maxime?
          </p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>Posted byBabina Gurung</div>
          <div>2nd September, 2 AM</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
