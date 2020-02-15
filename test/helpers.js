const randomString = (length) => {
  const x = 7 ** (length + 1);
  const y = 7 ** length;
  return Math.round(x - (Math.random() * y)).toString(7).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Abdulateef Oladele',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Abdulateef Oladele',
    heading: 'ABOUT ME',
  },
  {
    route: '/Works',
    title: 'Works | Abdulateef Oladele',
    heading: 'Works',
  },
  {
    route: '/stats',
    title: 'Stats | Abdulateef Oladele',
    heading: 'STATS',
  },
  {
    route: '/blog',
    title: 'Blog | Abdulateef Oladele',
    heading: 'BLOG',
  },

  {
    route: '/contact',
    title: 'Contact | Abdulateef Oladele',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
