import { Parallax } from "react-parallax";
import ReactImageGallery from "react-image-gallery";
import images from "./Img";

const ImageThree = () => (
  <div>
    <div id="3">
      <Parallax
        className="image"
        strength={800}
        bgImageStyle={{ minHeight: "50vh" }}
      >
        <div>
          <ReactImageGallery items={images} />
          
        </div>

       
      </Parallax>
    </div>
  </div>
);

export default ImageThree;
