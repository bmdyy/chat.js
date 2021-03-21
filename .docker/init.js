db = new Mongo().getDB("chatjs");

db.createCollection("users");
db.createCollection("messages");

db.users.insert([
    {_id:1, username:'anton',password:'1f29f2d29f02f2608eb72d45625ba3a851eda1ee2be1bda22427a584b787c722'}, // anton:anton
    {_id:2, username:'bmdyy',password:'fde0870a3adfef9a02a0f89dc36e6bcfbeade8a6667c837c93ee48a952402ec3'}, // bmdyy:bmdyy
    {_id:3, username:'john',password:'96d9632f363564cc3032521409cf22a852f2032eec099ed5967c0d000cec607a'}, // john:john
    {_id:4, username:'darkrider',password:'5062a87945ddf4dbe938d03fe8977a4f361dee0bb457fa7d751f12843fec717a'}, // darkrider:darkrider
    {_id:5, username:'nightbus',password:'454c11029503e362055ac28b5a33a6702bd3bc124b9a5a75494843b9836d0223'}, // nightbus:nightbus
    {_id:6, username:'swallow',password:'7276e0a742cf9880d1cfbb43a905e2ff6769bf461843399cfecfca0d68daf1bd'} // swallow:swallow
]);

db.messages.insert([
    {author:1,datetime:new Date(),text:'Guns are for show. Knives are for pros'},
    {author:2,datetime:new Date(),text:'First you take a drink, then the drink takes a drink, then the drink takes you '},
    {author:3,datetime:new Date(),text:'You already know how I feel about you. So what are you going to do about it?'},
    {author:4,datetime:new Date(),text:'ok'},
    {author:5,datetime:new Date(),text:'tommorow'},
    {author:6,datetime:new Date(),text:'When was the last time you climbed a tree?'},
    {author:3,datetime:new Date(),text:'Chili crab for breakfast! Why not? It\'s a grain. It\'s like, like, grits, but with high self-esteem.'},
    {author:6,datetime:new Date(),text:'Go on'},
    {author:2,datetime:new Date(),text:'meaning?'},
    {author:5,datetime:new Date(),text:'it involves you'},
    {author:3,datetime:new Date(),text:'Why don\'t you retweet this message?'},
    {author:5,datetime:new Date(),text:'Bad Tweet? Just add Tequila! Bad sex? Just add Tequila! Bad day? Just add Tequila! Bad driving? Just add Tequila... Wait, no. Maybe no.'},
    {author:4,datetime:new Date(),text:'Go do that voodoo that you do so well!'},
    {author:4,datetime:new Date(),text:'What was your favorite birthday or Christmas present?'},
    {author:1,datetime:new Date(),text:'you must seek'},
    {author:3,datetime:new Date(),text:'Why didn\'t Noah swat those two mosquitoes?'},
    {author:4,datetime:new Date(),text:'mmm ok'},
    {author:2,datetime:new Date(),text:'I see so you think, can you also DO?'},
    {author:4,datetime:new Date(),text:'meaning?'},
    {author:2,datetime:new Date(),text:'I see so you think, can you also DO?'},
    {author:1,datetime:new Date(),text:'Think and wonder , wonder and think '},
    {author:6,datetime:new Date(),text:'Why is the alphabet in that order? Is it because of that song?'},
    {author:5,datetime:new Date(),text:'I might not be smarter than a 5th grader, but I can buy beer.'},
    {author:4,datetime:new Date(),text:'anal'},
    {author:6,datetime:new Date(),text:'How can you govern a country which has 246 varieties of Massaman curry?'},
    {author:4,datetime:new Date(),text:'Go on'},
    {author:3,datetime:new Date(),text:'I see you find yourself very interesting'},
    {author:1,datetime:new Date(),text:'I see you find yourself very interesting'},
    {author:2,datetime:new Date(),text:'meaning?'},
    {author:6,datetime:new Date(),text:'I said, GOOD, are you deaf '},
    {author:3,datetime:new Date(),text:'What skill would you like to master?'},
    {author:1,datetime:new Date(),text:'Theres no limit to how much youll know, depending how far beyond you go'},
    {author:3,datetime:new Date(),text:'how are you'},
    {author:3,datetime:new Date(),text:'How do I take care of my pet potato?'},
    {author:2,datetime:new Date(),text:'the one on the left'},
    {author:6,datetime:new Date(),text:'Which skill would you love to learn?'},
    {author:4,datetime:new Date(),text:'Every time I have my picture taken I get hungry because I hear \'Boshintang\' so I start to think of a nice Boshintang sandwich.'},
    {author:3,datetime:new Date(),text:'the nearest one'},
    {author:1,datetime:new Date(),text:'Which planet in the solar system would you visit?'},
    {author:4,datetime:new Date(),text:'Over there, over there . . . '},
    {author:3,datetime:new Date(),text:'Where would you love to go on holiday?'},
    {author:6,datetime:new Date(),text:'Would you rather be alone for the rest of your life or always be surrounded by annoying people?'},
    {author:5,datetime:new Date(),text:'Fear and ignorance would gay-marry each other if they weren\'t both opposed to it'},
    {author:2,datetime:new Date(),text:'Are you usually early or late?'},
    {author:3,datetime:new Date(),text:'Welcome'},
    {author:1,datetime:new Date(),text:'iced tea not just a drink but a complete diet '},
    {author:2,datetime:new Date(),text:'Have you locked yourself out of the house?'},
    {author:3,datetime:new Date(),text:'Would you rather be reincarnated as a fly or just cease to exist after you die?'},
    {author:4,datetime:new Date(),text:'Go on'},
    {author:4,datetime:new Date(),text:'I could drink rat soup all day'},
    {author:5,datetime:new Date(),text:'Go on'},
    {author:6,datetime:new Date(),text:'If you don\'t cut the Steak Tartare in pieces and just eat the whole Steak Tartare, then you only had one piece.'},
    {author:5,datetime:new Date(),text:'the one next to the other one'},
    {author:1,datetime:new Date(),text:'Which office machine is your favorite?'},
    {author:3,datetime:new Date(),text:'you talk about yourself alot'},
    {author:2,datetime:new Date(),text:'Ling Island Iced Tea not just a drink but a complete diet '},
    {author:3,datetime:new Date(),text:'Yo wat up?'},
]);