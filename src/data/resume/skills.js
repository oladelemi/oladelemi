const skills = [
  {
    title: 'Javascript',
    competency: 2,
    category: ['Languages', 'Web Development', 'Javascript'],
  },
  {
    title: 'Bash',
    competency: 3,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'HTML',
    competency: 3,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS',
    competency: 2,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'VBA',
    competency: 4,
    category: ['Languages', 'Microsoft Office'],
  },
  {
    title: 'Microsoft Word',
    competency: 5,
    category: ['Microsoft Office'],
  },
  {
    title: 'Microsoft Excel',
    competency: 5,
    category: ['Microsoft Office'],
  },
  {
    title: 'Microsoft Powerpoint',
    competency: 5,
    category: ['Microsoft Office'],
  },
  {
    title: 'SQL',
    competency: 4,
    category: ['Databases', 'Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Data Analysis',
    competency: 3,
    category: ['Data Science', 'Machine Learning'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
  {
    title: 'Pandas',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Node.JS',
    competency: 2,
    category: ['Frameworks', 'Javascript', 'Web Development'],
  },
  {
    title: 'React.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Photoshop',
    competency: 5,
    category: ['Design'],
  },
  {
    title: 'Lightroom',
    competency: 5,
    category: ['Design'],
  },
  {
    title: 'Corel Draw',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Windows',
    competency: 5,
    category: ['Platforms'],
  },
  {
    title: 'Linux',
    competency: 4,
    category: ['Platforms'],
  },
  {
    title: 'Mac OS',
    competency: 3,
    category: ['Platforms'],
  },
  {
    title: 'Android Studio',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Blendr',
    competency: 2,
    category: ['Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

const colors = [
  '#515dd4', // Data Science
  '#e47272', // Machine Learning
  '#3896e2', // Databases
  '#747fff', // Design
  '#6968b3', // Languages
  '#c3423f', // Microsoft Office
  '#37b1f5', // Python
  '#cc7b94', // Web Development
  '#64cb7b', // Platforms
  '#40494e', // Tools
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
