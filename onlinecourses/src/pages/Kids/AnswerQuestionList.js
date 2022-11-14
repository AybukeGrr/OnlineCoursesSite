import React from "react";
import AnswerQuestion from "./AnswerQuestion";
import Container from "react-bootstrap/esm/Container";

function AnswerQuestionList() {
  const dataLists = [
    {
      question: "KY Kids Nedir?",
      answer:
        " KY Kids, akademisyenler tarafından tasarlanmış çocuklara özel online İngilizce eğitim platformudur. Bu platformda 4-13 yaş aralığındaki en fazla 4 kişiden oluşan gruplara alanında uzman Native öğretmenlerimiz ile çevrim içi ortamda eğlenceli içerikler ile konuşarak İngilizce öğrenir. Amacımız çocuklarınızın İngilizceyi gerçek bir iletişim aracı olarak kullanabilecekleri bir ortam oluşturmak ve Native eğitmen desteği ile sadece kelime ve gramer bilmekten öte, İngilizceyi bir iletişim aracı olarak kullanmalarını sağlamak.",
    },
    {
      question: " Ders saatleri nasıl belirlenir?",
      answer:
        "KY Kids ders programları çocukların okul çıkış zamanları, yemek, dinleme gibi ihtiyaçları dikkate alınarak belirlenmiştir. Dersler çoğunlukla hafta içi 19:00 – 21:00 arası planlanmaktadır. Okul öncesi yaş grupları için saat 20:00’ dan sonra ders planlanmaz.",
    },
    {
      question: "Dersler kaç dakika sürer?",
      answer:
        " KY Kids dersleri çocukların dikkat süresi ile dersteki bilişsel yükleri (kelimeler/dinleme/okuma süreleri vb.) dikkate alınarak 30 dk. olarak belirlenmiştir.",
    },
    {
      question: " Öğretmenleriniz Native (Anadili İngilizce) mi?",
      answer:
        "KY Kids eğitmenleri İngilizce öğretim alanında uzman, uluslararası İngilizce öğretim sertifikası olan (TEFL, TESOL, CELTA vb.) Native öğretmenlerden oluşmaktadır.",
    },
    {
      question: "Eğitim ne kadar sürer?",
      answer:
        "KY Kids eğitimlerini 1 aylık veya 3 aylık olarak satın alabilirsiniz. 3 Aylık bir eğitim paketinde çocuklar bir eğitim seviyesini tamamlamış olur.",
    },
    {
      question: "Derslere nasıl katılabiliriz?",
      answer:
        "Ders programları ile birlikte her derse giriş yapabileceğiniz bağlantı (ders linki) gönderilir. Ders saatinde bu bağlantıya tıklayarak akıllı telefon, tablet veya bilgisayar ile derslere katılabilirsiniz. Derslerin tamamında görseller ve interaktif içerikler kullanıldığından bilgisayar ile girilmesi tavsiye edilir.",
    },
  ];

  return (
    <Container className="card-list">
      {dataLists.map((dataList) => (
        <AnswerQuestion question={dataList.question} answer={dataList.answer} />
      ))}
    </Container>
  );
}

export default AnswerQuestionList;
