import { Parallax } from "react-parallax";
import satellite1 from "../img/nasa.jpg";

const Imagefour = () => (
  <div>
    <div id="4">
      <Parallax
        className="image"
        bgImage={satellite1}
        strength={800}
        bgImageStyle={{ minHeight: "150vh" }}
      >
        <div>
          <div className="content">
            <span className="img-txt">
              <h4>“Creativity is just connecting things.”</h4>
              <p className="txt">-Steven Paul Jobs-</p>
            </span>
          </div>
          <div className="content">
            <a href="https://www.apple.com/shop/buy-iphone/iphone-15-pro">
              <button className="button">Pre Order Now</button>
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  </div>
);

export default Imagefour;
