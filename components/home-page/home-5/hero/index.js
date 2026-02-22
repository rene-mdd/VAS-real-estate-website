import FilterBox from "./FilterBox";

const Hero = () => {
  return (
    <div className="mt-140">
    <div className="background-video-wrapper">
            <div className="image-background-bg">
            </div>
            <div className="background-video-bg">
                <video autoPlay muted playsInline loop src="/images/video/lihost-video.mp4">
                </video>
                <img src="/images/logo/lihost-white.png" />
            </div>
        </div>
    </div>
  );
};

export default Hero;
