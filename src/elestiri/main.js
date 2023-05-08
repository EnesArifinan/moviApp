const filmiBul = document.querySelector("#filmiBul");
const gonder = document.querySelector("#gonder");
const filmAdi = document.querySelector("#ad");
const konuBasligi = document.querySelector("#konuBasligi");
const yazarAdi = document.querySelector("#yazarinAdi");
const textWrite = document.querySelector("#textWrite");

filmiBul.addEventListener("click", () => {
  const filminAdiBul = document.querySelector("#filmAd");
  const filmturu = document.querySelector("#filmTuru");
  const imdb = document.querySelector("#imdb");
  const yonetmen = document.querySelector("#yonetmen");
  const filmAdiDegeri = filmAdi.value;

  filminAdiBul.innerHTML = `Filmin adi: ${filmAdiDegeri}`;
  filmturu.innerHTML = `bulunamadi`;
  imdb.innerHTML = `bulunamadi`;
  yonetmen.innerHTML = `bulunamadi`;
});

// filmiBul.addEventListener("click", () => {
//   window.location.href = "../notfound.html";
// });

gonder.addEventListener("click", () => {
  const filmAdiDegeri = filmAdi.value;
  const konuBas = konuBasligi.value;
  const yazar = yazarAdi.value;
  const metin = textWrite.value;

  if (
    (metin.length > 1) &
    (filmAdiDegeri.length > 1) &
    (konuBas.length > 1) &
    (yazar.length > 1)
  ) {
    alert(`Sevgili ${yazar},
        ${filmAdiDegeri} filmi icin ${konuBas} konusu hakkinda yapmis 
        oldugunuz "${metin}" yorumunuz kontrol edilmek uzere 
         moderratorlerimize yollanmistir.
         yorumunuz icin tessekurler.`);
  } else {
    alert(
      "Lutfen gonder tusuna basmadan once, Elestirilecek fil adi, konu basligi, adinizi ve film elestirisini yazmayi unutmayin."
    );
  }

  //   window.location.href = "../notfound.html";
});
