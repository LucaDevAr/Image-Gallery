const images = [
  {
    src: "img/adorable-ilustracion-gatitos-jugando-bosque-generative-ai_260559-483.webp",
    categories: ["All", "Illustration", "Fauna"],
    by: "Juan García",
  },
  {
    src: "img/torre-eiffel-puente-rio-sena-paris-francia_649448-4968.jpg",
    categories: ["All", "City"],
    by: "Mia Patel",
  },
  {
    src: "img/loro-colorido-pico-negro-plumas-amarillas-verdes_1340-28847.jpg",
    categories: ["All", "Fauna"],
    by: "Yuki Tanaka",
  },
  {
    src: "img/cerezos-flor-primavera-pagoda-chureito-montana-fuji-japon_335224-213.jpg",
    categories: ["All", "City", "Flora"],
    by: "Maria Santos",
  },
  {
    src: "img/energia-nuclear-ia-innovacion-futura-tecnologia-disruptiva_53876-129784.webp",
    categories: ["All", "Technology"],
    by: "Ahmed Ali",
  },
  {
    src: "img/tiro-vertical-foret-soignes-belgica-bruselas-sol-brillando-traves-ramas_181624-5081.jpg",
    categories: ["All", "Flora"],
    by: "Sofia Rossi",
  },
  {
    src: "img/vista-aerea-obelisco-buenos-aires-dron_686512-17.webp",
    categories: ["All", "City"],
    by: "Carlos Silva",
  },
  {
    src: "img/hermosa-foto-colinas-cubiertas-hierba-cubiertas-arboles-cerca-montanas-dolomitas-italia_181624-24400.jpg",
    categories: ["All", "Mountain", "Flora"],
    by: "Andrei Ivanov",
  },
  {
    src: "img/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010144.jpg",
    categories: ["All", "Technology"],
    by: "Gabriela Fernandez",
  },
  {
    src: "img/disparo-vertical-dolomitas-rodeado-vegetacion-tirol-sur-italia_181624-59830.jpg",
    categories: ["All", "Mountain"],
    by: "Cheng Wei",
  },
  {
    src: "img/grupo-atletas-diversos-sentados-juntos_53876-146063.jpg",
    categories: ["All", "Sport"],
    by: "Leila Kowalski",
  },
  {
    src: "img/lineas-contorno-topograficas-azules-ilustracion-abstracta-montana-3d_926199-714073.webp",
    categories: ["All", "Mountain", "Illustration"],
    by: "Aisha Khan",
  },
  {
    src: "img/competimos-forma-amistosa-foto-pareja-joven-atractiva-entrenando-maraton-al-aire-libre_590464-6852.webp",
    categories: ["All", "Sport"],
    by: "Lars Jensen",
  },
  {
    src: "img/vector_837074-410.webp",
    categories: ["All", "Illustration", "Fauna"],
    by: "Elena Petrov",
  },
  {
    src: "img/cerca-deliciosa-preparacion-comidas_23-2149059109.jpg",
    categories: ["All", "Food"],
    by: "Jamal Hussein",
  },
  {
    src: "img/girafa-montana-contra-cielo_1048944-164655.jpg",
    categories: ["All", "Fauna", "Mountain"],
    by: "Isabella Ferrari",
  },
  {
    src: "img/fondo-pantalla-telefono-movil-playa-arena-blanca_53876-138183.jpg",
    categories: ["All", "Beach"],
    by: "Ahmed Khan",
  },
  {
    src: "img/globos-aire-caliente-coloridos-sobre-fondo-color-aislado-poster-arte-globo-abstracto_90220-1052.webp",
    categories: ["All", "Illustration"],
    by: "Olga Ivanova",
  },
  {
    src: "img/disparo-vertical-palmeras-playa-arena_181624-49124.jpg",
    categories: ["All", "Beach", "Flora"],
    by: "Miguel Lopez",
  },
  {
    src: "img/disparo-enfoque-selectivo-flores-plumeria_181624-49811.jpg",
    categories: ["All", "Flora"],
    by: "Mei Ling",
  },
  {
    src: "img/fondo-banner-computacion-nube-ciudad-inteligente_53876-108504.webp",
    categories: ["All", "Technology", "Illustration"],
    by: "Alejandro Morales",
  },
  {
    src: "img/mar-playa_1203-3516.webp",
    categories: ["All", "Beach", "Flora"],
    by: "Katerina Papadopoulos",
  },
  {
    src: "img/hamburguesa-carne-vista-frontal-tomate-queso-ensalada-piso-oscuro-sandwich-pan-comida-rapida_140725-89548.webp",
    categories: ["All", "Food"],
    by: "Ahmed Abdel-Malik",
  },
  {
    src: "img/fondo-pantalla-luna-arte-digital_23-2150918873.jpg",
    categories: ["All", "Space", "Illustration"],
    by: "Ingrid Svensson",
  },
  {
    src: "img/astronauta-explora-espacio-exterior-oscuro-generativo-al_169016-28607.webp",
    categories: ["All", "Space", "Illustration"],
    by: "Hiroshi Yamamoto",
  },
  {
    src: "img/hermoso-paisaje-montana-cielo-estrellado_23-2150455783.webp",
    categories: ["All", "Space", "Mountain"],
    by: "Natasha Patel",
  },
  {
    src: "img/silueta-familia-meerkat-bosque-sabana_1308-87298.jpg",
    categories: ["All", "Flora", "Fauna", "Illustration"],
    by: "Rafael Mendoza",
  },
  {
    src: "img/composicion-caramelos-coloridos-vista-superior-diferentes-colores-dulces-deliciosos-caramelos-escritorio-rosa_140725-24940.jpg",
    categories: ["All", "Food"],
    by: "Leila Hassan",
  },
  {
    src: "img/vista-lince-salvaje-naturaleza_23-2150779306.jpg",
    categories: ["All", "Fauna"],
    by: "Lucas Schmidt",
  },
  {
    src: "img/primer-plano-ciclismo-atleta_23-2150845608.webp",
    categories: ["All", "Sport"],
    by: "Camila Costa",
  },
];

