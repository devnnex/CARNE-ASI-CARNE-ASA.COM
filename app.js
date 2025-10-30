// app.js — lógica completa para One Lounge (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573006116680'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
 //HAMBURGUESAS
  {
    id: 'burg1',
    category: 'Burgers',
    title: 'Clásica',
    price: 25000,
    desc: 'Hamburguesa tradicional con carne de res al carbón, verduras frescas, jamón y queso mozzarella en pan brioche.',
    image: 'images/burger-clasica.png',
    ingredients: [
      'Pan brioche',
      'Carne de res 100% al carbón',
      'Verduras frescas',
      'Queso mozzarella',
      'Jamón'
    ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg2',
    category: 'Burgers',
    title: 'Wayu',
    price: 25000,
    desc: 'Hamburguesa con carne de res, chorizo, huevo frito y verduras frescas, servida en pan brioche con queso cheddar y jamón.',
    image: 'images/burger-wayu.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Chorizo de cerdo',
      'Arepita de queso',
      'Huevo frito',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg3',
    category: 'Burgers',
    title: 'Milagrosa',
    price: 25000,
    desc: 'Hamburguesa con carne de res, pollo desmechado, maíz tierno y rosquete de queso, servida en pan brioche.',
    image: 'images/burger-milagrosa.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Rosquete de queso',
      'Pollo desmechado',
      'Maíz tierno'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg4',
    category: 'Burgers',
    title: 'Thomasesky',
    price: 25000,
    desc: 'Hamburguesa con carne de res, jamón, queso cheddar y topping de maduro con queso frito en pan brioche.',
    image: 'images/burger-thomasesky.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Topping de maduro',
      'Queso frito'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg5',
    category: 'Burgers',
    title: 'Ranchería',
    price: 28000,
    desc: 'Hamburguesa de res con tocineta, queso costeño, pico e’ gallo criollo y arepa en pan brioche.',
    image: 'images/burger-rancheria.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Tocineta',
      'Queso costeño',
      'Pico e’ gallo criollo',
      'Arepa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg6',
    category: 'Burgers',
    title: 'Monalisa',
    price: 28000,
    desc: 'Hamburguesa de res con tocineta, queso costeño, lomo de cerdo y rodaja de piña en pan brioche.',
    image: 'images/burger-monalisa.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Tocineta',
      'Queso costeño',
      'Arepa de queso',
      'Rodaja de piña',
      'Lomo de cerdo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg7',
    category: 'Burgers',
    title: 'Jorgy',
    price: 28000,
    desc: 'Tipo americana con carne rellena de queso cheddar, jamón, tocineta, huevo y verduras al gusto.',
    image: 'images/burger-jorgy.png',
    ingredients: [
      'Pan brioche',
      'Carne de res rellena de queso cheddar',
      'Jamón',
      'Tocineta',
      'Huevo',
      'Verduras frescas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg8',
    category: 'Burgers',
    title: 'Carne Así',
    price: 28000,
    desc: 'Hamburguesa con carne de res, tocineta, chorizo y topping de bollo limpio en pan brioche.',
    image: 'images/burger-carne-asi.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Tocineta',
      'Topping de bollo limpio',
      'Rodajas de morro',
      'Chorizo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg9',
    category: 'Burgers',
    title: 'Sr. Barriga',
    price: 28000,
    desc: 'Hamburguesa con sobrebarriga desmechada, arepa de queso, tocineta ahumada y queso mozzarella.',
    image: 'images/burger-sr-barriga.png',
    ingredients: [
      'Pan brioche',
      'Sobrebarriga desmechada',
      'Arepa de queso',
      'Picadillo de cebolla y tomate sofrito',
      'Queso mozzarella',
      'Tocineta ahumada'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg10',
    category: 'Burgers',
    title: 'La Mix',
    price: 30000,
    desc: 'Hamburguesa de carne y pechuga con jamón, tocineta, verduras y queso cheddar en pan brioche.',
    image: 'images/burger-la-mix.png',
    ingredients: [
      'Pan brioche',
      'Carne de res',
      'Pechuga de pollo',
      'Verduras frescas',
      'Queso cheddar',
      'Jamón',
      'Tocineta'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg11',
    category: 'Burgers',
    title: 'La Carnívora',
    price: 30000,
    desc: 'Hamburguesa doble carne con chorizo, jamón, tocineta y queso mozzarella.',
    image: 'images/burger-la-carnivora.png',
    ingredients: [
      'Pan brioche',
      'Doble carne de res',
      'Chorizo',
      'Verduras frescas',
      'Queso mozzarella',
      'Jamón',
      'Tocineta'
    ],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg12',
    category: 'Burgers',
    title: 'La Pecadora',
    price: 35000,
    desc: 'Hamburguesa artesanal con carne de res, tocineta, queso doble crema, queso costeño y toque dulce de arequipe.',
    image: 'images/burger-la-pecadora.png',
    ingredients: [
      'Pan artesanal',
      'Carne de res',
      'Queso doble crema',
      'Arequipe',
      'Tocineta',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'burg13',
    category: 'Burgers',
    title: 'La Miel y Fuego',
    price: 35000,
    desc: 'Hamburguesa con carne de res, queso costeño frito y miel, con tocineta crispy en pan artesanal.',
    image: 'images/burger-miel-fuego.png',
    ingredients: [
      'Pan artesanal',
      'Carne de res',
      'Queso costeño frito',
      'Miel',
      'Tocineta crispy'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
//HOT DOGS
  {
    id: 'dog1',
    category: 'HotDogs',
    title: 'Sencillo',
    price: 17000,
    desc: 'Pan artesanal, salchicha americana, queso rallado, salsas y papita ripio.',
    image: 'images/hotdog-sencillo.png',
    ingredients: [
      'Pan artesanal',
      'Salchicha americana',
      'Queso rallado',
      'Salsas',
      'Papita ripio'
    ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'dog2',
    category: 'HotDogs',
    title: 'Lokillo',
    price: 25000,
    desc: 'Pan artesanal con salchicha americana, queso fundido, salsas, papita ripio, daditos de carne y daditos de pollo.',
    image: 'images/hotdog-lokillo.png',
    ingredients: [
      'Pan artesanal',
      'Salchicha americana',
      'Queso fundido',
      'Salsas',
      'Papita ripio',
      'Daditos de carne',
      'Daditos de pollo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'dog3',
    category: 'HotDogs',
    title: 'Solo Carnitas',
    price: 22000,
    desc: 'Pan artesanal con salchicha americana, tocineta, queso fundido, salsas, papita ripio y daditos de carne.',
    image: 'images/hotdog-solo-carnitas.png',
    ingredients: [
      'Pan artesanal',
      'Salchicha americana',
      'Tocineta',
      'Queso fundido',
      'Salsas',
      'Papita ripio',
      'Daditos de carne'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'dog4',
    category: 'HotDogs',
    title: 'Solo Pollo',
    price: 22000,
    desc: 'Pan artesanal con salchicha americana, tocineta, queso fundido, salsas, papita ripio y daditos de pollo.',
    image: 'images/hotdog-solo-pollo.png',
    ingredients: [
      'Pan artesanal',
      'Salchicha americana',
      'Tocineta',
      'Queso fundido',
      'Salsas',
      'Papita ripio',
      'Daditos de pollo'
    ],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'dog5',
    category: 'HotDogs',
    title: 'De la Casa',
    price: 20000,
    desc: 'Pan artesanal con salchicha americana, queso fundido, salsas, papita ripio y tocineta.',
    image: 'images/hotdog-de-la-casa.png',
    ingredients: [
      'Pan artesanal',
      'Salchicha americana',
      'Queso fundido',
      'Salsas',
      'Papita ripio',
      'Tocineta'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'dog6',
    category: 'HotDogs',
    title: 'Choriperro',
    price: 25000,
    desc: 'Pan artesanal con chorizo criollo, queso rallado, salsas, papita ripio y lechuga.',
    image: 'images/hotdog-choriperro.png',
    ingredients: [
      'Pan artesanal',
      'Chorizo criollo',
      'Queso rallado',
      'Salsas',
      'Papita ripio',
      'Lechuga'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //DESGRANADOS
  {
    id: 'desg1',
    category: 'Desgranados',
    title: 'Desgranado Especial',
    price: 30000,
    desc: 'Queso rallado, salsas, papita ripio, daditos de carne, daditos de pollo, tocineta y piña.',
    image: 'images/desgranado-especial.png',
    ingredients: [
      'Queso rallado',
      'Salsas',
      'Papita ripio',
      'Daditos de carne',
      'Daditos de pollo',
      'Tocineta',
      'Piña'
    ],
 extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'desg2',
    category: 'Desgranados',
    title: 'Desgranado Daditos de Pollo',
    price: 26000,
    desc: 'Queso rallado, salsas, papita ripio, daditos de pollo, tocineta y piña.',
    image: 'images/desgranado-pollo.png',
    ingredients: [
      'Queso rallado',
      'Salsas',
      'Papita ripio',
      'Daditos de pollo',
      'Tocineta',
      'Piña'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'desg3',
    category: 'Desgranados',
    title: 'Desgranado Daditos de Carne',
    price: 26000,
    desc: 'Queso rallado, salsas, papita ripio, daditos de carne, tocineta y piña.',
    image: 'images/desgranado-carne.png',
    ingredients: [
      'Queso rallado',
      'Salsas',
      'Papita ripio',
      'Daditos de carne',
      'Tocineta',
      'Piña'
    ],
 extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'desg4',
    category: 'Desgranados',
    title: 'Chicharrón',
    price: 20000,
    desc: 'Yuca al vapor, queso frito y bollo limpio.',
    image: 'images/desgranado-chicharron.png',
    ingredients: [
      'Yuca al vapor',
      'Queso frito',
      'Bollo limpio'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'desg5',
    category: 'Desgranados',
    title: 'Ceviche de Chicharrón',
    price: 25000,
    desc: 'Queso en cubos, cebolla, cilantro, limón, pimienta, salsa a base de suero y picante, y mango.',
    image: 'images/ceviche-chicharron.png',
    ingredients: [
      'Queso en cubos',
      'Cebolla',
      'Cilantro',
      'Limón',
      'Pimienta',
      'Salsa de suero con picante',
      'Mango'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  //CARNITAS
  {
    id: 'car1',
    category: 'Carnitas',
    title: 'Punta de Anca + Papitas',
    price: 40000,
    desc: 'Delicioso corte de punta de anca al carbón acompañado con papitas criollas y salsas.',
    image: 'images/punta-de-anca.png',
    ingredients: [
      'Punta de anca',
      'Papas criollas',
      'Salsas',
      'Acompañamiento al gusto'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car2',
    category: 'Carnitas',
    title: 'Carne Asada Grande + Yuca al Vapor',
    price: 35000,
    desc: 'Carne asada al carbón en corte grande con yuca al vapor y suero criollo.',
    image: 'images/carne-asada-grande-yuca.png',
    ingredients: [
      'Carne asada',
      'Yuca al vapor',
      'Suero criollo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car3',
    category: 'Carnitas',
    title: 'Carne Asada Grande + Francesa',
    price: 38000,
    desc: 'Carne asada grande al carbón con papas a la francesa y salsas.',
    image: 'images/carne-asada-grande-francesa.png',
    ingredients: [
      'Carne asada',
      'Papas a la francesa',
      'Salsas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car4',
    category: 'Carnitas',
    title: 'Carne Asada Mediana + Yuca al Vapor',
    price: 30000,
    desc: 'Carne asada término medio con yuca al vapor y suero tradicional.',
    image: 'images/carne-asada-mediana-yuca.png',
    ingredients: [
      'Carne asada',
      'Yuca al vapor',
      'Suero criollo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car5',
    category: 'Carnitas',
    title: 'Carne Asada Mediana + Francesa',
    price: 33000,
    desc: 'Porción mediana de carne asada al carbón con papas a la francesa.',
    image: 'images/carne-asada-mediana-francesa.png',
    ingredients: [
      'Carne asada',
      'Papas a la francesa',
      'Salsas'
    ],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car6',
    category: 'Carnitas',
    title: 'Bistec a Caballo + Yuca al Vapor',
    price: 37000,
    desc: 'Tierno y delicioso corte de carne de res con sofrito de cebolla y tomate, huevo y yuca al vapor.',
    image: 'images/bistec-caballo-yuca.png',
    ingredients: [
      'Carne de res',
      'Huevo frito',
      'Sofrito de cebolla y tomate',
      'Yuca al vapor'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car7',
    category: 'Carnitas',
    title: 'Bistec a Caballo + Francesa',
    price: 40000,
    desc: 'Corte jugoso de carne de res con sofrito criollo, huevo frito y papas a la francesa.',
    image: 'images/bistec-caballo-francesa.png',
    ingredients: [
      'Carne de res',
      'Huevo frito',
      'Sofrito criollo',
      'Papas a la francesa'
    ],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car8',
    category: 'Carnitas',
    title: 'Carne Semi Oreada + Yuca al Vapor',
    price: 33000,
    desc: 'Corte especial de carne semi oreada con yuca al vapor y salsas.',
    image: 'images/carne-oreada-yuca.png',
    ingredients: [
      'Carne semi oreada',
      'Yuca al vapor',
      'Salsas criollas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car9',
    category: 'Carnitas',
    title: 'Carne Semi Oreada + Francesa',
    price: 36000,
    desc: 'Carne semi oreada con papas a la francesa y acompañamiento criollo.',
    image: 'images/carne-oreada-francesa.png',
    ingredients: [
      'Carne semi oreada',
      'Papas a la francesa',
      'Salsas criollas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car10',
    category: 'Carnitas',
    title: 'Morro de Novillo + Yuca al Vapor',
    price: 30000,
    desc: 'Deliciosa carne en tiras, dulcesita y jugosita, acompañada de yuca al vapor.',
    image: 'images/morro-novillo-yuca.png',
    ingredients: [
      'Morro de novillo',
      'Yuca al vapor',
      'Salsas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'car11',
    category: 'Carnitas',
    title: 'Morro de Novillo + Francesa',
    price: 33000,
    desc: 'Tiras de morro de novillo jugosas con papas a la francesa y salsas criollas.',
    image: 'images/morro-novillo-francesa.png',
    ingredients: [
      'Morro de novillo',
      'Papas a la francesa',
      'Salsas criollas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
//POLLITOS
{
    id: 'pol1',
    category: 'Pollitos',
    title: 'Pechuga Asada + Yuca al Vapor',
    price: 33000,
    desc: 'Deliciosa pechuga de pollo asada al carbón acompañada de yuca al vapor y suero criollo.',
    image: 'images/pechuga-asada-yuca.png',
    ingredients: [
      'Pechuga asada',
      'Yuca al vapor',
      'Suero criollo'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pol2',
    category: 'Pollitos',
    title: 'Pechuga Asada + Papa a la Francesa',
    price: 36000,
    desc: 'Pechuga asada al carbón servida con papas a la francesa y salsas de la casa.',
    image: 'images/pechuga-asada-francesa.png',
    ingredients: [
      'Pechuga asada',
      'Papas a la francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pol3',
    category: 'Pollitos',
    title: 'Pechuga Santo Domingo + Papitas',
    price: 40000,
    desc: 'Pechuga asada con trozos de piña calada, jamón, queso gratinado y papas a la francesa.',
    image: 'images/pechuga-santo-domingo.png',
    ingredients: [
      'Pechuga asada',
      'Piña calada',
      'Jamón',
      'Queso gratinado',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pol4',
    category: 'Pollitos',
    title: 'Muslitos x8 + Papa a la Francesa',
    price: 30000,
    desc: 'Jugosos muslitos de pollo bañados en salsa dulce, BBQ o de la casa, acompañados de papas a la francesa.',
    image: 'images/muslitos-pollo.png',
    ingredients: [
      'Muslitos de pollo',
      'Salsa BBQ o dulce o de la casa',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pol5',
    category: 'Pollitos',
    title: 'Pechuga Cremosa + Papa a la Francesa',
    price: 40000,
    desc: 'Pechuga asada con verduras salteadas al wok en salsa cremosa, acompañada de papas a la francesa.',
    image: 'images/pechuga-cremosa.png',
    ingredients: [
      'Pechuga asada',
      'Verduras salteadas al wok',
      'Salsa cremosa',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pol6',
    category: 'Pollitos',
    title: 'Pechuga Especial + Papa a la Francesa',
    price: 40000,
    desc: 'Pechuga asada con maíz, jamón y queso fundido, acompañada de papas a la francesa.',
    image: 'images/pechuga-especial.png',
    ingredients: [
      'Pechuga asada',
      'Maíz',
      'Jamón',
      'Queso fundido',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //CORTES
  {
    id: 'cor1',
    category: 'Cortes',
    title: 'Costillas de Cerdo + Papitas a la Francesa',
    price: 35000,
    desc: 'Costillas de cerdo bañadas en salsa dulce, de la casa o BBQ, acompañadas de papas a la francesa.',
    image: 'images/costillas-cerdo.png',
    ingredients: [
      'Costillas de cerdo',
      'Salsa dulce, de la casa o BBQ',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'cor2',
    category: 'Cortes',
    title: 'Chuletón de Cerdo + Yuca al Vapor',
    price: 37000,
    desc: 'Chuletón de cerdo jugoso a la plancha acompañado de yuca al vapor y salsas de la casa.',
    image: 'images/chuleton-cerdo.png',
    ingredients: [
      'Chuletón de cerdo',
      'Yuca al vapor',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'cor3',
    category: 'Cortes',
    title: 'Sobrebarriga a la Cerveza + Yuca al Vapor',
    price: 37000,
    desc: 'Deliciosa sobrebarriga cocinada a fuego lento en cerveza artesanal, acompañada de yuca al vapor.',
    image: 'images/sobrebarriga-cerveza.png',
    ingredients: [
      'Sobrebarriga en salsa de cerveza',
      'Yuca al vapor',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'cor4',
    category: 'Cortes',
    title: 'Lomo de Cerdo Salteado + Papitas a la Francesa',
    price: 35000,
    desc: 'Tierno y delicioso corte de lomo de cerdo salteado con verduras al wok, acompañado de papas a la francesa.',
    image: 'images/lomo-cerdo-salteado.png',
    ingredients: [
      'Lomo de cerdo',
      'Verduras salteadas al wok',
      'Papas a la francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //PARRILLADAS
  {
    id: 'pic1',
    category: 'Picadas',
    title: 'Picada X1',
    price: 33000,
    desc: 'Porción individual con carne, chorizo, salchicha, pollo, patacón, queso rallado, papitas a la francesa y criolla, rosquete de queso, lechuga y cebolla grille.',
    image: 'images/picada-x1.png',
    ingredients: [
      'Carne de res',
      'Chorizo',
      'Salchicha',
      'Pollo',
      'Patacón',
      'Queso rallado',
      'Papas a la francesa',
      'Papa criolla',
      'Rosquete de queso',
      'Lechuga',
      'Cebolla grille'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic2',
    category: 'Picadas',
    title: 'Picada X2',
    price: 55000,
    desc: 'Ideal para dos personas. Incluye carne, chorizo, salchicha, pollo, patacón, queso rallado, papitas a la francesa y criolla, rosquete de queso, bollo limpio, lechuga y cebolla grille.',
    image: 'images/picada-x2.png',
    ingredients: [
      'Carne de res',
      'Chorizo',
      'Salchicha',
      'Pollo',
      'Patacón',
      'Queso rallado',
      'Papas a la francesa',
      'Papa criolla',
      'Rosquete de queso',
      'Bollo limpio',
      'Lechuga',
      'Cebolla grille'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic3',
    category: 'Picadas',
    title: 'Picada X3',
    price: 80000,
    desc: 'Picada completa para tres personas con carne, chorizo, salchicha, pollo, patacón, queso rallado, papitas, rosquete de queso, butifarra, bollo, lechuga y cebolla grille.',
    image: 'images/picada-x3.png',
    ingredients: [
      'Carne de res',
      'Chorizo',
      'Salchicha',
      'Pollo',
      'Patacón',
      'Queso rallado',
      'Papas a la francesa',
      'Papa criolla',
      'Rosquete de queso',
      'Butifarra',
      'Bollo limpio',
      'Lechuga',
      'Cebolla grille'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic4',
    category: 'Picadas',
    title: 'Picada X4',
    price: 110000,
    desc: 'Parrillada para cuatro personas con carne, chorizo, salchicha, pollo, patacón, queso rallado, papas, rosquete de queso, butifarra, bollo, lomo de cerdo, maicito, lechuga y cebolla grille.',
    image: 'images/picada-x4.png',
    ingredients: [
      'Carne de res',
      'Chorizo',
      'Salchicha',
      'Pollo',
      'Patacón',
      'Queso rallado',
      'Papas a la francesa',
      'Papa criolla',
      'Rosquete de queso',
      'Butifarra',
      'Bollo limpio',
      'Lomo de cerdo',
      'Maíz tierno',
      'Lechuga',
      'Cebolla grille'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic5',
    category: 'Picadas',
    title: 'Picada Familiar X6',
    price: 140000,
    desc: 'Gran picada familiar para seis personas. Incluye carne, chorizo, salchicha, pollo, patacón, queso rallado, papas, rosquete de queso, butifarra, bollo, lomo de cerdo, maicito, lechuga y cebolla grille.',
    image: 'images/picada-x6.png',
    ingredients: [
      'Carne de res',
      'Chorizo',
      'Salchicha',
      'Pollo',
      'Patacón',
      'Queso rallado',
      'Papas a la francesa',
      'Papa criolla',
      'Rosquete de queso',
      'Butifarra',
      'Bollo limpio',
      'Lomo de cerdo',
      'Maíz tierno',
      'Lechuga',
      'Cebolla grille'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic6',
    category: 'Picadas',
    title: 'Picada Gourmet X2',
    price: 80000,
    desc: 'Versión gourmet para dos personas. Con mazorquita, chorizo, chicharrón, carne, yuca, queso frito, costillas ahumadas y papa criolla.',
    image: 'images/picada-gourmet-x2.png',
    ingredients: [
      'Mazorquita',
      'Chorizo',
      'Chicharrón',
      'Carne de res',
      'Yuca al vapor',
      'Queso frito',
      'Costillas ahumadas',
      'Papa criolla'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pic7',
    category: 'Picadas',
    title: 'Picada Gourmet X3',
    price: 100000,
    desc: 'Picada gourmet para tres personas. Incluye mazorquita, chorizo, chicharrón, carne, yuca al vapor, queso frito, papa criolla y costillas ahumadas.',
    image: 'images/picada-gourmet-x3.png',
    ingredients: [
      'Mazorquita',
      'Chorizo',
      'Chicharrón',
      'Carne de res',
      'Yuca al vapor',
      'Queso frito',
      'Papa criolla',
      'Costillas ahumadas'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  //ENTRADAS
   {
    id: 'ent1',
    category: 'Entradas',
    title: 'Mazorquita',
    price: 8000,
    desc: 'Salsa de la casa y queso costeño.',
    image: 'images/entrada-mazorquita.png',
    ingredients: [
      'Mazorquita',
      'Salsa de la casa',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent2',
    category: 'Entradas',
    title: 'Mazorquita Desgranada',
    price: 14000,
    desc: 'Mazorquita desgranada con salsa de la casa y queso costeño.',
    image: 'images/entrada-mazorquita-desgranada.png',
    ingredients: [
      'Mazorquita',
      'Salsa de la casa',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent3',
    category: 'Entradas',
    title: 'Mazorquita Desgranada + Tocineta',
    price: 16000,
    desc: 'Mazorquita desgranada con salsa de la casa, queso costeño y crispy de tocineta.',
    image: 'images/entrada-mazorquita-tocineta.png',
    ingredients: [
      'Mazorquita',
      'Salsa de la casa',
      'Queso costeño',
      'Tocineta crispy'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent4',
    category: 'Entradas',
    title: 'Madurito',
    price: 9000,
    desc: 'Madurito acompañado de queso costeño y salsa de la casa.',
    image: 'images/entrada-madurito.png',
    ingredients: [
      'Plátano maduro',
      'Queso costeño',
      'Salsa de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent5',
    category: 'Entradas',
    title: 'Madurito Especial',
    price: 13000,
    desc: 'Maduro con bocadillo, queso costeño y gratinado.',
    image: 'images/entrada-madurito-especial.png',
    ingredients: [
      'Plátano maduro',
      'Bocadillo',
      'Queso costeño',
      'Gratinado'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent6',
    category: 'Entradas',
    title: 'Patacón con Queso (4 porciones)',
    price: 10000,
    desc: 'Crujiente patacón con suero y queso costeño.',
    image: 'images/entrada-patacon.png',
    ingredients: [
      'Patacón',
      'Suero',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent7',
    category: 'Entradas',
    title: 'Chorizo Criollo',
    price: 8000,
    desc: 'Chorizo criollo acompañado de yuca.',
    image: 'images/entrada-chorizo.png',
    ingredients: [
      'Chorizo criollo',
      'Yuca'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent8',
    category: 'Entradas',
    title: 'Chunchulla',
    price: 8000,
    desc: 'Porción de chunchulla acompañada de yuca al vapor.',
    image: 'images/entrada-chunchulla.png',
    ingredients: [
      'Chunchulla',
      'Yuca al vapor'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent9',
    category: 'Entradas',
    title: 'Rellena de Cerdo',
    price: 8000,
    desc: 'Rellena de cerdo tradicional con yuca al vapor.',
    image: 'images/entrada-rellena.png',
    ingredients: [
      'Rellena de cerdo',
      'Yuca al vapor'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent10',
    category: 'Entradas',
    title: 'Papa Criolla',
    price: 8000,
    desc: 'Papas criollas bañadas en salsa tártara y queso costeño.',
    image: 'images/entrada-papa-criolla.png',
    ingredients: [
      'Papa criolla',
      'Salsa tártara',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent11',
    category: 'Entradas',
    title: 'Papa Francesa',
    price: 8000,
    desc: 'Papas a la francesa con salsa tártara y queso costeño.',
    image: 'images/entrada-papa-francesa.png',
    ingredients: [
      'Papas a la francesa',
      'Salsa tártara',
      'Queso costeño'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'ent12',
    category: 'Entradas',
    title: 'Papitas Francesas + Tocineta',
    price: 15000,
    desc: 'Papas a la francesa con salsa tártara, queso costeño y tocineta.',
    image: 'images/entrada-papa-tocineta.png',
    ingredients: [
      'Papas a la francesa',
      'Salsa tártara',
      'Queso costeño',
      'Tocineta'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //PICANDO Y COMIENDO
   {
    id: 'pc1',
    category: 'Picando & Comiendo',
    title: 'Salchicriolla',
    price: 20000,
    desc: 'Salchicha con papa criolla y queso rallado.',
    image: 'images/picando-salchicriolla.png',
    ingredients: [
      'Salchicha',
      'Papa criolla',
      'Queso rallado'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc2',
    category: 'Picando & Comiendo',
    title: 'Salchipapa',
    price: 17000,
    desc: 'Salchicha con papas a la francesa y queso rallado.',
    image: 'images/picando-salchipapa.png',
    ingredients: [
      'Salchicha',
      'Papa francesa',
      'Queso rallado'
    ],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc3',
    category: 'Picando & Comiendo',
    title: 'Salchipollo',
    price: 19000,
    desc: 'Salchicha con pollo desmechado, papas a la francesa y queso fundido.',
    image: 'images/picando-salchipollo.png',
    ingredients: [
      'Salchicha',
      'Pollo desmechado',
      'Papa francesa',
      'Queso fundido'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc4',
    category: 'Picando & Comiendo',
    title: 'Choripapa',
    price: 22000,
    desc: 'Chorizo con papas a la francesa y queso rallado.',
    image: 'images/picando-choripapa.png',
    ingredients: [
      'Chorizo',
      'Papa francesa',
      'Queso rallado'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc5',
    category: 'Picando & Comiendo',
    title: 'Choripollo',
    price: 20000,
    desc: 'Chorizo con pollo desmechado, papas a la francesa y queso fundido.',
    image: 'images/picando-choripollo.png',
    ingredients: [
      'Chorizo',
      'Pollo desmechado',
      'Papa francesa',
      'Queso fundido'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc6',
    category: 'Picando & Comiendo',
    title: 'Sanchopan',
    price: 22000,
    desc: 'Pan brioche con tiras de carne asada, papa ripio, queso y papas a la francesa.',
    image: 'images/picando-sanchopan.png',
    ingredients: [
      'Pan brioche',
      'Carne asada',
      'Papa ripio',
      'Queso',
      'Papa francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc7',
    category: 'Picando & Comiendo',
    title: 'Ranchibutipapa',
    price: 27000,
    desc: 'Salchicha ranchera con butifarra, papas a la francesa y queso rallado.',
    image: 'images/picando-ranchibutipapa.png',
    ingredients: [
      'Salchicha ranchera',
      'Butifarra',
      'Papa francesa',
      'Queso rallado'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc8',
    category: 'Picando & Comiendo',
    title: 'Salchichoripapa',
    price: 23000,
    desc: 'Salchicha con chorizo, papas a la francesa y queso rallado.',
    image: 'images/picando-salchichoripapa.png',
    ingredients: [
      'Salchicha',
      'Chorizo',
      'Papa francesa',
      'Queso rallado'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pc9',
    category: 'Picando & Comiendo',
    title: 'Salchichoripollo',
    price: 28000,
    desc: 'Salchicha, chorizo y pollo desmechado con papas a la francesa y queso fundido.',
    image: 'images/picando-salchichoripollo.png',
    ingredients: [
      'Salchicha',
      'Chorizo',
      'Pollo desmechado',
      'Papa francesa',
      'Queso fundido'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
   {
    id: 'pp1',
    category: 'Pinchos + Papitas',
    title: 'Pincho Mixto',
    price: 20000,
    desc: 'Pincho mixto acompañado de papas y salsas de la casa.',
    image: 'images/pincho-mixto.png',
    ingredients: [
      'Pincho mixto',
      'Papa francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pp2',
    category: 'Pinchos + Papitas',
    title: 'Pincho Lomo Fino',
    price: 20000,
    desc: 'Pincho de lomo fino acompañado de papas y salsas de la casa.',
    image: 'images/pincho-lomo-fino.png',
    ingredients: [
      'Lomo fino',
      'Papa francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pp3',
    category: 'Pinchos + Papitas',
    title: 'Pincho de Chorizo',
    price: 20000,
    desc: 'Pincho de chorizo acompañado de papas y salsas de la casa.',
    image: 'images/pincho-chorizo.png',
    ingredients: [
      'Chorizo',
      'Papa francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pp4',
    category: 'Pinchos + Papitas',
    title: 'Pincho de Morro',
    price: 20000,
    desc: 'Pincho de morro acompañado de papas y salsas de la casa.',
    image: 'images/pincho-morro.png',
    ingredients: [
      'Morro',
      'Papa francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pp5',
    category: 'Pinchos + Papitas',
    title: 'Pincho de Pollo',
    price: 20000,
    desc: 'Pincho de pollo acompañado de papas y salsas de la casa.',
    image: 'images/pincho-pollo.png',
    ingredients: [
      'Pollo',
      'Papa francesa',
      'Salsas de la casa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'pp6',
    category: 'Pinchos + Papitas',
    title: 'Pincho Cervecero',
    price: 20000,
    desc: 'Patacón con queso frito y salchichón cervecero acompañado de papas.',
    image: 'images/pincho-cervecero.png',
    ingredients: [
      'Patacón',
      'Queso frito',
      'Salchichón cervecero',
      'Papa francesa'
    ],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //SANDWICHES
  {
  id: 'sand1',
  category: 'Sandwich',
  title: 'Sandwich X2',
  price: 28000,
  desc: 'Sandwich doble acompañado de papas a la francesa, verduras, jamón y queso. Escoge una de las tres proteínas disponibles.',
  image: 'images/sandwich-x2.png',
  ingredients: [
    'Papas a la francesa',
    'Verduras frescas',
    'Jamón',
    'Queso',
    'Pan artesanal',
    'Proteína a elección: Carne asada, Pollo desmechado o Pechuga asada'
  ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
//MENU SALUDABLE
{
  id: 'fit1',
  category: 'Menú Saludable',
  title: 'Hamburguesa Super Fit',
  price: 28000,
  desc: 'Hamburguesa saludable en pan integral con verduras, jamón y queso cheddar. Elige tu proteína favorita.',
  image: 'images/hamburguesa-super-fit.png',
  ingredients: [
    'Pan integral',
    'Carne de res o pechuga asada',
    'Verduras frescas',
    'Jamón',
    'Queso cheddar',
    'Topping de mazorquita (opcional)'
  ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'fit2',
  category: 'Menú Saludable',
  title: 'Sandwich Fit x2',
  price: 18000,
  desc: 'Sandwich doble con pan integral, verduras, jamón, queso y tu elección de pechuga asada o pollo desmechado.',
  image: 'images/sandwich-fit-x2.png',
  ingredients: [
    'Pan integral',
    'Pechuga asada o pollo desmechado',
    'Verduras frescas',
    'Jamón',
    'Queso'
  ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'fit3',
  category: 'Menú Saludable',
  title: 'Ensalada Saludable',
  price: 18000,
  desc: 'Ensalada fresca con daditos de pechuga, maíz, papa ripio, lechuga y queso rallado.',
  image: 'images/ensalada-saludable.png',
  ingredients: [
    'Pechuga en daditos',
    'Maíz',
    'Papa ripio',
    'Lechuga',
    'Queso rallado'
  ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'fit4',
  category: 'Menú Saludable',
  title: 'Tortillas Integrales x2',
  price: 25000,
  desc: 'Dos tortillas integrales con daditos de pechuga, maíz, lechuga y verduras.',
  image: 'images/tortillas-integrales.png',
  ingredients: [
    'Tortillas integrales',
    'Pechuga en daditos',
    'Maíz',
    'Lechuga',
    'Verduras frescas'
  ],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},

//JUGOS NATURALES
{
  id: 'jugo1',
  category: 'Jugos Naturales',
  title: 'Jugo de Lulo',
  price: 9000,
  desc: 'Jugo natural de lulo preparado al instante.',
  image: 'images/jugo-lulo.png',
  ingredients: ['Lulo fresco', 'Agua o leche', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo2',
  category: 'Jugos Naturales',
  title: 'Jugo de Mora',
  price: 9000,
  desc: 'Refrescante jugo natural de mora.',
  image: 'images/jugo-mora.png',
  ingredients: ['Mora', 'Agua o leche', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo3',
  category: 'Jugos Naturales',
  title: 'Jugo de Mandarina',
  price: 9000,
  desc: 'Delicioso jugo de mandarina recién exprimido.',
  image: 'images/jugo-mandarina.png',
  ingredients: ['Mandarina', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo4',
  category: 'Jugos Naturales',
  title: 'Jugo de Naranja / Naranjada',
  price: 9000,
  desc: 'Refrescante jugo de naranja natural, ideal para acompañar tus comidas.',
  image: 'images/jugo-naranja.png',
  ingredients: ['Naranja', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo5',
  category: 'Jugos Naturales',
  title: 'Limonada Natural',
  price: 9000,
  desc: 'Clásica limonada natural con el balance perfecto entre dulce y ácido.',
  image: 'images/limonada.png',
  ingredients: ['Limón fresco', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo6',
  category: 'Jugos Naturales',
  title: 'Jugo de Fresa',
  price: 9000,
  desc: 'Jugo natural de fresa, cremoso y refrescante.',
  image: 'images/jugo-fresa.png',
  ingredients: ['Fresas', 'Leche o agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo7',
  category: 'Jugos Naturales',
  title: 'Jugo de Mango',
  price: 9000,
  desc: 'Jugo natural de mango con textura suave y dulce.',
  image: 'images/jugo-mango.png',
  ingredients: ['Mango maduro', 'Agua o leche', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo8',
  category: 'Jugos Naturales',
  title: 'Jugo de Maracuyá',
  price: 9000,
  desc: 'Jugo de maracuyá con el toque perfecto de acidez.',
  image: 'images/jugo-maracuya.png',
  ingredients: ['Maracuyá', 'Agua', 'Azúcar al gusto'],
  extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo9',
  category: 'Jugos Naturales',
  title: 'Jugo de Cerezada',
  price: 9000,
  desc: 'Jugo natural de cereza, refrescante y colorido.',
  image: 'images/jugo-cerezada.png',
  ingredients: ['Cereza', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo10',
  category: 'Jugos Naturales',
  title: 'Jugo de Piña',
  price: 9000,
  desc: 'Jugo de piña natural con sabor tropical.',
  image: 'images/jugo-pina.png',
  ingredients: ['Piña', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'jugo11',
  category: 'Jugos Naturales',
  title: 'Jugo de Tamarindo',
  price: 9000,
  desc: 'Exótico jugo natural de tamarindo, dulce y refrescante.',
  image: 'images/jugo-tamarindo.png',
  ingredients: ['Tamarindo', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},

//JUGOS ESPECIALES
{
  id: 'especial1',
  category: 'Jugos Especiales',
  title: 'Mora Condensada',
  price: 10000,
  desc: 'Jugo de mora con leche condensada, dulce y cremoso.',
  image: 'images/jugo-mora-condensada.png',
  ingredients: ['Mora', 'Leche condensada', 'Agua o leche', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'especial2',
  category: 'Jugos Especiales',
  title: 'Limonada de Coco',
  price: 10000,
  desc: 'Limonada con leche de coco, refrescante y tropical.',
  image: 'images/limonada-coco.png',
  ingredients: ['Limón', 'Leche de coco', 'Azúcar', 'Hielo'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'especial3',
  category: 'Jugos Especiales',
  title: 'LimónLú',
  price: 10000,
  desc: 'Refrescante mezcla cítrica de limón y lulo.',
  image: 'images/limonlu.png',
  ingredients: ['Limón', 'Lulo', 'Agua', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'especial4',
  category: 'Jugos Especiales',
  title: 'Limonada en Soda',
  price: 10000,
  desc: 'Clásica limonada natural mezclada con soda para un toque burbujeante.',
  image: 'images/limonada-soda.png',
  ingredients: ['Limón', 'Soda', 'Azúcar al gusto', 'Hielo'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'especial5',
  category: 'Jugos Especiales',
  title: 'Mango Biche',
  price: 10000,
  desc: 'Exquisito jugo de mango biche con un toque ácido y salado.',
  image: 'images/mango-biche.png',
  ingredients: ['Mango verde', 'Limón', 'Sal', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},
{
  id: 'especial6',
  category: 'Jugos Especiales',
  title: 'Maracumango',
  price: 10000,
  desc: 'Combinación perfecta de maracuyá y mango, dulce y tropical.',
  image: 'images/maracumango.png',
  ingredients: ['Maracuyá', 'Mango', 'Agua o leche', 'Azúcar al gusto'],
   extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
},

//BEBIDAS
{
    id: 'beb1',
    category: 'Bebidas',
    title: 'Cerveza Ligth',
    price: 4000,
    desc: 'Cerveza ligera y refrescante, perfecta para acompañar cualquier comida.',
    image: 'images/cerveza-light.png',
    ingredients: ['Cerveza Ligth'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb2',
    category: 'Bebidas',
    title: 'Cerveza Negra',
    price: 3000,
    desc: 'Cerveza oscura, con cuerpo y sabor intenso.',
    image: 'images/cerveza-negra.png',
    ingredients: ['Cerveza Negra'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb3',
    category: 'Bebidas',
    title: 'Agua con gas',
    price: 4500,
    desc: 'Agua mineral con gas, ideal para refrescarse.',
    image: 'images/agua-gas.png',
    ingredients: ['Agua con gas'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb4',
    category: 'Bebidas',
    title: 'Agua sin gas',
    price: 5000,
    desc: 'Agua natural sin gas, pura y refrescante.',
    image: 'images/agua-sin-gas.png',
    ingredients: ['Agua sin gas'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb5',
    category: 'Bebidas',
    title: 'Club Colombia',
    price: 7000,
    desc: 'Cerveza premium colombiana, ideal para cualquier ocasión.',
    image: 'images/club-colombia.png',
    ingredients: ['Club Colombia'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb6',
    category: 'Bebidas',
    title: 'Poker',
    price: 7000,
    desc: 'Cerveza lager colombiana, suave y refrescante.',
    image: 'images/poker.png',
    ingredients: ['Poker'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb7',
    category: 'Bebidas',
    title: 'Coronita',
    price: 17000,
    desc: 'Pequeña cerveza Corona, ideal para compartir.',
    image: 'images/coronita.png',
    ingredients: ['Coronita'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb8',
    category: 'Bebidas',
    title: 'Corona',
    price: 17000,
    desc: 'Cerveza Corona clásica, refrescante y ligera.',
    image: 'images/corona.png',
    ingredients: ['Corona'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'beb9',
    category: 'Bebidas',
    title: 'Piña Colada',
    price: 17000,
    desc: 'Bebida tropical con o sin alcohol, cremosa y deliciosa.',
    image: 'images/pina-colada.png',
    ingredients: ['Piña', 'Leche de coco', 'Ron opcional'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  // Aquí agregamos las gaseosas existentes
  {
    id: 'gas1',
    category: 'Bebidas',
    title: 'Gaseosa 1/4',
    price: 8000,
    desc: 'Refresco individual en presentación 1/4. Variedades disponibles: Coca-Cola, Kola, Colombiana y Manzana.',
    image: 'images/gaseosa-cuarto.png',
    ingredients: ['Coca-Cola', 'Kola', 'Colombiana', 'Manzana'],
    extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'gas2',
    category: 'Bebidas',
    title: 'Gaseosa Mega',
    price: 12000,
    desc: 'Refresco tamaño mega para compartir. Variedades disponibles: Coca-Cola, Kola y Manzana.',
    image: 'images/gaseosa-mega.png',
    ingredients: ['Coca-Cola', 'Kola', 'Manzana'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'gas3',
    category: 'Bebidas',
    title: 'Pet 400',
    price: 5000,
    desc: 'Presentación individual de 400 ml. Variedades: Coca-Cola, Kola, Ginger y Jugo Hit.',
    image: 'images/gaseosa-pet400.png',
    ingredients: ['Coca-Cola', 'Kola', 'Ginger', 'Jugo Hit'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'gas4',
    category: 'Bebidas',
    title: 'Soda Saborizada',
    price: 9000,
    desc: 'Refrescante soda con sabores frutales. Sabores disponibles: Frutos Rojos y Frutos Amarillos.',
    image: 'images/soda-saborizada.png',
    ingredients: ['Frutos Rojos', 'Frutos Amarillos', 'Soda', 'Hielo'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'gas5',
    category: 'Bebidas',
    title: 'Limonada Pequeña',
    price: 5000,
    desc: 'Limonada refrescante en porción pequeña, ideal para acompañar tu comida.',
    image: 'images/limonada-pequena.png',
    ingredients: ['Limón', 'Agua', 'Azúcar', 'Hielo'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'gas6',
    category: 'Bebidas',
    title: 'Limonada Grande',
    price: 10000,
    desc: 'Limonada refrescante en porción grande, perfecta para compartir.',
    image: 'images/limonada-grande.png',
    ingredients: ['Limón', 'Agua', 'Azúcar', 'Hielo'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //MICHELADAS
  {
    id: 'mic1',
    category: 'Bebidas',
    title: 'Michelada Tradicional',
    price: 6000,
    desc: 'Michelada clásica con cerveza, limón y salsa especial.',
    image: 'images/michelada-tradicional.png',
    ingredients: ['Cerveza', 'Limón', 'Salsa especial'],
    extras: [
      { name: 'Maracuyá', price: 1000 },
      { name: 'Fresa', price: 1000 },
      { name: 'Mango', price: 1000 },
      { name: 'Cereza', price: 1000 },
      { name: 'Manzana verde', price: 1000 }
    ]
  },
  {
    id: 'mic2',
    category: 'Bebidas',
    title: 'Michelada Corona',
    price: 10000,
    desc: 'Michelada preparada con cerveza Corona, limón y salsa especial.',
    image: 'images/michelada-corona.png',
    ingredients: ['Corona', 'Limón', 'Salsa especial'],
    extras: [
      { name: 'Maracuyá', price: 1000 },
      { name: 'Fresa', price: 1000 },
      { name: 'Mango', price: 1000 },
      { name: 'Cereza', price: 1000 },
      { name: 'Manzana verde', price: 1000 }
    ]
  },

  //MENU INFANTIL

   {
    id: 'inf1',
    category: 'Menú Infantil',
    title: 'Mini Salchipapa',
    price: 25000,
    desc: 'Mini salchipapa acompañada de papitas, gaseosa y sorpresa.',
    image: 'images/mini-salchipapa.png',
    ingredients: ['Salchipapa', 'Papitas', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'inf2',
    category: 'Menú Infantil',
    title: 'Mini Hamburguesa',
    price: 25000,
    desc: 'Mini hamburguesa acompañada de papitas, gaseosa y sorpresa.',
    image: 'images/mini-hamburguesa.png',
    ingredients: ['Mini hamburguesa', 'Papitas', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'inf3',
    category: 'Menú Infantil',
    title: 'Mini Perro',
    price: 25000,
    desc: 'Mini perro caliente acompañado de papitas, gaseosa y sorpresa.',
    image: 'images/mini-perro.png',
    ingredients: ['Mini perro caliente', 'Papitas', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'inf4',
    category: 'Menú Infantil',
    title: 'Nuggets',
    price: 25000,
    desc: 'Porción de nuggets acompañada de papitas, gaseosa y sorpresa.',
    image: 'images/nuggets.png',
    ingredients: ['Nuggets', 'Papitas', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'inf5',
    category: 'Menú Infantil',
    title: 'Sandwich',
    price: 25000,
    desc: 'Mini sándwich acompañado de papitas, gaseosa y sorpresa.',
    image: 'images/sandwich.png',
    ingredients: ['Mini sándwich', 'Papitas', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //SABADOS & DOMINGOS
  {
    id: 'sd1',
    category: 'Sábados & Domingos',
    title: 'Sancocho Guajiro',
    price: 24000,
    desc: 'Sancocho guajiro con pata de res y hueso carnudo, acompañado de porción de arroz. Escoge una de las proteínas: Carne Asada, Pierna Pernil, Lomo de Cerdo, Pechuga a la plancha o entera.',
    image: 'images/sancocho-guajiro.png',
    ingredients: ['Pata de res', 'Hueso carnudo', 'Arroz', 'Carne Asada / Pierna Pernil / Lomo de Cerdo / Pechuga'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'sd2',
    category: 'Sábados & Domingos',
    title: 'Arroz Wayú Especial + Papitas',
    price: 24000,
    desc: 'Arroz Wayú especial acompañado de papitas, chorizo de cerdo, lomo de cerdo, lomo de res, chicharrón carnudo, madurito picado, maíz tierno y verduras frescas.',
    image: 'images/arroz-wayu.png',
    ingredients: ['Chorizo de cerdo', 'Lomo de cerdo', 'Lomo de res', 'Chicharrón carnudo', 'Madurito picado', 'Maíz tierno', 'Verduras frescas', 'Papitas', 'Arroz'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'sd3',
    category: 'Sábados & Domingos',
    title: 'Sopa Pequeña',
    price: 7000,
    desc: 'Porción pequeña de sopa tradicional para acompañar tu plato.',
    image: 'images/sopa-pequena.png',
    ingredients: ['Sopa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },
  {
    id: 'sd4',
    category: 'Sábados & Domingos',
    title: 'Porción de Arroz Pequeña',
    price: 5000,
    desc: 'Porción individual de arroz para complementar tu plato principal.',
    image: 'images/arroz-pequeno.png',
    ingredients: ['Arroz'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  },

  //MINI ASADITOS
  {
    id: 'ma1',
    category: 'Mini Asaditos',
    title: 'Mini Asadito',
    price: 25000,
    desc: 'Mini asadito acompañado de arroz, papita frita, gaseosa y ¡reclama tu sorpresa!',
    image: 'images/mini-asadito.png',
    ingredients: ['Arroz', 'Papita frita', 'Gaseosa', 'Sorpresa'],
     extras: [
      { name: 'Porción papa francesa', price: 5000 },
      { name: 'Pequeña (solo para la mesa)', price: 5000 },
      { name: 'Yuca al vapor', price: 5000 },
      { name: 'Yuca frita', price: 7000 },
      { name: 'Queso frito', price: 6000 },
      { name: 'Queso rallado', price: 5000 },
      { name: 'Rosquetes de queso', price: 10000 },
      { name: 'Suero + queso adicional', price: 5000 },
      { name: 'Huevo frito', price: 4000 },
      { name: 'Bollo limpio', price: 4000 },
      { name: 'Ensalada', price: 5000 },
      { name: 'Tocineta', price: 5000 },
      { name: 'Maíz', price: 5000 },
      { name: 'Pollito desmechado', price: 7000 },
      { name: 'Empaque', price: 1000 },
      { name: 'Cebolla grille', price: 3000 },
      { name: 'Butifarra x3', price: 5000 },
      { name: 'Carne Hamburgesa', price: 7000 },
      { name: 'Muslitos de pollo x1', price: 5000 }
    ]
  }
];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Burgers';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}

// ---------- Render productos ----------
function renderProducts(cat){
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => p.category === cat && (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)));
  catalogEl.innerHTML = '';

  if(items.length === 0){
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p=>{
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', ()=> openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}

// ---------- Modal producto ----------
function openProductModal(productId) {
  const p = products.find(x => x.id === productId);
  if (!p) return;

  productModal.classList.remove('hidden');
  productModal.setAttribute('aria-hidden', 'false');
  modalContent.innerHTML = '';

  const modalInner = document.createElement('div');
  modalInner.className = 'modal-inner';
  modalInner.innerHTML = `
    <div class="modal-header">
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}" class="modal-img">
      <h3>${escapeHtml(p.title)} — $${numberWithCommas(p.price)}</h3>
      <p class="desc">${escapeHtml(p.desc)}</p>
    </div>
    <div class="modal-body scrollable-area"></div>
    <div class="modal-footer">
      <div class="qty-controls">
        <button id="qty-decr" type="button">-</button>
        <span id="qty-val">1</span>
        <button id="qty-incr" type="button">+</button>
      </div>
      <div class="price-actions">
        <div id="price-breakdown">
          <div><strong>Subtotal:</strong> <span id="subtotal">$${numberWithCommas(p.price)}</span></div>
          <div><strong>Adicionales:</strong> <span id="extras-total">$0</span></div>
          <div><strong>Total:</strong> <span id="modal-price">$${numberWithCommas(p.price)}</span></div>
        </div>
        <button id="modal-add" class="btn-primary" type="button">Añadir al carrito</button>
      </div>
    </div>
  `;

  const scrollArea = modalInner.querySelector('.scrollable-area');
  let ingSection = null, extrasSection = null;

  // === Sección generadora ===
  function buildSection(title, items, dataAttr) {
    const section = document.createElement('div');
    section.className = 'section collapsed';

    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `<strong>${title} ▼</strong>`;

    const body = document.createElement('div');
    body.className = 'section-body checklist';

    items.forEach((item, idx) => {
      const id = `${dataAttr}-${p.id}-${idx}`;
      const label = document.createElement('label');
      label.className = 'check-item';

      if (dataAttr === 'ing') {
        label.innerHTML = `
          <input type="checkbox" data-ing="${escapeHtml(item)}" id="${id}">
          <span>Quitar ${escapeHtml(item)}</span>
        `;
      } else {
        label.innerHTML = `
          <div class="extra-item">
            <label>
              <input type="checkbox" data-extra="${escapeHtml(item.name)}" data-price="${item.price}" id="${id}">
              <span>${escapeHtml(item.name)} (+$${numberWithCommas(item.price)})</span>
            </label>
            <div class="extra-qty hidden">
              <button type="button" class="ex-decr">-</button>
              <span class="ex-val">1</span>
              <button type="button" class="ex-incr">+</button>
            </div>
          </div>
        `;
      }

      body.appendChild(label);
    });

    section.appendChild(header);
    section.appendChild(body);
    scrollArea.appendChild(section);
    return { section, header };
  }

  // === Ingredientes y adicionales ===
  if (p.ingredients?.length) {
    const { section, header } = buildSection('Quitar ingredientes', p.ingredients, 'ing');
    ingSection = section;
    header.addEventListener('click', () => {
      const open = !ingSection.classList.contains('collapsed');
      ingSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Quitar ingredientes ${open ? '▼' : '▲'}</strong>`;
      if (extrasSection) {
        extrasSection.classList.add('collapsed');
        extrasSection.querySelector('.section-header').innerHTML = '<strong>Agregar adicionales ▼</strong>';
      }
    });
  }

  if (p.extras?.length) {
    const { section, header } = buildSection('Agregar adicionales', p.extras, 'ex');
    extrasSection = section;
    header.addEventListener('click', () => {
      const open = !extrasSection.classList.contains('collapsed');
      extrasSection.classList.toggle('collapsed', open);
      header.innerHTML = `<strong>Agregar adicionales ${open ? '▼' : '▲'}</strong>`;
      if (ingSection) {
        ingSection.classList.add('collapsed');
        ingSection.querySelector('.section-header').innerHTML = '<strong>Quitar ingredientes ▼</strong>';
      }
    });
  }

  modalContent.appendChild(modalInner);

  // === Lógica de cantidad ===
  let qty = 1;
  function getExtrasSum() {
    let total = 0;
    modalContent.querySelectorAll('input[data-extra]:checked').forEach(chk => {
      const price = Number(chk.dataset.price);
      const parent = chk.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      total += price * exQty;
    });
    return total;
  }

  function updateModalPrice() {
    const extrasSum = getExtrasSum();
    const subtotal = p.price * qty;
    const total = subtotal + extrasSum;

    document.getElementById('subtotal').textContent = '$' + numberWithCommas(subtotal);
    document.getElementById('extras-total').textContent = '$' + numberWithCommas(extrasSum);
    document.getElementById('modal-price').textContent = '$' + numberWithCommas(total);
  }

  // === Eventos de cantidad global ===
  modalContent.querySelector('#qty-decr').addEventListener('click', () => {
    if (qty > 1) qty--;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });
  modalContent.querySelector('#qty-incr').addEventListener('click', () => {
    qty++;
    document.getElementById('qty-val').textContent = qty;
    updateModalPrice();
  });

  // === Checkbox adicionales con contador ===
  modalContent.addEventListener('change', e => {
    if (e.target.matches('input[data-extra]')) {
      const extraItem = e.target.closest('.extra-item');
      const qtyBox = extraItem.querySelector('.extra-qty');
      qtyBox.classList.toggle('hidden', !e.target.checked);
      updateModalPrice();
    }
  });

// === Control preciso de botones + y - para adicionales ===
['click', 'touchstart'].forEach(evtType => {
  modalContent.addEventListener(evtType, e => {
    const btn = e.target.closest('.ex-incr, .ex-decr');
    if (!btn) return;

    e.stopPropagation();
    e.preventDefault();

    // Previene clicks múltiples simultáneos
    if (btn.disabled) return;
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 150);

    const qtyBox = btn.closest('.extra-qty');
    const valEl = qtyBox.querySelector('.ex-val');
    let val = Number(valEl.textContent);

    if (btn.classList.contains('ex-incr')) val++;
    else if (val > 1) val--;

    valEl.textContent = val;
    updateModalPrice();
  });
});



  // === Añadir al carrito ===
  modalContent.querySelector('#modal-add').addEventListener('click', () => {
    const removed = Array.from(modalContent.querySelectorAll('input[data-ing]:checked')).map(i => i.dataset.ing);
    const extras = Array.from(modalContent.querySelectorAll('input[data-extra]:checked')).map(i => {
      const parent = i.closest('.extra-item');
      const exQty = Number(parent.querySelector('.ex-val').textContent);
      return {
        name: i.dataset.extra,
        price: Number(i.dataset.price),
        qty: exQty
      };
    });
    addToCart({ productId: p.id, title: p.title, price: p.price, qty, removed, extras });
    closeProductModal();
  });
}









function closeProductModal(){
  productModal.classList.add('hidden');
  productModal.setAttribute('aria-hidden','true');
  modalContent.innerHTML = '';
}
modalClose.addEventListener('click', closeProductModal);
productModal.addEventListener('click', (e)=>{ if(e.target === productModal) closeProductModal(); });

// ---------- Carrito ----------
function addToCart(item){
  const key = generateCartKey(item);
  const existing = cart.find(c => c.key === key);
  if(existing){ existing.qty += item.qty; }
  else{ cart.push({...item, key}); }
  persistCart();
  refreshCartUI();
}

function generateCartKey(it){
  const extrasPart = (it.extras || []).map(e => e.name).sort().join('|') || '';
  const removedPart = (it.removed || []).slice().sort().join('|') || '';
  return `${it.productId}::${extrasPart}::${removedPart}`;
}

function persistCart(){
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

function refreshCartUI(){
  cartCountEl.textContent = String(cart.reduce((s,i) => s + i.qty, 0));
  cartItemsEl.innerHTML = '';
  let subtotal = 0;

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<div class="muted">Tu carrito está vacío</div>';
  } else {
    cart.forEach((c, idx)=>{
      const extrasText = (c.extras && c.extras.length) ? ('+' + c.extras.map(e=>e.name).join(', ')) : '';
      const removedText = (c.removed && c.removed.length) ? ('(sin ' + c.removed.join(', ') + ')') : '';
      const extrasSum = (c.extras || []).reduce((s,e)=> s + (e.price || 0), 0);
      const itemTotal = (c.price + extrasSum) * c.qty;
      subtotal += itemTotal;

      const row = document.createElement('div');
      row.className = 'cart-item';
      row.innerHTML = `
        <div class="info">
          <div><strong>${escapeHtml(c.title)}</strong> ${escapeHtml(removedText)}</div>
          <div class="muted">${escapeHtml(extrasText)}</div>
        </div>
        <div style="text-align:right">
          <div>$${numberWithCommas(itemTotal)}</div>
          <div class="qty-controls">
            <button data-action="decr" data-idx="${idx}" type="button">-</button>
            <span>${c.qty}</span>
            <button data-action="incr" data-idx="${idx}" type="button">+</button>
            <button data-action="del" data-idx="${idx}" type="button">🗑</button>
          </div>
        </div>
      `;
      cartItemsEl.appendChild(row);
    });
  }

  cartSubtotalEl.textContent = '$' + numberWithCommas(subtotal);
  
 cartDeliveryEl.textContent = '$0';
cartTotalEl.textContent = '$' + numberWithCommas(subtotal);

  // bind buttons
  cartItemsEl.querySelectorAll('button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const action = btn.dataset.action;
      const i = Number(btn.dataset.idx);
      if(Number.isNaN(i)) return;
      if(action === 'incr') cart[i].qty++;
      else if(action === 'decr') cart[i].qty = Math.max(1, cart[i].qty - 1);
      else if(action === 'del') cart.splice(i, 1);
      persistCart();
      refreshCartUI();
    });
  });
}

// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------
function openCheckout(){
  if(cart.length === 0){ alert('El carrito está vacío.'); return; }
  checkoutForm.reset();
  addressLabel.classList.add('hidden');
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden','false');
}

checkoutClose.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); checkoutModal.setAttribute('aria-hidden','true'); });
backToCartBtn.addEventListener('click', ()=>{ checkoutModal.classList.add('hidden'); cartDrawer.classList.remove('hidden'); });

// Mostrar campo dirección sólo si es domicilio
checkoutForm.addEventListener('change', () => {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const addressLabel = document.getElementById('address-label');
  const envioRow = document.getElementById('envio-row');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total-checkout');

  // Mostrar campo de dirección solo si es domicilio
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // Calcular subtotal
  const subtotal = cart.reduce((s, i) => {
    const extrasSum = (i.extras || []).reduce((x, e) => x + (e.price || 0), 0);
    return s + (i.price + extrasSum) * i.qty;
  }, 0);

  // Calcular envío y total
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar u ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // Actualizar textos
  deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
  totalEl.textContent = `$${numberWithCommas(total)}`;
});





// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name') || '';
  const clientPhone = fd.get('phone') || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address') || '';
  const notes = fd.get('notes') || '';

  let textParts = [];
  textParts.push('🧾 *Nuevo Pedido - Carne Asi | Asá✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;
  cart.forEach(c => {
    const extrasList = (c.extras && c.extras.length)
      ? c.extras.map(x => `   ➕ ${x.qty}x ${x.name} ($${numberWithCommas(x.price * x.qty)})`).join('\n')
      : '';
    const removedText = (c.removed && c.removed.length)
      ? (' sin ' + c.removed.join(', '))
      : '';
    const extrasSum = (c.extras || []).reduce((s, e) => s + (e.price * e.qty || 0), 0);
    const itemTotal = (c.price + extrasSum) * c.qty;
    subtotal += itemTotal;

    textParts.push(`${c.qty}x ${c.title}${removedText} — *$${numberWithCommas(itemTotal)}*`);
    if (extrasList) textParts.push(extrasList);
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  if (method === 'domicilio') {
    textParts.push(`🚗 Envío: $${numberWithCommas(delivery)}`);
  } else {
    textParts.push(`🏪 Envío: Sin costo (recoge en el local)`);
  }
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  const msg = encodeURIComponent(textParts.join('\n'));
  const bp = String(BUSINESS_PHONE || '').replace(/[^0-9]/g, '');

  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const waUrl = `https://wa.me/${bp}?text=${msg}`;
  window.open(waUrl, '_blank');
});



// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});
