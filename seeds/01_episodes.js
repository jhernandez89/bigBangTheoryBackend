
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('episodes').del()
    .then(() =>
      // Inserts seed entries
      knex('episodes').insert([
        { 
          episode_title: 'Pilot',
          season: 1,
          episode_number: 1,
          episode_length: '23:00 min',
          release_date: 'September 24, 2007',
          interesting_fact: 'An unaired pilot exist. Also, the scene where Sheldon and Leonard observe Penny through her open apartment door would be repeated as an homage in the series 100th episode. The characters would even be dressed similarly, right down to Penny wearing the exact same blue top that she wears here.',
          image: 'www.justwatch.com/images/backdrop/458881/s1440/the-big-bang-theory',
        },
        { 
          episode_title: 'The Big Bran Hypothesis”',
          season: 1,
          episode_number: 2,
          episode_length: '21:00 min',
          release_date: 'October 1, 2007',
          interesting_fact: 'The title refers to the cereals that Sheldon stores on top of the refrigerator, sorted by fiber content, specifically the highest fiber cereal, "Big Bran"',
          image: 'www.justwatch.com/images/backdrop/458881/s1440/the-big-bang-theory',
        },
      ]));
};
