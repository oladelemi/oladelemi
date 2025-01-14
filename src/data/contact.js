import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { faGoodreads } from '@fortawesome/free-brands-svg-icons';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/oladelemi',
    label: 'Github',
    icon: faGithub,
  },

  {
    link: 'https://www.linkedin.com/in/oladelemi',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://www.goodreads.com/oladelemi',
    label: 'goodreads',
    icon: faGoodreads,
  },
  {
    link: 'https://angel.co/oladelemi',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: 'mailto:Abdulateef.Oladelemi@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
