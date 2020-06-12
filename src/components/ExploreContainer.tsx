import React from "react";
import Phaser from "phaser";

import "./ExploreContainer.css";

interface ContainerProps {
  name: string;
}

const config = {
  type: Phaser.AUTO,
  parent: "funtoma",
  width: 900,
  height: 600,
  scene: {
    preload: preload,
    create: create,
  },
};
const game = new Phaser.Game(config);
function preload() {
}
function create() {
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <div className="funtoma">
      </div>
    </div>
  );
};

export default ExploreContainer;
