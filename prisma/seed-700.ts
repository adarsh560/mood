import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate 700 virtual tasks - explicit sexting, video calls, and intimate content
const generateVirtualTasks = () => {
  const baseTasks = [
    "Show Me Your Boobs", "Ass Worship Session", "Velvet Reveal & Tease", "Riding Demonstration", "Dirty Sexting",
    "Masturbation Show", "Nunu Sucking Practice", "Horny Confessions", "Lingerie Strip Show", "Velvet Rubbing Demo",
    "Tit Worship", "Ass Spreading", "Wet Velvet Show", "Nunu Sucking Fantasy", "Horny Sexting",
    "Boob Bouncing", "Ass Jiggling", "Velvet Fingering Show", "Riding Pillow Demo", "Dirty Talk Session",
    "Nipple Play Video", "Cumming Video", "Dairy Milk Ejaculation", "Velvet Eating Fantasy", "Nunu Worship Sext",
    "Squirting Video", "Anal Play Show", "Dirty Panty Sext", "Throat Fucking Fantasy", "Creampie Begging",
    "Tit Fucking Video", "Orgasm Face Video", "Nunu Sucking Audio", "Velvet Spreading Show", "Dairy Milk Swallowing",
    "Masturbation Instruction", "Velvet Juice Tasting", "Rough Sex Begging", "Dairy Milk Shot Video", "Dildo Deepthroat",
    "Velvet Pounding Fantasy", "Ass Worship Video", "Dairy Milk Countdown", "Dirty Slut Confession", "Velvet Grinding Show",
    "Dairy Milk Eating Instruction", "Tit Bouncing Video", "Fuck Hole Sext", "Orgasm Denial Play", "Dairy Milk Tribute",
    "Velvet Worship Sext", "Nunu Rating Video", "Squirt Begging", "Dairy Milk Slut Training", "Ass Hole Winking",
    "Dirty Talk Orgasm", "Velvet Juice Sharing", "Nunu Worship Audio", "Dairy Milk Facial Begging", "Velvet Stretching Show",
    "Orgasm Competition", "Dairy Milk Dump Fantasy", "Ass Eating Instruction", "Velvet Pulsing Video", "Nunu Milking Fantasy",
    "Dirty Panty Show", "Dairy Milk Eating Encouragement", "Velvet Worship Video", "Nunu Teasing Sext", "Orgasm Screaming",
    "Dairy Milk Covered Fantasy", "Ass Clapping Show", "Velvet Gaping Video", "Dairy Milk Addiction", "Throat Bulge Demo",
    "Velvet Juice Cocktail", "Dairy Milk Bucket Challenge", "Ass Destruction Begging", "Orgasm Torture", "Dairy Milk Glazed Donut",
    "Velvet Fisting Prep", "Dairy Milk Shower Fantasy", "Ass to Mouth Demo", "Velvet Prolapse Show", "Peeing Position Show",
    "Ultimate Degradation", "Dairy Milk Fountain Finale", "Velvet Destruction End", "Dairy Milk Slave Graduation", "Perfect Fuck Toy"
  ]

  const descriptions = [
    "Video call where you slowly reveal and tease with your breasts. Touch them, squeeze them, and tell me how much you want me to suck them.",
    "Show me your beautiful ass on video call. Bend over, spread your cheeks, and tell me how you want me to worship it.",
    "Slowly show me your wet velvet on video call. Spread your lips, rub your clit, and describe how it feels.",
    "Show me how you would ride my nunu. Use a pillow or toy and demonstrate your moves while moaning my name.",
    "Send explicit texts about how wet your velvet is and what you want my dairy milk to do to you.",
    "Masturbate for me on video call. Show me exactly how you touch your velvet and what makes you cum.",
    "Use a toy to show me how you'd suck my nunu. Make it wet, sloppy, and tell me how much you love my dairy milk.",
    "Tell me your dirtiest fantasies about what you want my nunu to do to your velvet.",
    "Wear sexy lingerie and slowly strip for me on video call. Tease me with every piece you remove.",
    "Show me how you rub your velvet. Make yourself wet and tell me how good it feels when I do it."
  ]

  const tasks = []
  for (let i = 0; i < 700; i++) {
    const baseIndex = i % baseTasks.length
    const descIndex = i % descriptions.length
    tasks.push({
      title: `${baseTasks[baseIndex]} ${Math.floor(i/baseTasks.length) + 1}`,
      description: descriptions[descIndex] + ` Make it extra special for day ${i + 1}.`,
      dayOffset: i,
      imageUrl: `/images/virtual/task${i + 1}.jpg`
    })
  }
  return tasks
}

// Generate 700 real tasks - physical positions and BDSM activities for two people
const generateRealTasks = () => {
  const baseTasks = [
    "Missionary Position", "Doggy Style", "Cowgirl Position", "Spooning Position", "Standing Position",
    "69 Position", "Lotus Position", "Edge of Bed", "Legs Up Position", "Side Entry",
    "Reverse Cowgirl", "The Bridge", "Butterfly Position", "The Pretzel", "Seated Scissors",
    "The Anvil", "Prone Bone", "The Wheelbarrow", "Modified Missionary", "The Seashell",
    "Coital Alignment", "The Cradle", "Reverse Spoon", "The Splitting Bamboo", "The Yawning",
    "Seated Straddle", "The Plow", "Cross Position", "The Deck Chair", "Sideways Straddle",
    "BDSM Bondage Play", "Spanking Session", "Blindfolded Pleasure", "Handcuff Fun", "Rope Bondage",
    "Dominant/Submissive", "Sensory Play", "Temperature Play", "Wax Play", "Feather Teasing",
    "Collar and Leash", "Master/Slave Play", "Punishment Session", "Reward System", "Control Games",
    "Orgasm Control", "Edging Session", "Forced Orgasms", "Denial Play", "Begging Training"
  ]

  const descriptions = [
    "Classic intimate position with deep eye contact and emotional connection.",
    "Passionate rear-entry position allowing for deep penetration and control.",
    "Woman on top position for maximum control and intimate connection.",
    "Side-by-side position perfect for slow, sensual lovemaking.",
    "Vertical position against wall or standing for excitement and novelty.",
    "Mutual oral pleasure position for simultaneous giving and receiving.",
    "Sitting face-to-face with legs wrapped for ultimate intimacy.",
    "Edge position for unique angles and deep penetration.",
    "Missionary variation with elevated legs for enhanced stimulation.",
    "Comfortable side position allowing for caressing and kissing."
  ]

  const tasks = []
  for (let i = 0; i < 700; i++) {
    const baseIndex = i % baseTasks.length
    const descIndex = i % descriptions.length
    tasks.push({
      title: `${baseTasks[baseIndex]} ${Math.floor(i/baseTasks.length) + 1}`,
      description: descriptions[descIndex] + ` Enhanced for maximum pleasure on day ${i + 1}.`,
      dayOffset: i,
      imageUrl: `/images/real/position${i + 1}.jpg`
    })
  }
  return tasks
}

async function main() {
  // Create default users
  await prisma.user.createMany({
    data: [
      { email: 'divyanitiwari1804@gmail.com', password: 'Divyani1804$$', name: 'Misti Mommy' },
      { email: 'tiwariadarsh0704@gmail.com', password: 'Adarsh0704$$', name: 'Your daddy' }
    ]
  })

  const virtualTasks = generateVirtualTasks()
  const realTasks = generateRealTasks()

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
        dayOffset: realTasks[i].dayOffset,
        imageUrl: realTasks[i].imageUrl
      }
    })
  }

  console.log('Database seeded successfully with 700 tasks each!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })