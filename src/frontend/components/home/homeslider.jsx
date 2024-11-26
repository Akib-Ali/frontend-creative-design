import React from "react";
import { Carousel } from 'react-responsive-carousel';


const Banners = () => {



    return (

        <>
            <Carousel
                showThumbs={true} // थंबनेल छुपाने के लिए
                autoPlay={true}   // ऑटो प्ले के लिए
                infiniteLoop={true} // इन्फिनिट लूप
            >
                <div>
                    <img
                        src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-fotoaibe-1571460.jpg&fm=jpg"
                        alt="Banner 1"
                        className="banner-img"
                    />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5oCQXVnQ19qZdtiBIh4Hv3Jmz-uOSXMaWUw&s"
                        alt="Banner 2"
                        className="banner-img"
                    />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_L5yL4JNbMB6F1z4fGrp687Cjbv-CnfUrA&s"
                        alt="Banner 3"
                        className="banner-img"
                    />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img
                        src="https://images.adsttc.com/media/images/632c/1ed8/5c11/c22d/15aa/f20e/newsletter/what-is-good-interior-design_7.jpg?1663835870"
                        alt="Banner 3"
                        className="banner-img"
                    />
                    <p className="legend">Legend 4</p>
                </div>
            </Carousel>


        </>
    )
}

export default Banners