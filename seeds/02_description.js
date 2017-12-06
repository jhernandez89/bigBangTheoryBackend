
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('description').del()
    .then(() =>
      // Inserts seed entries
      knex('description').insert([
        {
          description: 'After an unsuccessful visit to the high-IQ sperm bank, Dr. Leonard Hofstadter and Dr. Sheldon Cooper return home to find aspiring actress Penny is their new neighbor across the hall from their apartment. Sheldon thinks Leonard, who is immediately interested in her, is chasing a dream he will never catch. Leonard invites Penny to his and Sheldon\'s apartment for Indian food, where she asks to use their shower since hers is broken. While wrapped in a towel, she gets to meet their visiting friends Howard Wolowitz, a wannabe ladies\' man who tries to hit on her, and Rajesh Koothrappali, who is unable to speak to her as he suffers from selective mutism in the presence of women. Leonard is so infatuated with Penny that, after helping her use their shower, he agrees to retrieve her TV from her ex-boyfriend Kurt. However, Kurt\'s physical superiority overwhelms Leonard\'s and Sheldon\'s combined IQ of 360, and they return without pants or TV. Penny, feeling bad, offers to take the guys out to dinner, initiating a friendship with them.',
          episode_id: 1
        },
        {
          description: 'When Sheldon and Leonard drop off a box of flat pack furniture that came for Penny, Sheldon is deeply disturbed at how messy and disorganized her apartment is. Later that night, while Penny sleeps, the obsessive-compulsive Sheldon, unable to sleep, sneaks into her apartment to organize and clean it. Leonard finds out and reluctantly helps him. The next morning, Penny is furious to discover they had been in her apartment. Sheldon tries to apologize to Penny but fails by remarking that Leonard is a "gentle and thorough lover". Later, Penny encounters Raj in the hallway. Though he cannot talk to Penny, she calms down whilst telling him about the issue, reasoning the guys were just trying to help her, and hugs Raj. Then Leonard apologizes, prompting Penny to forgive and hug him.',
          episode_id: 2
        }
      ]));
};
