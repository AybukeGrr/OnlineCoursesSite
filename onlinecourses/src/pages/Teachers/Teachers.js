import { Container } from '@mui/system'
import Button from "@mui/material/Button";
import React from 'react'
import "./Teacher.css"
import TeacherCard from './TeacherCard';
import TeacherCardList from './TeacherCardList';

function Teachers() {
  return (
    <Container>
      <div style={{ backgroundColor: "white", position: "relative" }}>
        <span>
          <img id="teacherPhoto" src="teacher.png" />
        </span>
      </div>
      <div>
        <h1 id="mainTitle" style={{ fontFamily: "Montserrat" }}>
          Eğitmenler
        </h1>
      </div>
      <div>
        <h4 id="subTitle" style={{ fontFamily: "Montserrat" }}>
          KY Kids eğitmenleri İngilizce öğretmeyi seven profesyonel
          eğitmenlerdir. Eğitmenlerimiz her derse tutkularını ve olumlu
          yaklaşımlarını katar, tüm dikkatlerini çocuğunuza verir ve her dersi
          çocuğunuzun ihtiyaçlarına göre şekillendirir.
        </h4>
      </div>
      <div>
        <Button
          id="button"
          variant="contained"
          size="large"
          style={{
            borderRadius: 20,
            padding: 20,
            fontFamily: "Montserrat",
            marginBottom: 108
          }}
        >
          Hemen Kaydol
        </Button>
      </div>
      <div  id="contentTeacher" style={{ backgroundColor: "#d1f9e2", position: "relative", marginBottom: 0, paddingTop: 20, marginTop: 130 }}>
        <div id="teacherContent">
          <h1
            style={{
              marginTop: 70,
              fontWeight: "bold",
              fontFamily: "Montserrat",
            }}
          >
            Eğitmenlerimizden Bazıları
          </h1>
          <h4
            style={{
              marginTop: 40,
              color: "black",
              marginLeft: 300,
              marginRight: 300,
              fontFamily: "Montserrat",
            }}
          >
            Platformumuzdaki eğitmenlerin hepsinin ana dili İngilizcedir ve KY
            Kids ders programlarını öğretmede uzmandırlar. Çoğu İngiltere,
            Amerika, Kanada'daki en iyi üniversitelerden mezun olmuştur. Biz
            sahip olduğumuz eğitmen kalitesini çok seviyoruz, eminiz siz de
            seveceksiniz!
          </h4>
        </div>
        <TeacherCardList />
        <div>
          <h4
            id="subTitle"
            style={{ fontFamily: "Montserrat", marginTop: 20, color: "black" }}
          >
            KY Kids'de hangi zaman kuşağında olursanız olun, günün her saatinde
            ders vermeye hazır yüzlerce eğitmen var.
          </h4>
        </div>

        <div>
          <Button
            id="button"
            variant="contained"
            size="large"
            style={{
              borderRadius: 20,
              padding: 20,
              fontFamily: "Montserrat",
            }}
          >
            Hemen Kaydol
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Teachers