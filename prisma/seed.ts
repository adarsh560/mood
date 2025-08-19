import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const virtualTasks = [
  { title: "Show Me Your Boobs", description: "Video call where you slowly reveal and tease with your breasts. Touch them, squeeze them, and tell me how much you want me to suck them.", dayOffset: 0, imageUrl: "/images/virtual/boobs.jpg" },
  { title: "Ass Worship Session", description: "Show me your beautiful ass on video call. Bend over, spread your cheeks, and tell me how you want me to worship it.", dayOffset: 1, imageUrl: "/images/virtual/ass.jpg" },
  { title: "Pussy Reveal & Tease", description: "Slowly show me your wet pussy on video call. Spread your lips, rub your clit, and describe how it feels.", dayOffset: 2, imageUrl: "/images/virtual/pussy.jpg" },
  { title: "Riding Demonstration", description: "Show me how you would ride my cock. Use a pillow or toy and demonstrate your moves while moaning my name.", dayOffset: 3, imageUrl: "/images/virtual/riding.jpg" },
  { title: "Dirty Sexting", description: "Send explicit texts: 'I'm so wet thinking about your cock inside me. I want you to fuck me so hard I scream.'", dayOffset: 4, imageUrl: "/images/virtual/sexting.jpg" },
  { title: "Masturbation Show", description: "Masturbate for me on video call. Show me exactly how you touch yourself and what makes you cum.", dayOffset: 5, imageUrl: "/images/virtual/masturbation.jpg" },
  { title: "Blowjob Practice", description: "Use a toy or banana to show me how you'd suck my cock. Make it wet, sloppy, and tell me how much you love it.", dayOffset: 6, imageUrl: "/images/virtual/blowjob.jpg" },
  { title: "Horny Confessions", description: "Tell me your dirtiest fantasies: 'I want you to bend me over and fuck me from behind until I can't walk.'", dayOffset: 7, imageUrl: "/images/virtual/confession.jpg" },
  { title: "Lingerie Strip Show", description: "Wear sexy lingerie and slowly strip for me on video call. Tease me with every piece you remove.", dayOffset: 8, imageUrl: "/images/virtual/lingerie.jpg" },
  { title: "Pussy Rubbing Demo", description: "Show me how you rub your clit. Make yourself wet and tell me how good it feels when I do it.", dayOffset: 9, imageUrl: "/images/virtual/rubbing.jpg" },
  { title: "Tit Worship", description: "Focus entirely on your breasts. Massage them, pinch your nipples, and tell me how you want me to worship them.", dayOffset: 10, imageUrl: "/images/virtual/tits.jpg" },
  { title: "Ass Spreading", description: "Spread your ass cheeks wide for me on video call. Show me your tight hole and tell me what you want me to do to it.", dayOffset: 11, imageUrl: "/images/virtual/spread.jpg" },
  { title: "Wet Pussy Show", description: "Get yourself really wet and show me how your pussy glistens. Finger yourself and taste your juices for me.", dayOffset: 12, imageUrl: "/images/virtual/wet.jpg" },
  { title: "Cock Sucking Fantasy", description: "Describe in detail how you'd suck my cock: 'I'd lick the tip, then take you deep in my throat until you cum.'", dayOffset: 13, imageUrl: "/images/virtual/sucking.jpg" },
  { title: "Horny Sexting", description: "Text me: 'My pussy is dripping wet. I need your hard cock inside me right now. Fuck me until I scream.'", dayOffset: 14, imageUrl: "/images/virtual/horny.jpg" },
  { title: "Boob Bouncing", description: "Bounce your tits for me on video call. Jump up and down and let me watch them jiggle.", dayOffset: 15, imageUrl: "/images/virtual/bouncing.jpg" },
  { title: "Ass Jiggling", description: "Shake your ass for me on video call. Twerk and make it jiggle while telling me how you want me to grab it.", dayOffset: 16, imageUrl: "/images/virtual/jiggling.jpg" },
  { title: "Pussy Fingering Show", description: "Finger your pussy for me on video call. Start with one finger, then two, and tell me how tight you are.", dayOffset: 17, imageUrl: "/images/virtual/fingering.jpg" },
  { title: "Riding Pillow Demo", description: "Ride a pillow like it's my cock. Grind on it hard and moan my name while you show me your moves.", dayOffset: 18, imageUrl: "/images/virtual/pillow.jpg" },
  { title: "Dirty Talk Session", description: "Tell me: 'I want you to fuck my tight pussy so hard. Make me your dirty little slut and use me.'", dayOffset: 19, imageUrl: "/images/virtual/dirty.jpg" },
  { title: "Nipple Play Video", description: "Show me how you play with your nipples on video call. Pinch them, lick them, and tell me how it feels.", dayOffset: 20, imageUrl: "/images/virtual/nipples.jpg" },
  { title: "Cumming Video", description: "Record yourself cumming and send it to me. Show me your face when you orgasm and moan my name.", dayOffset: 21, imageUrl: "/images/virtual/cumming.jpg" },
  { title: "Ejaculation Video", description: "Send me a video of you ejaculating. Show me how much cum you have for me and where you want to put it.", dayOffset: 22, imageUrl: "/images/virtual/ejaculation.jpg" },
  { title: "Pussy Eating Fantasy", description: "Text me: 'I want you to eat my pussy until I cum all over your face. Lick every drop.'", dayOffset: 23, imageUrl: "/images/virtual/eating.jpg" },
  { title: "Cock Worship Sext", description: "Send: 'Your cock is so perfect. I want to worship it with my mouth and pussy. Use me however you want.'", dayOffset: 24, imageUrl: "/images/virtual/worship.jpg" },
  { title: "Squirting Video", description: "Show me how you squirt on video call. Make yourself cum so hard you squirt everywhere.", dayOffset: 25, imageUrl: "/images/virtual/squirting.jpg" },
  { title: "Anal Play Show", description: "Show me your ass and finger it for me on video call. Tell me how you want me to fuck your tight hole.", dayOffset: 26, imageUrl: "/images/virtual/anal.jpg" },
  { title: "Dirty Panty Sext", description: "Text: 'My panties are soaking wet thinking about you. I want to stuff them in your mouth while you fuck me.'", dayOffset: 27, imageUrl: "/images/virtual/panties.jpg" },
  { title: "Throat Fucking Fantasy", description: "Send: 'I want you to grab my hair and fuck my throat until I gag. Use my mouth like a pussy.'", dayOffset: 28, imageUrl: "/images/virtual/throat.jpg" },
  { title: "Creampie Begging", description: "Text me: 'Fill my pussy with your cum. I want it dripping out of me all day long.'", dayOffset: 29, imageUrl: "/images/virtual/creampie.jpg" },
  { title: "Tit Fucking Video", description: "Show me how you'd fuck my tits on video call. Use a toy between your breasts and moan.", dayOffset: 30, imageUrl: "/images/virtual/titfuck.jpg" },
  { title: "Orgasm Face Video", description: "Send me a close-up video of your face when you cum. Show me your O-face and how you look when you orgasm.", dayOffset: 31, imageUrl: "/images/virtual/orgasm.jpg" },
  { title: "Cock Sucking Audio", description: "Send me an audio of you making blowjob sounds. Slurp, gag, and moan like you're sucking my cock.", dayOffset: 32, imageUrl: "/images/virtual/audio.jpg" },
  { title: "velvet Spreading Show", description: "Spread your pussy lips wide for me on video call. Show me how pink and wet you are inside.", dayOffset: 33, imageUrl: "/images/virtual/spreading.jpg" },
  { title: "Cum Swallowing Sext", description: "Text: 'I want to swallow every drop of your cum. Feed it to me and watch me lick my lips.'", dayOffset: 34, imageUrl: "/images/virtual/swallowing.jpg" },
  { title: "Masturbation Instruction", description: "Tell me exactly how to touch my cock while you watch on video call. Control my pleasure.", dayOffset: 35, imageUrl: "/images/virtual/instruction.jpg" },
  { title: "Pussy Juice Tasting", description: "Taste your own pussy juice on video call and tell me how sweet you are. Lick your fingers clean.", dayOffset: 36, imageUrl: "/images/virtual/tasting.jpg" },
  { title: "Rough Sex Begging", description: "Sext: 'Fuck me so hard I can't walk. Pull my hair, spank my ass, and make me your dirty slut.'", dayOffset: 37, imageUrl: "/images/virtual/rough.jpg" },
  { title: "Cum Shot Video", description: "Show me where you want my cum on video call. Point to your face, tits, or pussy and beg for it.", dayOffset: 38, imageUrl: "/images/virtual/cumshot.jpg" },
  { title: "Dildo Deepthroat", description: "Deepthroat a dildo on video call and show me how you'd suck my cock. Gag and drool for me.", dayOffset: 39, imageUrl: "/images/virtual/deepthroat.jpg" },
  { title: "Pussy Pounding Fantasy", description: "Text: 'Pound my pussy so hard the neighbors hear me screaming your name. Destroy me.'", dayOffset: 40, imageUrl: "/images/virtual/pounding.jpg" },
  { title: "Ass Worship Video", description: "Worship your own ass on video call. Spank it, spread it, and tell me how much you love anal.", dayOffset: 41, imageUrl: "/images/virtual/assworship.jpg" },
  { title: "Cum Countdown", description: "Count down from 10 while I masturbate on video call. Make me cum exactly when you reach zero.", dayOffset: 42, imageUrl: "/images/virtual/countdown.jpg" },
  { title: "Dirty Slut Confession", description: "Tell me on video call: 'I'm your dirty little slut. Use all my holes however you want.'", dayOffset: 43, imageUrl: "/images/virtual/slut.jpg" },
  { title: "Pussy Grinding Show", description: "Grind your pussy on a pillow on video call. Show me how you'd ride my face.", dayOffset: 44, imageUrl: "/images/virtual/grinding.jpg" },
  { title: "Cum Eating Instruction", description: "Make me eat my own cum on video call. Watch me lick it up and swallow it for you.", dayOffset: 45, imageUrl: "/images/virtual/cei.jpg" },
  { title: "Tit Bouncing Video", description: "Bounce your tits aggressively on video call. Make them jiggle and slap together.", dayOffset: 46, imageUrl: "/images/virtual/bouncing2.jpg" },
  { title: "Fuck Hole Sext", description: "Text: 'I'm just your personal fuck hole. Use me whenever you're horny and dump your cum in me.'", dayOffset: 47, imageUrl: "/images/virtual/fuckhole.jpg" },
  { title: "Orgasm Denial Play", description: "Edge yourself on video call but don't cum until I give you permission. Beg me to let you orgasm.", dayOffset: 48, imageUrl: "/images/virtual/denial.jpg" },
  { title: "Cum Tribute Request", description: "Send me a photo and ask me to cum on it. Watch me stroke my cock and cum all over your picture.", dayOffset: 49, imageUrl: "/images/virtual/tribute.jpg" },
  { title: "Pussy Worship Sext", description: "Text: 'Worship my pussy like the goddess I am. Lick it, kiss it, and make me cum with your tongue.'", dayOffset: 50, imageUrl: "/images/virtual/pussyworship.jpg" },
  { title: "Cock Rating Video", description: "Rate my cock on video call. Tell me how big, hard, and perfect it is for your holes.", dayOffset: 51, imageUrl: "/images/virtual/rating.jpg" },
  { title: "Squirt Begging", description: "Beg me to make you squirt on video call: 'Make me squirt all over your cock. I want to soak you.'", dayOffset: 52, imageUrl: "/images/virtual/squirtbeg.jpg" },
  { title: "Cum Slut Training", description: "Train to be my cum slut on video call. Practice swallowing and tell me how much you love cum.", dayOffset: 53, imageUrl: "/images/virtual/cumslut.jpg" },
  { title: "Ass Hole Winking", description: "Make your asshole wink at me on video call. Clench and release while telling me to fuck it.", dayOffset: 54, imageUrl: "/images/virtual/winking.jpg" },
  { title: "Dirty Talk Orgasm", description: "Make me cum just with your dirty talk on video call. No touching, just your filthy words.", dayOffset: 55, imageUrl: "/images/virtual/dirtytalk.jpg" },
  { title: "Pussy Juice Sharing", description: "Collect your pussy juice and show me on video call. Tell me you want to share it with me.", dayOffset: 56, imageUrl: "/images/virtual/sharing.jpg" },
  { title: "Cock Worship Audio", description: "Send me an audio message worshipping my cock. Describe how perfect it is and what you'd do to it.", dayOffset: 57, imageUrl: "/images/virtual/cockworship.jpg" },
  { title: "Cum Facial Begging", description: "Beg for a facial on video call: 'Cover my face with your cum. I want to be marked as yours.'", dayOffset: 58, imageUrl: "/images/virtual/facial.jpg" },
  { title: "Pussy Stretching Show", description: "Show me how you stretch your pussy on video call. Use fingers or toys to open yourself wide.", dayOffset: 59, imageUrl: "/images/virtual/stretching.jpg" },
  { title: "Orgasm Competition", description: "See who can cum more times in 30 minutes on video call. Count each orgasm out loud.", dayOffset: 60, imageUrl: "/images/virtual/competition.jpg" },
  { title: "Cum Dump Fantasy", description: "Sext: 'Use me as your personal cum dump. Fill all my holes and leave me dripping with your seed.'", dayOffset: 61, imageUrl: "/images/virtual/cumdump.jpg" },
  { title: "Ass Eating Instruction", description: "Tell me how to eat your ass on video call. Guide me through licking and tonguing your hole.", dayOffset: 62, imageUrl: "/images/virtual/asseating.jpg" },
  { title: "Pussy Pulsing Video", description: "Show me your pussy pulsing when you cum on video call. Let me see it contract and throb.", dayOffset: 63, imageUrl: "/images/virtual/pulsing.jpg" },
  { title: "Cock Milking Fantasy", description: "Text: 'I want to milk your cock dry. Drain every drop of cum from your balls into my mouth.'", dayOffset: 64, imageUrl: "/images/virtual/milking.jpg" },
  { title: "Dirty Panty Show", description: "Show me your dirty panties on video call. Tell me how wet and smelly they are from thinking of me.", dayOffset: 65, imageUrl: "/images/virtual/dirtypanty.jpg" },
  { title: "Cum Eating Encouragement", description: "Encourage me to eat my cum on video call. Tell me how good it tastes and to lick it all up.", dayOffset: 66, imageUrl: "/images/virtual/eating2.jpg" },
  { title: "Pussy Worship Video", description: "Worship your own pussy on video call. Kiss it, lick your fingers, and tell me how perfect it is.", dayOffset: 67, imageUrl: "/images/virtual/worship2.jpg" },
  { title: "Cock Teasing Sext", description: "Tease my cock with texts: 'I'm going to edge your cock for hours until you're begging to cum.'", dayOffset: 68, imageUrl: "/images/virtual/teasing.jpg" },
  { title: "Orgasm Screaming", description: "Scream my name when you cum on video call. Let me hear how good I make you feel.", dayOffset: 69, imageUrl: "/images/virtual/screaming.jpg" },
  { title: "Cum Covered Fantasy", description: "Describe being covered in my cum: 'I want cum in my hair, on my face, dripping from every hole.'", dayOffset: 70, imageUrl: "/images/virtual/covered.jpg" },
  { title: "Ass Clapping Show", description: "Make your ass clap on video call. Bounce it and make those cheeks slap together for me.", dayOffset: 71, imageUrl: "/images/virtual/clapping.jpg" },
  { title: "Pussy Gaping Video", description: "Show me your pussy gaping after you finger it hard on video call. Let me see how open you are.", dayOffset: 72, imageUrl: "/images/virtual/gaping.jpg" },
  { title: "Cum Addiction Confession", description: "Confess your cum addiction: 'I'm addicted to your cum. I need it every day to survive.'", dayOffset: 73, imageUrl: "/images/virtual/addiction.jpg" },
  { title: "Throat Bulge Demo", description: "Show me how deep you can take a dildo in your throat on video call. Make your throat bulge.", dayOffset: 74, imageUrl: "/images/virtual/bulge.jpg" },
  { title: "Pussy Juice Cocktail", description: "Mix your pussy juice with a drink on video call and toast to our dirty relationship.", dayOffset: 75, imageUrl: "/images/virtual/cocktail.jpg" },
  { title: "Cum Bucket Challenge", description: "See how much cum you can collect in a week. Show me your cum bucket on video call.", dayOffset: 76, imageUrl: "/images/virtual/bucket.jpg" },
  { title: "Ass Destruction Begging", description: "Beg me to destroy your ass: 'Wreck my tight asshole. Make it gape so wide I can't close it.'", dayOffset: 77, imageUrl: "/images/virtual/destruction.jpg" },
  { title: "Orgasm Torture", description: "Torture yourself with orgasms on video call. Keep cumming until you can't take anymore.", dayOffset: 78, imageUrl: "/images/virtual/torture.jpg" },
  { title: "Cum Glazed Donut", description: "Put my cum on a donut and eat it on video call. Show me how much you love the taste.", dayOffset: 79, imageUrl: "/images/virtual/donut.jpg" },
  { title: "Pussy Fisting Prep", description: "Prepare your pussy for fisting on video call. Stretch it with multiple fingers and toys.", dayOffset: 80, imageUrl: "/images/virtual/fisting.jpg" },
  { title: "Cum Shower Fantasy", description: "Describe taking a cum shower: 'I want 10 guys to cum all over me while you watch and jerk off.'", dayOffset: 81, imageUrl: "/images/virtual/shower.jpg" },
  { title: "Ass to Mouth Demo", description: "Show me ass to mouth on video call. Go from your ass to your mouth with a toy.", dayOffset: 82, imageUrl: "/images/virtual/atm.jpg" },
  { title: "Pussy Prolapse Show", description: "Push your pussy out as far as you can on video call. Show me your pink insides.", dayOffset: 83, imageUrl: "/images/virtual/prolapse.jpg" },
  { title: "Show me peeing position", description: "show me how u will pee on me .", dayOffset: 84, imageUrl: "/images/virtual/gargling.jpg" },
  { title: "Ultimate Degradation", description: "Let me completely degrade you on video call. Accept every filthy name I call you.", dayOffset: 85, imageUrl: "/images/virtual/degradation.jpg" },
  { title: "Cum Fountain Finale", description: "Make me cum like a fountain on video call. Stroke me until I explode everywhere.", dayOffset: 86, imageUrl: "/images/virtual/fountain.jpg" },
  { title: "Pussy Destruction End", description: "Show me your destroyed pussy after 87 days of tasks. Let me see how much you've changed.", dayOffset: 87, imageUrl: "/images/virtual/destroyed.jpg" },
  { title: "Cum Slave Graduation", description: "Graduate as my official cum slave. Swear your eternal devotion to my cock and cum.", dayOffset: 88, imageUrl: "/images/virtual/graduation.jpg" },
  { title: "Perfect Fuck Toy", description: "Become my perfect fuck toy. Show me you're ready to be used whenever I want.", dayOffset: 89, imageUrl: "/images/virtual/fucktoy.jpg" }
]

