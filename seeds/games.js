
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('games').del()
    .then(() =>
      // Inserts seed entries
       knex('games').insert([
        { imageOne: 'image test', 
        imageTwo: 'image test',
        title: 'title test',
        description: 'description test',
        videoURL: 'video url test',
        amazonLink: 'amazon link test',
        gameLink: 'game link test' },
       ]));
};
