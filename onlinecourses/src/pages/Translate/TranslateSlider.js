import Carousel from "react-bootstrap/Carousel";

function TranslateSlider() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src="translateMain.png"
          alt="First slide"
          style={{opacity: 0.5}}
        />
        <Carousel.Caption>
          <h1 style={{color: "black"}}>Bilimsel Araştırmalarınız İçin Profesyonel Çeviri</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="sliderTranslate.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default TranslateSlider;
