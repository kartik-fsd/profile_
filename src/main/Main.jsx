import ImageCarousel from "./carousel";
import PolygonBackground from "./polygon";


const MainPage = () => {
  const containerStyle = {
    backgroundColor: '#f0f3fa',
    color: '#638ecb',
    padding: '50px',
    // Add other styles as needed
  };

  return (
    <div style={containerStyle}>
      <PolygonBackground />
      <h1>Welcome to My Page</h1>
      <p>This is a demo of a futuristic design using polygons and colors.</p>
      {/* <ImageCarousel /> */}
      {/* Other content */}
    </div>
  );
};

export default MainPage;
