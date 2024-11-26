import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // लाइटबॉक्स की डिफ़ॉल्ट स्टाइल्स

const LatestProject = () => {
  // सभी इमेज की लिस्ट
  const images = [
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSNAdOoRtZgSARTL_dRtGsmGn0LfZFX1EFng&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqjzVj2OG7oU8K72QUdpBABuQRG7NMzZEw9w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKsYq7P_HH0U1dy7ijDzt3qRk3fMgm7mccuQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoNbqgHcwKVv6TS5Gqa5ug3AYlo3VjqhLBA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb3Gwl8RmTDJSFYDBOQR8PHDTEZ1e1FiyYlA&s",
    "https://brahmaainteriors.in/images/living-room-designs-indian-style-middle-class.jpg",
    "https://ansainteriors.com/wp-content/uploads/2020/08/ultra-chic-bedroom-interior-design.jpg",
  ];

  // State to manage lightbox visibility
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <>
      <div className="latest-project-container">
        <div className="latest-project-leftside-design"></div>
        <div className="latest-project-content">
          <h1>Latest Project</h1>
          <p>
            Epic Loop Interiors is thrilled to unveil our latest project, The Green Innovation Hub, at the heart of
            Techtopia’s sustainable campus. This collaborative workspace is designed to inspire eco-conscious
            creation and foster groundbreaking ideas in a healthy and inspiring environment.
          </p>
        </div>
      </div>

      {/* Projects */}
      <section className="work" id="works">
        <div className="container-fluid">
          <div className="row no-gutters gallarys">
            {images.map((image, index) => (
              <div className="col-md-3 col-sm-6 col-xs-12" key={index}>
                <div className="img-wrapper">
                  <img
                    src={image}
                    alt={`Project ${index + 1}`}
                    className="img-responsive"
                    onClick={() => {
                      setPhotoIndex(index);
                      setIsOpen(true);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </>
  );
};

export default LatestProject;
