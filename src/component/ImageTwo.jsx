import { Parallax } from "react-parallax";
import spaceStation from "../img/nasa22.png";

const ImageTwo = () => (
  <div id="2">
    <Parallax
      className="image"
      bgImage={spaceStation}
      strength={300}
      blur={{ min: -5, max: 5 }}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      <div className="content">
        <span className="img-txt">Explore New Things!! </span>
      </div>
    </Parallax>
  </div>
);

export default ImageTwo;
