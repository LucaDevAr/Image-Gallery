const images = [
  {
    src: "https://img.freepik.com/foto-gratis/torre-eiffel-puente-rio-sena-paris-francia_649448-4968.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["City"],
    by: "Chris Pawton",
  },
  {
    src: "https://img.freepik.com/foto-gratis/cerezos-flor-primavera-pagoda-chureito-montana-fuji-japon_335224-213.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["City"],
    by: "Toyotaro Bachira",
  },
  {
    src: "https://img.freepik.com/fotos-premium/vista-aerea-obelisco-buenos-aires-dron_686512-17.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=ais",
    categories: ["City"],
    by: "Tomas Martinez",
  },
  {
    src: "https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Mountain"],
    by: "Joshep Mcnain",
  },
  {
    src: "https://img.freepik.com/foto-gratis/disparo-vertical-dolomitas-rodeado-vegetacion-tirol-sur-italia_181624-59830.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Mountain"],
    by: "Carlito Borges",
  },
  {
    src: "https://img.freepik.com/fotos-premium/lineas-contorno-topograficas-azules-ilustracion-abstracta-montana-3d_926199-714073.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Mountain", "Illustration"],
    by: "Eliana Monserrat",
  },
  {
    src: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Beach"],
    by: "Nico Robin",
  },
  {
    src: "https://img.freepik.com/foto-gratis/disparo-vertical-palmeras-playa-arena_181624-49124.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Beach"],
    by: "Michelle Maxwell",
  },
  {
    src: "https://img.freepik.com/foto-gratis/mar-playa_1203-3516.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Beach"],
    by: "David Salomon",
  },
  {
    src: "https://img.freepik.com/foto-gratis/fondo-pantalla-luna-arte-digital_23-2150918873.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Space"],
    by: "Felipe Mitre",
  },
  {
    src: "https://img.freepik.com/fotos-premium/resumen-espacio-ultraterrestre-fin-nebulosa-galaxia-fondo-generativo-ai_438099-10924.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
    categories: ["Space", "Illustration"],
    by: "Ashrabat Kristv",
  },
  {
    src: "https://img.freepik.com/foto-gratis/hermoso-paisaje-montana-cielo-estrellado_23-2150455789.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=ais",
    categories: ["Space", "Mountain"],
    by: "Akira Young",
  },
];
const $main = document.querySelector("main");
const $body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
  images.forEach((img) => {
    uploadImages(img);
  });
});

function uploadImages(image) {
  const picture = document.createElement("picture");
  const img = document.createElement("img");
  img.src = image.src;
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  const creator = document.createElement("div");
  creator.classList.add("creator");
  const camera = document.createElement("i");
  const name = document.createElement("span");
  name.textContent = image.by;
  camera.classList.add("ri-camera-fill");
  const download = document.createElement("i");
  download.classList.add("ri-download-line");
  creator.appendChild(camera);
  creator.appendChild(name);
  overlay.appendChild(creator);
  overlay.appendChild(download);
  picture.appendChild(img);
  picture.appendChild(overlay);
  $main.appendChild(picture);
}
