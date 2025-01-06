const quotesData = [
    {
        "author": "Steve Martin",
        "quote": "A day without sunshine is like, you know, night.",
        "tags": [
            "humor",
            "obvious",
            "simile"
        ],
        "likes": 35242
    },
    {
        "author": "Lao Tzu",
        "quote": "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.",
        "tags": [
            "courage",
            "deeply-loved",
            "love",
            "strength",
            "widely-misattributed"
        ],
        "likes": 34569
    },
    {
        "author": "Mark Twain",
        "quote": "Never put off till tomorrow what may be done day after tomorrow just as well.",
        "tags": [
            "procrastination"
        ],
        "likes": 34505
    },
    {
        "author": "Kent M. Keith",
        "quote": "The Paradoxical Commandments\n\nPeople are illogical, unreasonable, and self-centered.\nLove them anyway.\n\nIf you do good, people will accuse you of selfish ulterior motives.\nDo good anyway.\n\nIf you are successful, you will win false friends and true enemies.\nSucceed anyway.\n\nThe good you do today will be forgotten tomorrow.\nDo good anyway.\n\nHonesty and frankness make you vulnerable.\nBe honest and frank anyway.\n\nThe biggest men and women with the biggest ideas can be shot down by the smallest men and women with the smallest minds.\nThink big anyway.\n\nPeople favor underdogs but follow only top dogs.\nFight for a few underdogs anyway.\n\nWhat you spend years building may be destroyed overnight.\nBuild anyway.\n\nPeople really need help but may attack you if you do help them.\nHelp people anyway.\n\nGive the world the best you have and you'll get kicked in the teeth.\nGive the world the best you have anyway.",
        "tags": [
            "forgiveness",
            "goodness",
            "happiness",
            "honesty",
            "kindness",
            "misattributed-to-mother-teresa",
            "world"
        ],
        "likes": 34271
    },
    {
        "author": "Friedrich Nietzsche",
        "quote": "That which does not kill us makes us stronger.",
        "tags": [
            "paraphrased",
            "strength"
        ],
        "likes": 33906
    },
    {
        "author": "Dr. Seuss",
        "quote": "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
        "tags": [
            "inspirational"
        ],
        "likes": 33855
    },
    {
        "author": "George Eliot",
        "quote": "It is never too late to be what you might have been.",
        "tags": [
            "inspirational",
            "misattributed",
            "source-unknown"
        ],
        "likes": 33684
    },
    {
        "author": "Ralph Waldo Emerson",
        "quote": "For every minute you are angry you lose sixty seconds of happiness.",
        "tags": [
            "happiness"
        ],
        "likes": 32847
    },
    {
        "author": "Marilyn Monroe",
        "quote": "This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.",
        "tags": [
            "attributed-no-source",
            "friends",
            "heartbreak",
            "inspirational",
            "life",
            "love",
            "sisters"
        ],
        "likes": 32372
    },
    {
        "author": "J.K. Rowling",
        "quote": "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        "tags": [
            "albus-dumbledore",
            "courage",
            "friends"
        ],
        "likes": 32209
    },
    {
        "author": "Douglas Adams",
        "quote": "I love deadlines. I love the whooshing noise they make as they go by.",
        "tags": [
            "deadlines",
            "humor",
            "humour",
            "work",
            "writing"
        ],
        "likes": 32110
    },
    {
        "author": "Friedrich Nietzsche",
        "quote": "I'm not upset that you lied to me, I'm upset that from now on I can't believe you.",
        "tags": [
            "lies",
            "lying",
            "trust"
        ],
        "likes": 31414
    },
    {
        "author": "Mother Teresa",
        "quote": "If you judge people, you have no time to love them.",
        "tags": [
            "attributed-no-source"
        ],
        "likes": 31348
    },
    {
        "author": "Maya Angelou",
        "quote": "There is no greater agony than bearing an untold story inside you.",
        "tags": [
            "1970",
            "inspirational",
            "stories",
            "writing"
        ],
        "likes": 31320
    },
    {
        "author": "Sarah Dessen",
        "quote": "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
        "tags": [
            "love"
        ],
        "likes": 31225
    },
    {
        "author": "Albert Einstein",
        "quote": "If you can't explain it to a six year old, you don't understand it yourself.",
        "tags": [
            "attributed-no-source",
            "simplicity",
            "understand"
        ],
        "likes": 31148
    },
    {
        "author": "Haruki Murakami",
        "quote": "If you only read the books that everyone else is reading, you can only think what everyone else is thinking.",
        "tags": [
            "books",
            "thought"
        ],
        "likes": 31006
    },
    {
        "author": "Robert A. Heinlein",
        "quote": "Love is that condition in which the happiness of another person is essential to your own.",
        "tags": [
            "essential",
            "happiness",
            "love"
        ],
        "likes": 30716
    },
    {
        "author": "Garrison Keillor",
        "quote": "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
        "tags": [
            "humor",
            "religion"
        ],
        "likes": 30163
    },
    {
        "author": "Pablo Picasso",
        "quote": "Everything you can imagine is real.",
        "tags": [
            "art",
            "imagination",
            "inspirational",
            "life"
        ],
        "likes": 29817
    },
    {
        "author": "Jorge Luis Borges",
        "quote": "I have always imagined that Paradise will be a kind of library.",
        "tags": [
            "books",
            "library"
        ],
        "likes": 29750
    },
    {
        "author": "Robert A. Heinlein",
        "quote": "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
        "tags": [
            "cats",
            "humor",
            "women"
        ],
        "likes": 28761
    },
    {
        "author": "Anaïs Nin",
        "quote": "We don't see things as they are, we see them as we are.",
        "tags": [],
        "likes": 28667
    },
    {
        "author": "Bob Marley",
        "quote": "You may not be her first, her last, or her only. She loved before she may love again. But if she loves you now, what else matters? She's not perfect—you aren't either, and the two of you may never be perfect together but if she can make you laugh, cause you to think twice, and admit to being human and making mistakes, hold onto her and give her the most you can. She may not be thinking about you every second of the day, but she will give you a part of her that she knows you can break—her heart. So don't hurt her, don't change her, don't analyze and don't expect more than she can give. Smile when she makes you happy, let her know when she makes you mad, and miss her when she's not there.",
        "tags": [
            "love"
        ],
        "likes": 28275
    },
    {
        "author": "Suzanne Collins",
        "quote": "You love me. Real or not real?\nI tell him, 'Real.'",
        "tags": [
            "katniss",
            "love",
            "peeta",
            "suzanne-collins",
            "the-hunger-games"
        ],
        "likes": 28136
    },
    {
        "author": "Dr. Seuss",
        "quote": "Sometimes the questions are complicated and the answers are simple.",
        "tags": [
            "attributed-no-source",
            "life"
        ],
        "likes": 28111
    },
    {
        "author": "C.S. Lewis",
        "quote": "You can never get a cup of tea large enough or a book long enough to suit me.",
        "tags": [
            "books",
            "inspirational",
            "reading",
            "tea"
        ],
        "likes": 27803
    },
    {
        "author": "Lemony Snicket",
        "quote": "Never trust anyone who has not brought a book with them.",
        "tags": [
            "books",
            "reading"
        ],
        "likes": 27765
    },
    {
        "author": "William Nicholson",
        "quote": "We read to know we're not alone.",
        "tags": [
            "misattributed-to-c-s-lewis",
            "reading"
        ],
        "likes": 27027
    },
    {
        "author": "George Bernard Shaw",
        "quote": "Life isn't about finding yourself. Life is about creating yourself.",
        "tags": [
            "inspirational",
            "life",
            "yourself"
        ],
        "likes": 27012
    },
    {
        "author": "J.R.R. Tolkien",
        "quote": "Not all those who wander are lost.",
        "tags": [
            "inspirational",
            "travel",
            "wandering"
        ],
        "likes": 26781
    },
    {
        "author": "Oscar Wilde",
        "quote": "Be yourself; everyone else is already taken.",
        "tags": [
            "self",
            "life",
            "individuality"
        ],
        "likes": 26704
    },
    {
        "author": "Brene Brown",
        "quote": "Vulnerability is not winning or losing; it's having the courage to show up and be seen when we have no control over the outcome.",
        "tags": [
            "courage",
            "vulnerability",
            "self-worth"
        ],
        "likes": 26689
    },
    {
        "author": "Albert Einstein",
        "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        "tags": [
            "life",
            "balance",
            "inspirational"
        ],
        "likes": 26649
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "Be the change that you wish to see in the world.",
        "tags": [
            "change",
            "inspirational"
        ],
        "likes": 26583
    },
    {
        "author": "Confucius",
        "quote": "Our greatest glory is not in never falling, but in rising every time we fall.",
        "tags": [
            "glory",
            "life",
            "strength"
        ],
        "likes": 26409
    },
    {
        "author": "Steve Jobs",
        "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
        "tags": [
            "work",
            "life",
            "inspiration"
        ],
        "likes": 26168
    },
    {
        "author": "Abraham Lincoln",
        "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
        "tags": [
            "life",
            "inspiration"
        ],
        "likes": 25934
    },
    {
        "author": "Helen Keller",
        "quote": "Alone we can do so little; together we can do so much.",
        "tags": [
            "together",
            "teamwork",
            "inspiration"
        ],
        "likes": 25712
    },
    {
        "author": "Martin Luther King Jr.",
        "quote": "I have decided to stick with love. Hate is too great a burden to bear.",
        "tags": [
            "love",
            "inspiration"
        ],
        "likes": 25568
    },
    {
        "author": "John Lennon",
        "quote": "Life is what happens when you're busy making other plans.",
        "tags": [
            "life",
            "plans",
            "inspiration"
        ],
        "likes": 25456
    },
    {
        "author": "J.R.R. Tolkien",
        "quote": "The world is indeed full of peril, and in it there are many dark places.",
        "tags": [
            "darkness",
            "peril",
            "danger"
        ],
        "likes": 25379
    },
    {
        "author": "Rainer Maria Rilke",
        "quote": "Let everything happen to you. Beauty and terror. Just keep going. No feeling is final.",
        "tags": [
            "life",
            "feelings",
            "beauty"
        ],
        "likes": 25214
    },
    {
        "author": "John Steinbeck",
        "quote": "And now that you don't have to be perfect, you can be good.",
        "tags": [
            "life",
            "imperfection"
        ],
        "likes": 25156
    },
    {
        "author": "Eleanor Roosevelt",
        "quote": "The future belongs to those who believe in the beauty of their dreams.",
        "tags": [
            "dreams",
            "future",
            "belief"
        ],
        "likes": 25099
    },
    {
        "author": "Maya Angelou",
        "quote": "We may encounter many defeats, but we must not be defeated.",
        "tags": [
            "defeat",
            "strength",
            "resilience"
        ],
        "likes": 24967
    },
    {
        "author": "Marianne Williamson",
        "quote": "Our deepest fear is not that we are inadequate. Our deepest fear is that we are powerful beyond measure. It is our light, not our darkness, that most frightens us.",
        "tags": [
            "fear",
            "self-empowerment"
        ],
        "likes": 24829
    },
    {
        "author": "Ralph Waldo Emerson",
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "tags": [
            "self",
            "individuality",
            "life"
        ],
        "likes": 24701
    },
    {
        "author": "Dr. Seuss",
        "quote": "Unless someone like you cares a whole awful lot, nothing is going to get better. It's not.",
        "tags": [
            "care",
            "change",
            "inspiration"
        ],
        "likes": 24679
    },
    {
        "author": "Khalil Gibran",
        "quote": "Your children are not your children. They are the sons and daughters of Life's longing for itself.",
        "tags": [
            "children",
            "parenting",
            "life"
        ],
        "likes": 24523
    },
    {
        "author": "Mahatma Gandhi",
        "quote": "The best way to find yourself is to lose yourself in the service of others.",
        "tags": [
            "self",
            "service",
            "life"
        ],
        "likes": 24412
    },
    {
        "author": "F. Scott Fitzgerald",
        "quote": "In a real dark night of the soul, it is always three o'clock in the morning, day after day.",
        "tags": [
            "darkness",
            "soul",
            "life"
        ],
        "likes": 24309
    },
    {
        "author": "Albert Einstein",
        "quote": "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution.",
        "tags": [
            "imagination",
            "knowledge"
        ],
        "likes": 24287
    },
    {
        "author": "Frida Kahlo",
        "quote": "I paint flowers so they will not die.",
        "tags": [
            "art",
            "flowers",
            "life"
        ],
        "likes": 24134
    },
    {
        "author": "Vincent Van Gogh",
        "quote": "I dream my painting and I paint my dream.",
        "tags": [
            "art",
            "dream",
            "painting"
        ],
        "likes": 24012
    },
    {
        "author": "Virginia Woolf",
        "quote": "I am not afraid of storms, for I am learning how to sail my ship.",
        "tags": [
            "storms",
            "strength",
            "life"
        ],
        "likes": 23989
    },
    {
        "author": "Walt Disney",
        "quote": "The way to get started is to quit talking and begin doing.",
        "tags": [
            "action",
            "inspiration"
        ],
        "likes": 23870
    },
    {
        "author": "Nelson Mandela",
        "quote": "It always seems impossible until it's done.",
        "tags": [
            "impossibility",
            "inspiration"
        ],
        "likes": 23759
    },
    {
        "author": "Oscar Wilde",
        "quote": "We are all in the gutter, but some of us are looking at the stars.",
        "tags": [
            "inspiration",
            "life",
            "dreams"
        ],
        "likes": 23645
    },
    {
        "author": "William Shakespeare",
        "quote": "To be, or not to be, that is the question.",
        "tags": [
            "life",
            "philosophy",
            "existentialism"
        ],
        "likes": 23589
    },
    {
        "author": "Mark Twain",
        "quote": "Get your facts first, then you can distort them as you please.",
        "tags": [
            "humor",
            "facts",
            "distortion"
        ],
        "likes": 23476
    },
    {
        "author": "Abraham Lincoln",
        "quote": "The best way to predict your future is to create it.",
        "tags": [
            "future",
            "life",
            "action"
        ],
        "likes": 23345
    },
    {
        "author": "J.K. Rowling",
        "quote": "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        "tags": [
            "happiness",
            "darkness",
            "inspiration"
        ],
        "likes": 23210
    },
    {
        "author": "Buddha",
        "quote": "The mind is everything. What you think you become.",
        "tags": [
            "mind",
            "thoughts",
            "life"
        ],
        "likes": 23112
    },
    {
        "author": "Mother Teresa",
        "quote": "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        "tags": [
            "love",
            "kindness",
            "happiness"
        ],
        "likes": 23008
    },
    {
        "author": "C.S. Lewis",
        "quote": "We are what we believe we are.",
        "tags": [
            "self-belief",
            "life",
            "inspiration"
        ],
        "likes": 22941
    },
    {
        "author": "Jane Austen",
        "quote": "I declare after all there is no enjoyment like reading! How much sooner one tires of any thing than of a book! -- When I have a house of my own, I shall be miserable if I have not an excellent library.",
        "tags": ["books", "library", "reading"],
        "likes": 20394
    },
    {
        "author": "C.S. Lewis",
        "quote": "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If you want to make sure of keeping it intact you must give it to no one, not even an animal. Wrap it carefully round with hobbies and little luxuries; avoid all entanglements. Lock it up safe in the casket or coffin of your selfishness. But in that casket, safe, dark, motionless, airless, it will change. It will not be broken; it will become unbreakable, impenetrable, irredeemable. To love is to be vulnerable.",
        "tags": ["love"],
        "likes": 20361
    },
    {
        "author": "Bob Marley",
        "quote": "Who are you to judge the life I live? I know I'm not perfect - and I don't live to be - but before you start pointing fingers... make sure your hands are clean!",
        "tags": ["judge", "life", "live", "perfection"],
        "likes": 20305
    },
    {
        "author": "Marilyn Monroe",
        "quote": "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
        "tags": ["attributed-no-source", "love"],
        "likes": 20144
    },
    {
        "author": "John Green",
        "quote": "The only way out of the labyrinth of suffering is to forgive.",
        "tags": ["compassion", "life", "suffering"],
        "likes": 20094
    },
    {
        "author": "Jess C. Scott",
        "quote": "When someone loves you, the way they talk about you is different. You feel safe and comfortable.",
        "tags": ["desire", "emotion", "friendship", "honesty", "imagination", "individuality", "life", "love", "passion", "reality", "relationships", "romance", "truth", "wisdom", "wise-words"],
        "likes": 19924
    },
    {
        "author": "Paulo Coelho",
        "quote": "And, when you want something, all the universe conspires in helping you to achieve it.",
        "tags": ["inspirational"],
        "likes": 19850
    },
    {
        "author": "Oscar Wilde",
        "quote": "The books that the world calls immoral are books that show the world its own shame.",
        "tags": ["books", "morality", "reading"],
        "likes": 19844
    },
    {
        "author": "Benjamin Franklin Wade",
        "quote": "Go to heaven for the climate and hell for the company.",
        "tags": ["humor", "misattributed-mark-twain", "philosophy", "theology"],
        "likes": 19777
    },
    {
        "author": "George Carlin",
        "quote": "The reason I talk to myself is because I’m the only one whose answers I accept.",
        "tags": ["humor", "insanity", "lies", "lying", "self-indulgence", "truth"],
        "likes": 19759
    },
    {
        "author": "A.A. Milne",
        "quote": "Piglet sidled up to Pooh from behind.\n\"Pooh!\" he whispered.\n\"Yes, Piglet?\"\n\"Nothing,\" said Piglet, taking Pooh's paw. \"I just wanted to be sure of you.”",
        "tags": ["friendship", "piglet", "pooh", "reassurance"],
        "likes": 19684
    },
    {
        "author": "J.K. Rowling",
        "quote": "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        "tags": ["live-death-love"],
        "likes": 19627
    },
    {
        "author": "Stephenie Meyer",
        "quote": "He's like a drug for you, Bella.",
        "tags": ["drug", "romance", "simile"],
        "likes": 19627
    },
    {
        "author": "Sylvia Plath",
        "quote": "I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want. And why do I want? I want to live and feel all the shades, tones and variations of mental and physical experience possible in my life. And I am horribly limited.",
        "tags": ["books", "life", "limits"],
        "likes": 19592
    },
    {
        "author": "Ernest Hemingway",
        "quote": "There is nothing to writing. All you do is sit down at a typewriter and bleed.",
        "tags": ["good", "writing"],
        "likes": 19402
    },
    {
        "author": "J.K. Rowling",
        "quote": "Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears.\n\"After all this time?\"\n\"Always,\" said Snape.",
        "tags": ["dumbledore", "life", "love", "snape"],
        "likes": 19332
    },
    {
        "author": "Marilyn Monroe",
        "quote": "A wise girl kisses but doesn't love, listens but doesn't believe, and leaves before she is left.",
        "tags": ["attributed-no-source"],
        "likes": 19309
    },
    {
        "author": "Rosemarie Urquico",
        "quote": "You should date a girl who reads.\nDate a girl who reads. Date a girl who spends her money on books instead of clothes, who has problems with closet space because she has too many books. Date a girl who has a list of books she wants to read, who has had a library card since she was twelve.\nFind a girl who reads. You’ll know that she does because she will always have an unread book in her bag. She’s the one lovingly looking over the shelves in the bookstore, the one who quietly cries out when she has found the book she wants. You see that weird chick sniffing the pages of an old book in a secondhand book shop? That’s the reader. They can never resist smelling the pages, especially when they are yellow and worn.\nShe’s the girl reading while waiting in that coffee shop down the street. If you take a peek at her mug, the non-dairy creamer is floating on top because she’s kind of engrossed already. Lost in a world of the author’s making. Sit down. She might give you a glare, as most girls who read do not like to be interrupted. Ask her if she likes the book.\nBuy her another cup of coffee.\nLet her know what you really think of Murakami. See if she got through the first chapter of *Fellowship*. Understand that if she says she understood James Joyce’s *Ulysses* she’s just saying that to sound intelligent. Ask her if she loves Alice or she would like to be Alice.\nIt’s easy to date a girl who reads. Give her books for her birthday, for Christmas, for anniversaries. Give her the gift of words, in poetry and in song. Give her Neruda, Pound, Sexton, Cummings. Let her know that you understand that words are love. Understand that she knows the difference between books and reality but by god, she’s going to try to make her life a little like her favorite book. It will never be your fault if she does.\nShe has to give it a shot somehow.\nLie to her. If she understands syntax, she will understand your need to lie. Behind words are other things: motivation, value, nuance, dialogue. It will not be the end of the world.\nFail her. Because a girl who reads knows that failure always leads up to the climax. Because girls who read understand that all things must come to end, but that you can always write a sequel. That you can begin again and again and still be the hero. That life is meant to have a villain or two.\nWhy be frightened of everything that you are not? Girls who read understand that people, like characters, develop. Except in the *Twilight* series.\nIf you find a girl who reads, keep her close. When you find her up at 2 AM clutching a book to her chest and weeping, make her a cup of tea and hold her. You may lose her for a couple of hours but she will always come back to you. She’ll talk as if the characters in the book are real, because for a while, they always are.\nYou will propose on a hot air balloon. Or during a rock concert. Or very casually next time she’s sick. Over Skype.\nYou will smile so hard you will wonder why your heart hasn’t burst and bled out all over your chest yet. You will write the story of your lives, have kids with strange names and even stranger tastes. She will introduce your children to the *Cat in the Hat* and *Aslan*, maybe in the same day. You will walk the winters of your old age together and she will recite Keats under her breath while you shake the snow off your boots.\nDate a girl who reads because you deserve it. You deserve a girl who can give you the most colorful life imaginable. If you can only give her monotony, and stale hours and half-baked proposals, then you’re better off alone. If you want the world and the worlds beyond it, date a girl who reads.\nOr better yet, date a girl who writes.",
        "tags": ["books", "life", "love", "relationships", "romance", "wisdom"],
        "likes": 19221
    },
    {
        "author": "Mark Twain",
        "quote": "′Classic′ - a book which people praise and don't read.",
        "tags": ["books", "classic", "reading"],
        "likes": 18873
    },
    {
        "author": "Suzanne Collins",
        "quote": "You don’t forget the face of the person who was your last hope.",
        "tags": ["the-hunger-games"],
        "likes": 18851
    },
    {
        "author": "John Lennon",
        "quote": "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "tags": ["dreamers", "hope", "peace"],
        "likes": 18827
    },
    {
        "author": "Neil Gaiman",
        "quote": "I've been making a list of the things they don't teach you at school. They don't teach you how to love somebody. They don't teach you how to be famous. They don't teach you how to be rich or how to be poor. They don't teach you how to walk away from someone you don't love any longer. They don't teach you how to know what's going on in someone else's mind. They don't teach you what to say to someone who's dying. They don't teach you anything worth knowing.",
        "tags": ["dying", "facts", "fame", "knowing", "love", "poverty", "reality", "school", "teach", "wealth"],
        "likes": 18735
    },
    {
        "author": "Marilyn Monroe",
        "quote": "I am good, but not an angel. I do sin, but I am not the devil. I am just a small girl in a big world trying to find someone to love.",
        "tags": ["attributed-no-source"],
        "likes": 18723
    },
    {
        "author": "W.C. Fields",
        "quote": "I am free of all prejudice. I hate everyone equally.",
        "tags": ["humor", "sinister"],
        "likes": 18711
    },
    {
        "author": "Bessie Anderson Stanley",
        "quote": "He has achieved success who has lived well, laughed often, and loved much; Who has enjoyed the trust of pure women, the respect of intelligent men and the love of little children; Who has filled his niche and accomplished his task; Who has never lacked appreciation of Earth's beauty or failed to express it; Who has left the world better than he found it, Whether an improved poppy, a perfect poem, or a rescued soul; Who has always looked for the best in others and given them the best he had; Whose life was an inspiration; Whose memory a benediction.",
        "tags": ["life", "success"],
        "likes": 18577
    },
    {
        "author": "Charles M. Schulz",
        "quote": "I love mankind ... it's people I can't stand!!",
        "tags": ["humor", "mankind", "people"],
        "likes": 18565
    },
    {
        "author": "Ralph Waldo Emerson",
        "quote": "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
        "tags": ["life", "regrets"],
        "likes": 18535
    },
    {
        "author": "Harper Lee",
        "quote": "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
        "tags": ["better-life-empathy"],
        "likes": 18257
    },
    {
        "author": "Mark Twain",
        "quote": "I have never let my schooling interfere with my education.",
        "tags": ["education"],
        "likes": 18216
    },
    {
        "author": "John Green",
        "quote": "The marks humans leave are too often scars.",
        "tags": ["humans", "pain", "scars"],
        "likes": 18081
    }
];
