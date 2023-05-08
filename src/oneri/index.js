addEventListener("DOMContentLoaded", () => {
  const filmOner = document.querySelector("button");
  const burayaYaz = document.querySelector("#öneri");

  filmOner.addEventListener("click", () => {
    const oneriIste = burayaYaz.value;
    if (oneriIste.length > 1) {
      alert("Malesef bu tarz bir icerik bulunamadi");
    } else {
      alert("Lutfen izlemek istediginiz film hakkinda metin giriniz.");
    }
    // window.location.href = "../notfound.html";
  });
});
