import React from "react";
import HomeCard from "./HomeCard";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

function HomeCardList() {
  const cardLists = [
    {
      title: " KY Kids",
      subTitle:
        " 4 - 13 Yaş Çocuklar için Native Öğretmenler İngilizce Dersler",
      icon: "kidsIcon.png",
      photo: "kids.png",
      btn: "/kids",
    },
    {
      title: " KY English",
      subTitle:
        "İngilizce Konuşma Kulüpleri, Akademik İngilizce ve İş İngilizcesi",
      icon: "englishIcon.png",
      photo: "english.png",
      btn: "/english",
    },
    {
      title: "KY Research",
      subTitle: " Nitel ve Nicel Veri Analizi, Bilimsel Araştırma Eğitimleri",
      icon: "researchIcon.png",
      photo: "research.png",
      btn: "/research",
    },
    {
      title: "KY Translate",
      subTitle:
        "Bilimsel Çalışmalarınız için Türkçe - İngilizce Çeviri & Son Okuma",
      icon: "translateIcon.png",
      photo: "translate.png",
      btn: "/translate",
    },
    {
      title: "KY App",
      subTitle:
        "Dijital Eğitim Araçları, Uygulamalar ve Öğretim Yönetim Sistemleri",
      icon: "appIcon.png",
      photo: "app.png",
      btn: "/app",
    },
    {
      title: " KY Workshop",
      subTitle:
        "Alanında Uzman Akademisyenler ile Uluslararası Atölye ve Seminerler",
      icon: "workshopIcon.png",
      photo: "workshops.png",
      btn: "/workshop",
    },
  ];

  return (
    <Container className="card-list">
      <Row xs={2} md={3} className="g-4">
        {cardLists.map((cardList) => (
          <HomeCard
            title={cardList.title}
            subTitle={cardList.subTitle}
            photo={cardList.photo}
            icon={cardList.icon}
            btn={cardList.btn}
          />
        ))}
      </Row>
    </Container>
  );
}

export default HomeCardList;