const $main = document.querySelector("main");
const $body = document.querySelector("body");
const $selectMenu = document.querySelector(".select-menu");
const $categorie = $selectMenu.querySelector("span");
const $optionsList = document.querySelector(".options");
const $options = document.querySelectorAll(".options li");

document.addEventListener("DOMContentLoaded", () => {
  images.forEach((img) => {
    uploadImages(img);
  });
});

$selectMenu.addEventListener("click", (e) => {
  $optionsList.classList.toggle("show");
  $selectMenu
    .querySelector(".ri-arrow-down-s-line")
    .classList.toggle("ri-arrow-up-s-line");
});

$options.forEach((option) => {
  option.addEventListener("click", () => {
    $options.forEach((e) => {
      e.classList.remove("selected");
    });
    option.classList.add("selected");
    $categorie.innerHTML = option.innerHTML;
    filterByCategories($categorie);
  });
});

function filterByCategories(categorie) {
  $main.innerHTML = "";
  const imagesFiltered = images.filter((image) =>
    image.categories.some((category) => category == categorie.textContent)
  );
  if (imagesFiltered.length == 0) {
    $main.innerHTML = `<h1>Not Found</h1>`;
    $main.classList.add("no-found");
  } else {
    $main.classList.remove("no-found");
    imagesFiltered.forEach((img) => {
      uploadImages(img);
    });
  }
}

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
  const link = document.createElement("a");
  link.setAttribute("href", `${image.src}`);
  link.setAttribute("download", "");
  const downloader = document.createElement("i");
  downloader.classList.add("ri-download-line");
  link.appendChild(downloader);
  creator.appendChild(camera);
  creator.appendChild(name);
  overlay.appendChild(creator);
  overlay.appendChild(link);
  picture.appendChild(img);
  picture.appendChild(overlay);
  $main.appendChild(picture);
  picture.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target !== downloader) openModal(picture);
  });
}

function openModal(modalImg) {
  const $pictureImg = modalImg.querySelector("img");
  const $pictureBy = modalImg.querySelector("span");
  const $modal = document.querySelector(".modal");
  const $img = $modal.querySelector("img");
  const $closeModal = $modal.querySelector(".ri-close-line");
  const $creator = $modal.querySelector(".creator span");
  const $link = $modal.querySelector("a");
  $link.href = $pictureImg.src;
  $img.src = $pictureImg.src;
  $creator.textContent = $pictureBy.textContent;
  $modal.classList.add("open");
  $closeModal.addEventListener("click", () => {
    $modal.classList.remove("open");
  });
}
