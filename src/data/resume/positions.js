/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Northrop Grumman',
    position: 'Principal Software Engineer',
    url: 'https://www.northropgrumman.com/',
    startDate: '2024-08-26',
    summary: '',
    highlights: [

    ],
  },

  {
    name: 'Northrop Grumman',
    position: 'Software Engineer',
    url: 'https://www.northropgrumman.com/',
    startDate: '2020-08-01',
    endDate: '2024-08-26',
    summary: 'Northrop Grumman is a leading global aerospace and defense company specializing in advanced technology solutions for military, space, and cybersecurity applications.',
    highlights: [
      'Holds a secret-level security clearance while working with an Agile software team to orchestrate key implementations for flight software and Mission payloads.',
      'Actively engaged in the design, deployment, implementation, and support of cost saving tools and interfaces to support different programs and Business Units leading to 30% increase in departments efficiency in my first year.',
      'Works with stakeholders to design, implement and evaluate strategies to meet customers expectations and operating requirements.',
      'Led a Research and Development team for the development of Artificial Intelligence capabilities using AWS and Azure environments.',
    ],
  },
  {
    name: 'Amazon',
    position: 'Snr. Human Resources Assistant',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2020-06-01',
    endDate: '2020-10-20',
    summary: '',
    highlights: [
      'Acts as liaison between employee and management to answer questions or concerns regarding company policies, practices and regulations.',
      'Process, verify and maintain various documentations for hiring, training and performance evaluations.',
      'Engages with employees and managers to ensure team is in compliance with company policies',
    ],
  },

  {
    name: 'Amazon',
    position: 'Human Resources Assistant II',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2020-02-01',
    endDate: '2020-06-01',
    summary: '',
    highlights: [
      'Acts as liaison between employee and management to answer questions or concerns regarding company policies, practices and regulations.',
      'Process, verify and maintain various documentations for hiring, training and performance evaluations.',
    ],
  },
  {
    name: 'Amazon',
    position: 'Human Resources Assistant I',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2017-09-01',
    endDate: '2020-02-01',
    summary: '',
    highlights: [
      ' Ensures data integrity in MyTime systems, Salesforce etc. for over 3000 associates at site level',
      'Organizes all HR department records, employment files and drive associate engagements',
      'Creates and maintain over 28 macro-enabled HR spreadsheets for efficient associate engagements weekly using VBA code',
    ],
  },

  {
    name: 'Amazon',
    position: 'Seasonal Process Assistant',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2016-10-01',
    endDate: '2017-01-01',
    summary: '',
    highlights: [
      'Provides support and coaching for Associates to improve productivity',
      'Provides support for department and Managers as required',
      'Helps in various department areas to aid production goals',
    ],
  },

  {
    name: 'Amazon',
    position: 'Inbound Problem Solver',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2015-07-27',
    endDate: '2017-09-01',
    summary: '',
    highlights: [
      'Uses critical thinking skills to evaluate and solve stow associates problems in a timely manner',
      'Ensuring a fast-paced and accurate methods in approaching in solving problems on daily basis',
    ],
  },

  {
    name: 'Integrity Staffing Solutions',
    position: 'Inbound stow Associate',
    url: 'https://www.amazon.jobs/en/',
    startDate: '2015-05-01',
    endDate: '2015-07-26',
    summary: '',
    highlights: [
      'Stows inventory from totes into corresponding bins',
      'Maintains accuracy in moving items from totes to bins while meeting department goals and rates',
    ],
  },

  {
    name: 'The Laurels of Bon Air',
    position: 'Nursing Assistant',
    url: '',
    startDate: '2015-03-01',
    endDate: '2015-04-30',
    summary: '',
    highlights: [
      'Assisted residents with activities of daily living',
      'catered for the needs of a minimum of 12 patients per night in a long-term-care facility',
      'Maintained accurate clinical skills in assessing vital signs',
      'Complied with HIPAA standards in all patient documentation and interactions',
    ],
  },
];

export default work;
