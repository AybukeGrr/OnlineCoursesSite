import React from "react";
import Container from "react-bootstrap/esm/Container";
import TeacherCard from "./TeacherCard";


function TeacherCardList() {
  const teacherCardLists = [
    {
      avatar: "amy.png",
      name: "Amy",
      city: "ABD",
      content:
        " ABD'nin New York şehrinde, Brooklyn semtinde doğdum. Genel ve özel eğitim alanında, iki lisans diplomasına sahibim. TOEFL sertifikamın yanı sıra toplamda 15 yıllık ders verme deneyimim var. Öğrenmek ve öğretmek benim için bir tutku. Boş zamanlarımda eğitici geziler, okuma etkinlikleri ve çocuklara yönelik eğlenceli bir yaz kampı için program geliştiriyorum. Çocukların kampta okuma düzeylerini nasıl ilerlettiklerini ve geliştirdiklerini görmek beni çok mutlu ediyor, çünkü bu onların daha sonra okulda başarılı olmalarına yardımcı olacak. Çocuğunuzun İngilizce konuşma konusunda başarılı olması için ailenizle birlikte çalışmak için sabırsızlanıyorum!",
    },
    {
      avatar: "robert.png",
      name: "Robert",
      city: "Kanada",
      content:
        "Merhaba KY Kids öğrencileri! Amerika, İspanya, İtalya'da ve online eğitimde 5 yıllık ders verme deneyimi olan bir ilkokul öğretmeniyim. Furman Üniversitesi'nde İşletme ve İspanyolca eğitimi aldıktan sonra iki yıl boyunca 5. sınıf öğrencilerine matematik dersi verdim. Daha sonra İspanyolca öğrenmeye devam etmek ve 5-12 yaş grubundaki öğrencilere İngilizce öğretmek için İspanya'ya taşındım. Çok sabırlı bir öğretmenim ve öğrencilerimle yemek, spor, müzik gibi çeşitli konularda sohbet etmeye bayılırım. Ders verme dışındaki zamanımda seyahat etmeyi, spor izlemeyi ve yapmayı ve yemek yemeyi severim. İngilizcenin yanında akıcı bir şekilde İspanyolca konuşuyorum ve yavaş yavaş İtalyancamı geliştiriyorum.",
    },
    {
      avatar: "isabella.png",
      name: "Isabella",
      city: "ABD",
      content: "ABD'nin Florida eyaletinden, Kore kökenli Amerikalı bir İngilizce öğretmeniyim. Güney Kaliforniya Üniversitesi'nde yüksek lisans yaptım ve üç farklı TESOL sertifikasına (Çocuk, İş, İleri Düzey) sahibim. Okuldayken Fransızca, Japonca ve Korece öğrendim. Bir öğretmen olarak, çocukların dili hızlı ve etkili bir şekilde öğrenebilmesi için daima onların kültürlerini ve kişisel ilgi alanlarını öğrenmeye çalışırım ve öğrencilerimi kahkaha atarken ve gülerken görmeyi severim! Boş zamanlarımda sanat ve el becerileri ile uğraşmayı, Disney filmleri izlemeyi ve kitap okumayı seviyorum. Geçmişte İngilizce konuşma ve çalışma kitapları yazmıştım. Şu anki hedefim bir çocuk kitabı yazmaktır."
    },
  ];

  return (
    <Container className="card-list">
      {teacherCardLists.map((teacherCardList) => (
        <TeacherCard
          avatar={teacherCardList.avatar}
          name={teacherCardList.name}
          city={teacherCardList.city}
          content={teacherCardList.content}
        />
      ))}
    </Container>
  );
}

export default TeacherCardList;
