const projects = [
  {
    id: '001',
    titleES: 'ToDo App',
    titleEN: 'ToDo App',
    descriptionEN: 'Basic App developed in React.js for ToDo management.',
    descriptionES:
      'App Básica desarrollada en React.js para la administración de tareas.',
    funcionalitiesEN: [
      'Add new tasks and type',
      'View completed and incomplete tasks',
      'Filter by task type',
      'Storage of tasks added in LocalStorage',
    ],
    funcionalitiesES: [
      'Añadir nuevas tareas y su tipo',
      'Ver tareas completas y sin completar',
      'Filtrado por tipo de tarea',
      'Retención de tareas añadidas en LocalStorage',
    ],
    tools: ['Javascript', 'React.js', 'Css', 'Html'],
    deploy: 'https://maxsolfar.github.io/react-todo-app/',
    repository: 'https://github.com/maxsolfar/react-todo-app',
    image: 'https://i.imgur.com/eFzTedt.png',
    gallery: [
      'https://i.imgur.com/ryxMNUW.png',
      'https://www.arenismedico.com/assets/images/staff.jpg',
      'https://www.arenismedico.com/assets/images/staff.jpg',
    ],
    category: 'Front End',
    creationDate: '10-03-2022',
    active: true,
    color: "#EAEAEA"
  },
  {
    id: '002',
    titleES: 'App del Clima',
    titleEN: 'Weather App',
    descriptionEN:
      'App developed in React.js to search the weather in any city using the Openweathermap API.',
    descriptionES:
      'App desarrollada en React.js para la busqueda del clima de cualquier ciudad consumiendo la API Openweathermap',
    funcionalitiesEN: [
      'Weather search by city',
      'Storage of cities searched in LocalStorage',
      'Card sorting (Drag and Drop)',
      'Weekly detail of weather in cities',
    ],
    funcionalitiesES: [
      'Búsqueda del clima por ciudad',
      'Ordenamiento de cards (Drag and Drop)',
      'Retención de ciudades buscadas en LocalStorage',
      'Detalle semanal del clima en las ciudades',
    ],
    tools: ['Javascript', 'React.js', 'Css', 'Html'],
    deploy: 'https://maxsolfar.github.io/react-weather-app/',
    repository: 'https://github.com/maxsolfar/react-weather-app',
    image: 'https://i.imgur.com/CFigOrv.png',
    gallery: [
      'https://i.imgur.com/pR6C7Dl.png',
      'https://www.arenismedico.com/assets/images/staff.jpg',
      'https://www.arenismedico.com/assets/images/staff.jpg',
    ],
    category: 'Front End',
    creationDate: '15-04-2022',
    active: true,
    color: "#CAFEFF"
  },
  {
    id: '003',
    titleES: 'App de películas',
    titleEN: 'Movies App',
    descriptionEN:
      'App developed in React.js & Redux using the MovieDB API.',
    descriptionES:
      'App desarrollada en React.js y Redux, consumiendo la API MovieDB',
    funcionalitiesEN: [
      'Search movies by name',
      'Save of favorite movies in global state (Redux)',
    ],
    funcionalitiesES: [
      'Búsqueda de películas por nombre',
      'Guardado de películas favoritas en estado global (Redux)',
    ],
    tools: ['Javascript', 'React.js', 'Redux', 'Css', 'Html'],
    deploy: '',
    repository: 'https://github.com/maxsolfar/movies-app',
    image: 'https://i.imgur.com/4YeibeS.png',
    gallery: [
      'https://i.imgur.com/2fLYFdv.png',
      'https://www.arenismedico.com/assets/images/staff.jpg',
      'https://www.arenismedico.com/assets/images/staff.jpg',
    ],
    category: 'Front End',
    creationDate: '10-07-2022',
    active: true,
    color: "#D4D4FF"
  },
];

export default projects;