const realTasks = [
  { title: "Missionary Position", description: "Classic intimate position. Focus on eye contact and deep connection. Vary the angle and depth for maximum pleasure.", dayOffset: 0 },
  { title: "Doggy Style", description: "Passionate position allowing deep penetration. The receiving partner can control the rhythm by moving back and forth.", dayOffset: 1 },
  { title: "Cowgirl Position", description: "Let your partner take control on top. Perfect for deep intimacy and allowing the woman to control pace and depth.", dayOffset: 2 },
  { title: "Spooning Position", description: "Intimate side-by-side position perfect for slow, sensual lovemaking. Great for morning or lazy afternoon sessions.", dayOffset: 3 },
  { title: "Standing Position", description: "Try making love while standing - against a wall, in the shower, or with one partner lifted up.", dayOffset: 4 },
  { title: "69 Position", description: "Mutual oral pleasure position. Take turns focusing on giving and receiving for maximum enjoyment.", dayOffset: 5 },
  { title: "Lotus Position", description: "Sitting face-to-face with legs wrapped around each other. Perfect for intimate connection and synchronized movement.", dayOffset: 6 },
  { title: "Edge of Bed", description: "One partner sits on the edge of the bed while the other straddles or kneels. Great for different angles.", dayOffset: 7 },
  { title: "Legs Up Position", description: "Missionary variation with the receiving partner's legs raised high. Allows for deeper penetration and G-spot stimulation.", dayOffset: 8 },
  { title: "Side Entry", description: "Both partners lying on their sides with entry from behind. Comfortable position allowing for caressing and kissing.", dayOffset: 9 },
  { title: "Reverse Cowgirl", description: "Woman on top facing away. Offers deep penetration and a great view. Perfect for G-spot and prostate stimulation.", dayOffset: 10 },
  { title: "The Bridge", description: "Receiving partner arches back while the other kneels. Creates unique angles and intense sensations.", dayOffset: 11 },
  { title: "Butterfly Position", description: "Partner lies on edge of bed with legs up while the other stands. Perfect for deep penetration and clitoral access.", dayOffset: 12 },
  { title: "The Pretzel", description: "Complex position with one leg up, one down. Offers deep intimacy and unique sensations.", dayOffset: 13 },
  { title: "Seated Scissors", description: "Both partners seated, legs intertwined. Great for intimate eye contact and synchronized movement.", dayOffset: 14 },
  { title: "The Anvil", description: "Legs pushed back toward chest. Allows for very deep penetration and intense intimacy.", dayOffset: 15 },
  { title: "Prone Bone", description: "Lying flat on stomach with partner on top. Offers deep penetration and full body contact.", dayOffset: 16 },
  { title: "The Wheelbarrow", description: "Standing position with one partner supported. Requires strength but offers unique sensations.", dayOffset: 17 },
  { title: "Modified Missionary", description: "Classic position with legs wrapped around partner's waist. Allows for deeper connection and control.", dayOffset: 18 },
  { title: "The Seashell", description: "Legs pulled back and to the sides. Offers maximum depth and intimate eye contact.", dayOffset: 19 },
  { title: "Coital Alignment", description: "Modified missionary focusing on clitoral stimulation. Perfect for mutual pleasure and orgasm.", dayOffset: 20 },
  { title: "The Cradle", description: "Intimate position with legs wrapped high. Offers emotional connection and deep penetration.", dayOffset: 21 },
  { title: "Reverse Spoon", description: "Spooning position facing opposite direction. Offers new angles and sensations.", dayOffset: 22 },
  { title: "The Splitting Bamboo", description: "One leg up, one down while lying on side. Unique position offering varied sensations.", dayOffset: 23 },
  { title: "The Yawning", description: "Legs spread wide in missionary. Allows for deep penetration and full access.", dayOffset: 24 },
  { title: "Seated Straddle", description: "One partner sits while the other straddles. Great for intimate connection and control.", dayOffset: 25 },
  { title: "The Plow", description: "Shoulders on ground, hips elevated. Unique angle offering intense sensations.", dayOffset: 26 },
  { title: "Cross Position", description: "Bodies forming a cross shape. Offers unique angles and intimate connection.", dayOffset: 27 },
  { title: "The Deck Chair", description: "Reclined position with partner kneeling. Comfortable and allows for varied angles.", dayOffset: 28 },
  { title: "Sideways Straddle", description: "Side-by-side with one partner straddling. Offers intimacy and unique sensations.", dayOffset: 29 },
  { title: "The Pinwheel", description: "Circular movement position. Allows for exploration and varied sensations.", dayOffset: 30 },
  { title: "Elevated Missionary", description: "Hips elevated with pillows. Enhances angle and depth for better stimulation.", dayOffset: 31 },
  { title: "The Sandwich", description: "Close body contact position. Maximizes skin-to-skin contact and intimacy.", dayOffset: 32 },
  { title: "Twisted Spoon", description: "Spooning with a twist. Offers new angles while maintaining intimate contact.", dayOffset: 33 },
  { title: "The Leap Frog", description: "Kneeling position with forward lean. Allows for deep penetration and control.", dayOffset: 34 },
  { title: "Face-to-Face", description: "Sitting position facing each other. Perfect for eye contact and emotional connection.", dayOffset: 35 },
  { title: "The Tilt", description: "Angled position for enhanced stimulation. Focuses on hitting the right spots.", dayOffset: 36 },
  { title: "Wrapped Lotus", description: "Lotus position with arms wrapped tightly. Maximizes intimacy and connection.", dayOffset: 37 },
  { title: "The Slide", description: "Smooth gliding motion position. Focuses on rhythm and synchronized movement.", dayOffset: 38 },
  { title: "Elevated Doggy", description: "Doggy style with elevated hips. Enhances angle and depth of penetration.", dayOffset: 39 },
  { title: "The Twist", description: "Twisted body position. Offers unique sensations and intimate connection.", dayOffset: 40 },
  { title: "Prone Missionary", description: "Missionary with partner lying flat. Offers full body contact and intimacy.", dayOffset: 41 },
  { title: "The Arch", description: "Arched back position. Creates unique angles and intense sensations.", dayOffset: 42 },
  { title: "Side Saddle", description: "Side position with one partner straddling. Offers control and intimacy.", dayOffset: 43 },
  { title: "The Wrap", description: "Legs wrapped around partner. Allows for deep connection and control.", dayOffset: 44 },
  { title: "Elevated Cowgirl", description: "Cowgirl with elevated position. Enhances angles and sensations.", dayOffset: 45 },
  { title: "The Squeeze", description: "Tight embrace position. Maximizes physical and emotional connection.", dayOffset: 46 },
  { title: "Angled Entry", description: "Entry at unique angle. Focuses on specific stimulation points.", dayOffset: 47 },
  { title: "The Embrace", description: "Full body embrace position. Emphasizes emotional and physical intimacy.", dayOffset: 48 },
  { title: "Twisted Missionary", description: "Missionary with body twist. Offers new sensations and angles.", dayOffset: 49 },
  { title: "The Lean", description: "Leaning position for unique angle. Allows for deep penetration and control.", dayOffset: 50 },
  { title: "Supported Standing", description: "Standing with support. Offers excitement and unique sensations.", dayOffset: 51 },
  { title: "The Curve", description: "Curved body position. Enhances natural body alignment and pleasure.", dayOffset: 52 },
  { title: "Deep Spoon", description: "Spooning with deep penetration. Combines intimacy with intense sensations.", dayOffset: 53 },
  { title: "The Fold", description: "Folded leg position. Allows for deep access and intimate connection.", dayOffset: 54 },
  { title: "Elevated Side", description: "Side position with elevation. Enhances angles and comfort.", dayOffset: 55 },
  { title: "The Clasp", description: "Clasped together position. Maximizes physical and emotional connection.", dayOffset: 56 },
  { title: "Angled Cowgirl", description: "Cowgirl at unique angle. Offers enhanced stimulation and control.", dayOffset: 57 },
  { title: "The Nest", description: "Nested together position. Creates intimate cocoon of pleasure.", dayOffset: 58 },
  { title: "Supported Doggy", description: "Doggy style with support. Enhances comfort and allows for longer sessions.", dayOffset: 59 },
  { title: "The Melt", description: "Melting together position. Focuses on slow, sensual connection.", dayOffset: 60 },
  { title: "Twisted Lotus", description: "Lotus with a twist. Adds variety to classic intimate position.", dayOffset: 61 },
  { title: "The Flow", description: "Flowing movement position. Emphasizes rhythm and natural motion.", dayOffset: 62 },
  { title: "Deep Missionary", description: "Missionary with maximum depth. Focuses on intense penetration and connection.", dayOffset: 63 },
  { title: "The Bind", description: "Bound together position. Creates intense physical and emotional connection.", dayOffset: 64 },
  { title: "Elevated Lotus", description: "Lotus position with elevation. Enhances angles and sensations.", dayOffset: 65 },
  { title: "The Merge", description: "Merging bodies position. Focuses on becoming one with your partner.", dayOffset: 66 },
  { title: "Angled Spoon", description: "Spooning at unique angle. Offers new sensations while maintaining intimacy.", dayOffset: 67 },
  { title: "The Unity", description: "United bodies position. Emphasizes complete physical and emotional connection.", dayOffset: 68 },
  { title: "Deep Cowgirl", description: "Cowgirl with maximum depth. Allows for intense sensations and control.", dayOffset: 69 },
  { title: "The Fusion", description: "Fused together position. Creates ultimate intimacy and connection.", dayOffset: 70 },
  { title: "Supported Missionary", description: "Missionary with support. Enhances comfort and allows for longer intimacy.", dayOffset: 71 },
  { title: "The Blend", description: "Blended bodies position. Focuses on seamless connection and pleasure.", dayOffset: 72 },
  { title: "Elevated Doggy", description: "Doggy style elevated. Enhances angles and depth of connection.", dayOffset: 73 },
  { title: "The Harmony", description: "Harmonious position. Emphasizes synchronized movement and pleasure.", dayOffset: 74 },
  { title: "Deep Lotus", description: "Lotus with deep connection. Maximizes intimacy and emotional bonding.", dayOffset: 75 },
  { title: "The Symphony", description: "Musical movement position. Creates rhythm and beautiful connection.", dayOffset: 76 },
  { title: "Angled Missionary", description: "Missionary at perfect angle. Optimizes stimulation and pleasure.", dayOffset: 77 },
  { title: "The Dance", description: "Dancing bodies position. Emphasizes movement and joyful connection.", dayOffset: 78 },
  { title: "Deep Spoon", description: "Spooning with deep intimacy. Combines comfort with intense pleasure.", dayOffset: 79 },
  { title: "The Celebration", description: "Celebratory position. Focuses on joy and passionate connection.", dayOffset: 80 },
  { title: "Elevated Cowgirl", description: "Cowgirl elevated to new heights. Maximizes pleasure and control.", dayOffset: 81 },
  { title: "The Triumph", description: "Triumphant position. Celebrates your love and physical connection.", dayOffset: 82 },
  { title: "Deep Missionary", description: "Missionary with ultimate depth. Creates profound physical and emotional connection.", dayOffset: 83 },
  { title: "The Victory", description: "Victorious position. Celebrates your intimate journey together.", dayOffset: 84 },
  { title: "Perfect Lotus", description: "Lotus position perfected. Ultimate intimacy and spiritual connection.", dayOffset: 85 },
  { title: "The Climax", description: "Climactic position. Builds to ultimate pleasure and connection.", dayOffset: 86 },
  { title: "Eternal Embrace", description: "Embrace that lasts forever. Symbolizes your eternal love and passion.", dayOffset: 87 },
  { title: "The Finale", description: "Final position of the cycle. Celebrates your complete intimate journey.", dayOffset: 88 },
  { title: "Perfect Union", description: "Perfect union of bodies and souls. The ultimate expression of your love.", dayOffset: 89 }
]

async function main() {
  // Create default users
  await prisma.user.createMany({
    data: [
      { email: 'divyanitiwari1804@gmail.com', password: 'Divyani1804$$', name: 'Misti Mommy' },
      { email: 'tiwariadarsh0704@gmail.com', password: 'Adarsh0704$$', name: 'Your daddy' }
    ]
  })

  // Create virtual tasks
  for (let i = 0; i < virtualTasks.length; i++) {
    await prisma.task.create({
      data: {
        type: 'virtual',
        title: virtualTasks[i].title,
        description: virtualTasks[i].description,
        dayOffset: virtualTasks[i].dayOffset,
        imageUrl: virtualTasks[i].imageUrl
      }
    })
  }

  // Create real tasks
  for (let i = 0; i < realTasks.length; i++) {
    await prisma.task.create({
      data: {
        type: 'real',
        title: realTasks[i].title,
        description: realTasks[i].description,
        dayOffset: realTasks[i].dayOffset
      }
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })