import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://via.placeholder.com/300" alt="Placeholder 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/300" alt="Placeholder 2" />
      </div>
      {/* Add more slides with placeholder images */}
    </Slider>
  );
};

export default ImageCarousel;
