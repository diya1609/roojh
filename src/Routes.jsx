import React from "react";
import { useRoutes } from "react-router-dom";
import Homepagedesign from "pages/Homepagedesign";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepagedesign /> },
  ]);

  return element;
};

export default ProjectRoutes;
