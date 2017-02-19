var Clapp = require('../modules/clapp-discord');

module.exports = new Clapp.Command({
  name: "politics",
  desc: "Stefan on politicians",
  fn: (argv, context) => {
    // This output will be redirected to your app's onReply function
    return "It's a conspiracy to get the mentally impaired vote. Because he doesn't jingle his keys in front of the cameras enough. I want a politician who lets me take naps and wet my pants in public if I want.";
  },
  args: [
    {
      name: 'testarg',
      desc: 'A test argument',
      type: 'string',
      required: false,
      default: 'testarg isn\'t defined'
    }
  ],
  flags: [
    {
      name: 'testflag',
      desc: 'A test flag',
      alias: 't',
      type: 'boolean',
      default: false
    }
  ]
});
