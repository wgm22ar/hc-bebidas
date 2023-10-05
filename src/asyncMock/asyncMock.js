const products = [
  {
    nombre: "Coca-Cola Original",
    precio: 850,
    categoria: "gaseosas",
    img: "../imgs/Coca-Cola Originalbeb02.png",
    stock: 60,
    descripcion: "Coca-Cola Sabor Original de 1.5 Lts",
  },
  {
    nombre: "7 Up Zero",
    precio: 830,
    categoria: "gaseosas",
    img: "../imgs/7 Up Zerobeb03.png",
    stock: 24,
    descripcion: "7 Up Zero de 1.5 Lts",
  },
  {
    nombre: "7 Up Original",
    precio: 850,
    categoria: "gaseosas",
    img: "../imgs/7 Up Originalbeb04.png",
    stock: 36,
    descripcion: "7 Up Sabor Original de 1.5 Lts",
  },
  {
    nombre: "Agua Tonica Schweppes",
    precio: 900,
    categoria: "gaseosas",
    img: "../imgs/Agua Tonica Schweppesbeb05.png",
    stock: 24,
    descripcion: "Agua Tonica Schweppes de 1.5 Lts",
  },
  {
    nombre: "Schweppes Pomelo",
    precio: 880,
    categoria: "gaseosas",
    img: "../imgs/Schweppes Pomelobeb06.png",
    stock: 36,
    descripcion: "Schweppes Pomelo de 1.5 Lts",
  },
  {
    nombre: "Cerveza Quilmes",
    precio: 970,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmescerv01.png",
    stock: 60,
    descripcion: "Cerveza Quilmes Original de 970 CC",
  },
  {
    nombre: "Cerveza Quilmes 1890",
    precio: 990,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmes 1890cerv02.png",
    stock: 60,
    descripcion: "Cerveza Quilmes 1890 de 970 CC",
  },
  {
    nombre: "Cerveza Quilmes Bock",
    precio: 990,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmes Bockcerv03.png",
    stock: 60,
    descripcion: "Cerveza Quilmes Bock de 970 CC",
  },
  {
    nombre: "Cerveza Heineken",
    precio: 1100,
    categoria: "cervezas",
    img: "../imgs/Cerveza Heinekencerv04.png",
    stock: 24,
    descripcion: "Cerveza Heineken de 970 cc",
  },
  {
    nombre: "Cerveza Stella",
    precio: 1150,
    categoria: "cervezas",
    img: "../imgs/Cerveza Stellacerv05.png",
    stock: 60,
    descripcion: "Cerveza Stella Artoise",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 600);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 600);
  });
};

export const getProductsByCategoria = (categoriaId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.categoria === categoriaId));
    }, 600);
  });
};
export const productos = products;
