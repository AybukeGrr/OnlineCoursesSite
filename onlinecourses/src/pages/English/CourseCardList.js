import React from "react";
import CourseCard from "./CourseCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function CourseCardList() {
  const cardLists = [
    {
      title: "Academic Writing",
      subTitle: "Akademik Yazma kursumuzu satın alarak ilerlemeye başlayın.",
      photo: "writing.png",
      btn: "/kids",
    },
    {
      title: "Academic Speaking",
      subTitle: "Akademik Konuşma kursumuzu satın alarak ilerlemeye başlayın.",
      photo: "speaking.png",
      btn: "/english",
    },
    {
      title: "General English",
      subTitle: "Genel İngilizce kursumuzu satın alarak ilerlemeye başlayın.",
      photo: "generalEnglish.png",
      btn: "/research",
    },
    {
      title: "Business English",
      subTitle: "İş İngilizcesi kursumuzu satın alarak ilerlemeye başlayın.",
      photo: "businessEnglish.png",
      btn: "/translate",
    },
    {
      title: "Speaking Club",
      subTitle: "Konuşma Kulübü kursumuzu satın alarak ilerlemeye başlayın.",
      photo: "speakingClub.png",
      btn: "/app",
    },
  ];

  return (
    <Container className="card-list">
      {/* <Row xs={2} md={4} className="g-4"> */}
      <OwlCarousel className="owl-theme" loop={true} margin={10} nav>
        {cardLists.map((cardList) => (
          <CourseCard
            title={cardList.title}
            subTitle={cardList.subTitle}
            photo={cardList.photo}
            btn={cardList.btn}
          />
        ))}
      </OwlCarousel>
      {/* </Row> */}
    </Container>
  );
}

export default CourseCardList;
