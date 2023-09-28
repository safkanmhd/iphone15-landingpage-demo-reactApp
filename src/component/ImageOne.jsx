import { Parallax } from "react-parallax";
import nasa from "../img/nasaaa.png";

const ImageOne = () => (
  <div id="one">
    <Parallax
      className="image"
      bgImage={nasa}
      strength={300}
      bgImageStyle={{ minHeight: "100vh" }}
    >
      <div className="content">
        <span className="img-txt">I Phone 15 Series </span>
      </div>
    </Parallax>
  </div>
);

export default ImageOne;
