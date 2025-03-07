const data = [
  {
    quoted: 'Ive learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel',
    source: 'Maya Angelou',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg/220px-Angelou_at_Clinton_inauguration_%28cropped_2%29.jpg',
  },
  {
    quoted: 'Everybody has a plan until they get punched in the mouth',
    source: 'Mike Tyson',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/220px-Mike_Tyson_2019_by_Glenn_Francis.jpg',
  },
  {
    quoted: 'Perfect is the enemy of Good',
    source: 'Voltaire',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Nicolas_de_Largilli%C3%A8re%2C_Fran%C3%A7ois-Marie_Arouet_dit_Voltaire_adjusted.png/800px-Nicolas_de_Largilli%C3%A8re%2C_Fran%C3%A7ois-Marie_Arouet_dit_Voltaire_adjusted.png',
  },
  {
    quoted: 'Do not pray for an easy life, pray for the strength to endure a difficult one.',
    source: 'Bruce Lee',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Bruce-Lee-as-Kato-1967-retouched.jpg',
  },
  {
    quoted: 'Scientists study the world as it is; engineers create the world that has never been.',
    source: 'Theodore von Kármán',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Dr._von_K%C3%A1rm%C3%A1n%2C_posed_in_his_office_chair_%28cropped%29.jpg',
  },
  {
    quoted: 'The way to get started is to quit talking and begin doing.',
    source: 'Walt Disney',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Walt_Disney_1946.JPG',
  },
  {
    quoted: 'The problem is not the problem. The problem is your attitude about the problem.',
    source: 'Captain Jack Sparrow',
    image: 'https://en.wikipedia.org/wiki/Jack_Sparrow#/media/File:OriginalSparrow.jpg',
  },
  {
    quoted: 'Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.',
    source: 'Albert Einstein',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg',
  },
  {
    quoted: 'Never be limited by other people\'s limited imaginations',
    source: 'Mae Jemison',
    image: 'https://en.wikipedia.org/wiki/Mae_Jemison#/media/File:Mae_Carol_Jemison.jpg',
  },
  {
    quoted: 'Before you are a leader, success is all about growing yourself. When you become a leader, success is all about growing others.',
    source: 'Jack Welch',
    image: '',
  },
  {
    quoted: 'Keep it simple: as simple as possible, but no simpler.',
    source: 'Albert Einstein',
    image: 'https://en.wikipedia.org/wiki/Albert_Einstein#/media/File:Albert_Einstein_Head_(cropped).jpg',
  },
  {
    quoted: 'Leadership is not about being in charge. It is about taking care of those in your charge.',
    source: 'Simon Sinek',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Simon_Sinek.jpg/220px-Simon_Sinek.jpg',
  },
  {
    quoted: 'Culture eats strategy for breakfast.',
    source: 'Peter Drucker',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_Drucker-2002.jpg/220px-Peter_Drucker-2002.jpg',
  },
  {
    quoted: 'Creativity is intelligence having fun.',
    source: 'Albert Einstein',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg',
  },
  {
    quoted: 'An essential aspect of creativity is not being afraid to fail.',
    source: 'Edwin Land',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Edwin_H._Land_%28Polaroid%29.jpg/220px-Edwin_H._Land_%28Polaroid%29.jpg',
  },
  {
    quoted: 'The best way to predict the future is to create it.',
    source: 'Peter Drucker',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_Drucker-2002.jpg/220px-Peter_Drucker-2002.jpg',
  },
  {
    quoted: 'Every act of creation is first an act of destruction.',
    source: 'Pablo Picasso',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Portrait_of_Pablo_Picasso%2C_1908.jpg/220px-Portrait_of_Pablo_Picasso%2C_1908.jpg',
  },
  {
    quoted: 'There is no innovation and creativity without failure. Period.',
    source: 'Brené Brown',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Brene_Brown_2012.jpg/220px-Brene_Brown_2012.jpg',
  },
  {
    quoted: 'Hardships often prepare ordinary people for an extraordinary destiny.',
    source: 'C.S. Lewis',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/C.S._Lewis_%28lightened%29.jpg/220px-C.S._Lewis_%28lightened%29.jpg',
  },
  {
    quoted: 'The only limit to our realization of tomorrow will be our doubts of today.',
    source: 'Franklin D. Roosevelt',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FDR_in_1933.jpg/220px-FDR_in_1933.jpg',
  },
  {
    quoted: 'If you want to lift yourself up, lift up someone else.',
    source: 'Booker T. Washington',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Booker_T_Washington_retouched_flattened-crop.jpg/220px-Booker_T_Washington_retouched_flattened-crop.jpg',
  },
  {
    quoted: 'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    source: 'Winston Churchill',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sir_Winston_Churchill_-_19086236948.jpg/220px-Sir_Winston_Churchill_-_19086236948.jpg',
  },
  {
    quoted: 'Do what you can, with what you have, where you are.',
    source: 'Theodore Roosevelt',
    image: 'https://en.wikipedia.org/wiki/File:Theodore_Roosevelt_by_the_Pach_Bros.jpg',
  },
  {
    quoted: 'People dont care how much you know until they know how much you care.',
    source: 'Theodore Roosevelt',
    image: 'https://en.wikipedia.org/wiki/File:Theodore_Roosevelt_by_the_Pach_Bros.jpg',
  },
  {
    quoted: 'You dont build a business. You build people, and people build the business.',
    source: 'Zig Ziglar',
    image: 'https://en.wikipedia.org/wiki/File:Zig_Ziglar_at_Get_Motivated_Seminar,_Cow_Palace_2009-3-24_3.jpg',
  },
  {
    quoted: 'The strength of the team is each individual member. The strength of each member is the team.',
    source: 'Phil Jackson',
    image: 'https://en.wikipedia.org/wiki/File:Phil_Jackson_3_cropped.jpg',
  },
  {
    quoted: 'Diversity is being invited to the party; inclusion is being asked to dance.',
    source: 'Verna Myers',
    image: 'https://en.wikipedia.org/wiki/File:Verna_Myers.jpg',
  },
  {
    quoted: 'Kind words can be short and easy to speak, but their echoes are truly endless.',
    source: 'Mother Teresa',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mother_Teresa_1.jpg/220px-Mother_Teresa_1.jpg',
  },
];

export default data;
