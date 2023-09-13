const products = [
  {
    nombre: "Coca-Cola Zero",
    id: "beb01",
    precio: 870,
    categoria: "gaseosas",
    img: "../imgs/Coca-Cola Zerobeb01.png",
    stock: 48,
    descripcion: "Coca-Cola Zero de 1.5 Lts",
  },
  {
    nombre: "Coca-Cola Original",
    id: "beb02",
    precio: 850,
    categoria: "gaseosas",
    img: "../imgs/Coca-Cola Originalbeb02.png",
    stock: 60,
    descripcion: "Coca-Cola Sabor Original de 1.5 Lts",
  },
  {
    nombre: "7 Up Zero",
    id: "beb03",
    precio: 830,
    categoria: "gaseosas",
    img: "../imgs/7 Up Zerobeb03.png",
    stock: 24,
    descripcion: "7 Up Zero de 1.5 Lts",
  },
  {
    nombre: "7 Up Original",
    id: "beb04",
    precio: 850,
    categoria: "gaseosas",
    img: "../imgs/7 Up Originalbeb04.png",
    stock: 36,
    descripcion: "7 Up Sabor Original de 1.5 Lts",
  },
  {
    nombre: "Agua Tonica Schweppes",
    id: "beb05",
    precio: 900,
    categoria: "gaseosas",
    img: "../imgs/Agua Tonica Schweppesbeb05.png",
    stock: 24,
    descripcion: "Agua Tonica Schweppes de 1.5 Lts",
  },
  {
    nombre: "Schweppes Pomelo",
    id: "beb06",
    precio: 880,
    categoria: "gaseosas",
    img: "../imgs/Schweppes Pomelobeb06.png",
    stock: 36,
    descripcion: "Schweppes Pomelo de 1.5 Lts",
  },
  {
    nombre: "Cerveza Quilmes",
    id: "cerv01",
    precio: 970,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmescerv01.png",
    stock: 60,
    descripcion: "Cerveza Quilmes Original de 970 CC",
  },
  {
    nombre: "Cerveza Quilmes 1890",
    id: "cerv02",
    precio: 990,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmes 1890cerv02.png",
    stock: 60,
    descripcion: "Cerveza Quilmes 1890 de 970 CC",
  },
  {
    nombre: "Cerveza Quilmes Bock",
    id: "cerv03",
    precio: 990,
    categoria: "cervezas",
    img: "../imgs/Cerveza Quilmes Bockcerv03.png",
    stock: 60,
    descripcion: "Cerveza Quilmes Bock de 970 CC",
  },
  {
    nombre: "Cerveza Heineken",
    id: "cerv04",
    precio: 1100,
    categoria: "cervezas",
    img: "../imgs/Cerveza Heinekencerv04.png",
    stock: 24,
    descripcion: "Cerveza Heineken de 970 cc",
  },
  {
    nombre: "Cerveza Stella",
    id: "cerv05",
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
