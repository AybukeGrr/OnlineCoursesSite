import React from 'react'
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/esm/Container';
import Row from "react-bootstrap/Row";

function TranslateContent() {
  return (
    <Container style={{ marginTop: 710 }}>
      <Row xs={4} md={2} className="g-4">
        <Col>
          <Card
            style={{
              width: 900,
              height: 377,
              marginLeft: 45,
              marginTop: 25,
              backgroundColor: "#24466b",
              color: "white",
              fontFamily: "Monserrat",
            }}
          >
            <h1
              style={{
                marginTop: 50,
                textAlign: "initial",
                marginLeft: 23,
                fontFamily: "Monserrat",
              }}
            >
              Çeviri Ekibi
            </h1>
            <p
              style={{
                marginTop: 25,
                textAlign: "justify",
                marginLeft: 25,
                marginRight: 199,
                fontFamily: "Monserrat",
                fontSize: 17,
              }}
            >
              Kutup Yıldızı Akademi'de çeviri hizmeti sadece alanında uzman
              akademisyenler tarafından verilmektedir. Uzman ekibimiz tüm
              çevirileri dikkatle yapmakta ve vermek istediğiniz mesajı hedef
              dile akıcı ve anlaşılır bir biçimde aktarmaktadır. Çeviri
              kadromuzun tamamı hem İngilizce-Türkçe dil kurallarına hem de
              akademik dil ve terminolojiye hâkim akademisyenlerden
              oluşmaktadır.
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 350,
              left: 222,
              top: 100,
              backgroundColor: "white",
            }}
          >
            <img
              style={{
                borderRadius: 20,
                transform: "rotate(-13deg)",
                width: 350,
              }}
              src="translateGroup.png"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 900,
              height: 377,
              marginLeft: 45,
              marginTop: 25,
              backgroundColor: "#865f51",
              color: "white",
              fontFamily: "Monserrat",
            }}
          >
            <h1
              style={{
                marginTop: 50,
                textAlign: "initial",
                marginLeft: 204,
                marginRight: 22,
                fontFamily: "Monserrat",
              }}
            >
              Çeviri Süreci
            </h1>
            <p
              style={{
                marginTop: 25,
                textAlign: "justify",
                marginLeft: 204,
                marginRight: 22,
                fontFamily: "Monserrat",
                fontSize: 17,
              }}
            >
              Çeviri hizmeti almak için öncelikle aşağıdaki Çeviri Hizmeti
              Formu’nu doldurmanız gerekmektedir. Bu form doldurulduktan sonra
              uzman çeviri ekibimiz sizinle iletişime geçerek teslim tarihi ile
              net çeviri hizmeti ücretini tarafınıza bildirilir. Çeviri
              ücretinin ödenmesi ile ekibimiz çeviri işlemlerine başlar ve
              herhangi bir hata olmaması için süreç içerisinde sizinle
              iletişimde olur. Çevirilerinizin teslimatı sırasında, teknik
              terimlerin çevirisi, kısaltmaların kullanımı, anlam kaymalarının
              önlenmesi gibi önemli konularda bilgilendirme yapılmaktadır.
            </p>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: 350, right: 693, top: 100, color: "white" }}>
            <img
              style={{ borderRadius: 20, transform: "rotate(13deg)" }}
              src="calendar.png"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 900,
              height: 377,
              marginLeft: 45,
              marginTop: 25,
              backgroundColor: "#e5b3b7",
              color: "white",
              fontFamily: "Monserrat",
            }}
          >
            <h1
              style={{
                marginTop: 50,
                textAlign: "initial",
                marginLeft: 23,
                fontFamily: "Monserrat",
              }}
            >
              Ücretlendirme
            </h1>
            <p
              style={{
                marginTop: 25,
                textAlign: "justify",
                marginLeft: 25,
                marginRight: 199,
                fontFamily: "Monserrat",
                fontSize: 17,
              }}
            >
              Çeviri hizmetlerimizde taban fiyat 250 TL’dir. Kimlik, diploma,
              transkript, özet gibi 300 kelime altı dokümanlarda bu ücret esas
              alınır. 300 – 2000 kelime sayısı olan çevirilerde her 1 kelime
              için çeviri ücreti 0,50 kuruştur. 2000 kelime ve üzeri
              çalışmalarda ise çeviri ücreti 1 kelime için 0,40 kuruştur. Bu
              hizmet bedeli standart anlatımlı eserler için geçerli olup,
              retorik, şiirsel anlatım ve ileri teknik terminoloji barındıran
              eserler için fiyat değişebilmektedir.
            </p>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 350,
              left: 222,
              top: 100,
              backgroundColor: "white",
            }}
          >
            <img
              style={{
                borderRadius: 20,
                transform: "rotate(-13deg)",
                width: 350,
              }}
              src="price.png"
            />
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              width: 900,
              height: 377,
              marginLeft: 45,
              marginTop: 25,
              backgroundColor: "#4c6c74",
              color: "white",
              fontFamily: "Monserrat",
              marginBottom: "-145px"
            }}
          >
            <h1
              style={{
                marginTop: 50,
                textAlign: "initial",
                marginLeft: 204,
                marginRight: 22,
                fontFamily: "Monserrat",
              }}
            >
              Belgelendirme
            </h1>
            <p
              style={{
                marginTop: 25,
                textAlign: "justify",
                marginLeft: 204,
                marginRight: 22,
                fontFamily: "Monserrat",
                fontSize: 17,
              }}
            >
              Talebiniz doğrultusunda eserlerinizin profesyonel çeviri ekibi
              tarafından çevrildiğine dair resmi belge ücretsiz olarak temin
              edilir.
            </p>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: 350, right: 693, top: 100, color: "white" }}>
            <img
              style={{ borderRadius: 20, transform: "rotate(13deg)" }}
              src="documents.png"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default TranslateContent