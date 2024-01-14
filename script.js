document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    "City",
    "Mountain",
    "Beach",
    "Space",
    "Flora",
    "Fauna",
    "Food",
    "Technology",
    "Sport",
    "Illustration",
  ];
  const images = [
    {
      src: "https://img.freepik.com/foto-gratis/torre-eiffel-puente-rio-sena-paris-francia_649448-4968.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["City"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/cerezos-flor-primavera-pagoda-chureito-montana-fuji-japon_335224-213.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["City"],
    },
    {
      src: "https://img.freepik.com/fotos-premium/vista-aerea-obelisco-buenos-aires-dron_686512-17.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=ais",
      categories: ["City"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Mountain"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/disparo-vertical-dolomitas-rodeado-vegetacion-tirol-sur-italia_181624-59830.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Mountain"],
    },
    {
      src: "https://img.freepik.com/fotos-premium/lineas-contorno-topograficas-azules-ilustracion-abstracta-montana-3d_926199-714073.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Mountain", "Illustration"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Beach"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/disparo-vertical-palmeras-playa-arena_181624-49124.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Beach"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/mar-playa_1203-3516.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Beach"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/fondo-pantalla-luna-arte-digital_23-2150918873.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Space"],
    },
    {
      src: "https://img.freepik.com/fotos-premium/resumen-espacio-ultraterrestre-fin-nebulosa-galaxia-fondo-generativo-ai_438099-10924.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=sph",
      categories: ["Space", "Illustration"],
    },
    {
      src: "https://img.freepik.com/foto-gratis/hermoso-paisaje-montana-cielo-estrellado_23-2150455789.jpg?size=626&ext=jpg&ga=GA1.1.1730123005.1699373396&semt=ais",
      categories: ["Space", "Mountain"],
    },
  ];
  const $main = document.querySelector("main");
  images.forEach((img) => {
    createPicture(img.src);
  });
  function createPicture(image) {
    const picture = document.createElement("picture");
    const img = document.createElement("img");
    img.src = image;
    picture.appendChild(img);
    $main.appendChild(picture);
  }
});
