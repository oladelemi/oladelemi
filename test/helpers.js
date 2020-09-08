const randomString = (length) => {
  const x = 7 ** (length + 1);
  const y = 7 ** length;
  return Math.round(x - (Math.random() * y)).toString(7).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Abdulateef Oladelemi',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Abdulateef Oladelemi',
    heading: 'ABOUT ME',
  },
  {
    route: '/Works',
    title: 'Works | Abdulateef Oladelemi',
    heading: 'Works',
  },
  {
    route: '/stats',
    title: 'Stats | Abdulateef Oladelemi',
    heading: 'STATS',
  },
  {
    route: '/blog',
    title: 'Blog | Abdulateef Oladelemi',
    heading: 'BLOG',
  },

  {
    route: '/contact',
    title: 'Contact | Abdulateef Oladelemi',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
