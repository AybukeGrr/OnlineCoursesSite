import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./WhoAreWe.css";

function WhoAreWe() {
  return (
    <Container>
      <div style={{ height: 390 }}>
        <h1 id="who">Hakkımızda</h1>
        <div>
          <img
            style={{
              height: "50%",
              width: "45%",
              position: "relative",
              marginTop: "203px",
            }}
            src="company.png"
          />
        </div>
      </div>

      <div>
        <p
          style={{
            position: "relative",
            marginTop: 286,
            marginBottom: 80,
            textAlign: "center",
            fontFamily: "Monserrat",
            fontSize: 20
          }}
        >
          Kutup Yıldızı Akademi’nin öncelikli kuruluş amacı nitelikli eğitimi
          herkes için erişilebilir hale getirmektir. Sürekli öğrenen,
          yeniliklere açık, güçlü iletişim becerilerine sahip ve sonuç odaklı
          ekibimizle aşağıdaki hedeflere ulaşmayı ilke edindik. Siz değerli
          öğrenciler, akademisyenler, ebeveynler ve keşfetmeyi seven tüm
          bireyler ile keyifli ve samimi öğrenme ortamlarında nitelikli,
          yaratıcı ve yenilikçi deneyimler edinmek için sabırsızlanıyoruz.
        </p>
      </div>
    </Container>
  );
}

export default WhoAreWe;
