export interface Verse {
  text: string;
  reference: string;
  theme: string;
}

export const verses: Verse[] = [
  // Hope
  {
    text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    theme: "hope",
  },
  {
    text: "May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.",
    reference: "Romans 15:13",
    theme: "hope",
  },
  {
    text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
    reference: "Isaiah 40:31",
    theme: "hope",
  },
  {
    text: "We have this hope as an anchor for the soul, firm and secure.",
    reference: "Hebrews 6:19",
    theme: "hope",
  },

  // Strength
  {
    text: "I can do all this through him who gives me strength.",
    reference: "Philippians 4:13",
    theme: "strength",
  },
  {
    text: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
    reference: "Psalm 28:7",
    theme: "strength",
  },
  {
    text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    theme: "strength",
  },
  {
    text: "God is our refuge and strength, an ever-present help in trouble.",
    reference: "Psalm 46:1",
    theme: "strength",
  },
  {
    text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.'",
    reference: "2 Corinthians 12:9",
    theme: "strength",
  },

  // Love
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    theme: "love",
  },
  {
    text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
    reference: "1 Corinthians 13:4",
    theme: "love",
  },
  {
    text: "We love because he first loved us.",
    reference: "1 John 4:19",
    theme: "love",
  },
  {
    text: "And now these three remain: faith, hope and love. But the greatest of these is love.",
    reference: "1 Corinthians 13:13",
    theme: "love",
  },
  {
    text: "Dear friends, let us love one another, for love comes from God. Everyone who loves has been born of God and knows God.",
    reference: "1 John 4:7",
    theme: "love",
  },

  // Faith
  {
    text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
    reference: "Hebrews 11:1",
    theme: "faith",
  },
  {
    text: "For it is by grace you have been saved, through faith — and this is not from yourselves, it is the gift of God.",
    reference: "Ephesians 2:8",
    theme: "faith",
  },
  {
    text: "Truly I tell you, if you have faith as small as a mustard seed, you can say to this mountain, 'Move from here to there,' and it will move.",
    reference: "Matthew 17:20",
    theme: "faith",
  },
  {
    text: "For we live by faith, not by sight.",
    reference: "2 Corinthians 5:7",
    theme: "faith",
  },

  // Peace
  {
    text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    theme: "peace",
  },
  {
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reference: "Philippians 4:6-7",
    theme: "peace",
  },
  {
    text: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
    reference: "Isaiah 26:3",
    theme: "peace",
  },
  {
    text: "The Lord gives strength to his people; the Lord blesses his people with peace.",
    reference: "Psalm 29:11",
    theme: "peace",
  },

  // Wisdom
  {
    text: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
    reference: "James 1:5",
    theme: "wisdom",
  },
  {
    text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    theme: "wisdom",
  },
  {
    text: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
    reference: "Proverbs 9:10",
    theme: "wisdom",
  },
  {
    text: "For the Lord gives wisdom; from his mouth come knowledge and understanding.",
    reference: "Proverbs 2:6",
    theme: "wisdom",
  },

  // Courage
  {
    text: "Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
    reference: "Joshua 1:9",
    theme: "courage",
  },
  {
    text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.",
    reference: "2 Timothy 1:7",
    theme: "courage",
  },
  {
    text: "The Lord is my light and my salvation — whom shall I fear? The Lord is the stronghold of my life — of whom shall I be afraid?",
    reference: "Psalm 27:1",
    theme: "courage",
  },

  // Gratitude
  {
    text: "Give thanks to the Lord, for he is good; his love endures forever.",
    reference: "Psalm 107:1",
    theme: "gratitude",
  },
  {
    text: "Rejoice always, pray continually, give thanks in all circumstances; for this is God's will for you in Christ Jesus.",
    reference: "1 Thessalonians 5:16-18",
    theme: "gratitude",
  },
  {
    text: "Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
    reference: "Psalm 100:4",
    theme: "gratitude",
  },
  {
    text: "Every good and perfect gift is from above, coming down from the Father of the heavenly lights, who does not change like shifting shadows.",
    reference: "James 1:17",
    theme: "gratitude",
  },

  // Psalms
  {
    text: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
    theme: "peace",
  },
  {
    text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
    reference: "Psalm 139:14",
    theme: "gratitude",
  },
  {
    text: "Delight yourself in the Lord, and he will give you the desires of your heart.",
    reference: "Psalm 37:4",
    theme: "faith",
  },
  {
    text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
    reference: "Psalm 51:10",
    theme: "faith",
  },
  {
    text: "This is the day the Lord has made; let us rejoice and be glad in it.",
    reference: "Psalm 118:24",
    theme: "gratitude",
  },

  // Gospels
  {
    text: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    theme: "peace",
  },
  {
    text: "I am the way and the truth and the life. No one comes to the Father except through me.",
    reference: "John 14:6",
    theme: "faith",
  },
  {
    text: "Blessed are the pure in heart, for they will see God.",
    reference: "Matthew 5:8",
    theme: "wisdom",
  },
  {
    text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
    reference: "Matthew 7:7",
    theme: "faith",
  },

  // Epistles
  {
    text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.",
    reference: "Romans 8:28",
    theme: "hope",
  },
  {
    text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.",
    reference: "Romans 12:2",
    theme: "wisdom",
  },
  {
    text: "I have been crucified with Christ and I no longer live, but Christ lives in me.",
    reference: "Galatians 2:20",
    theme: "faith",
  },
  {
    text: "For our struggle is not against flesh and blood, but against the rulers, against the authorities, against the powers of this dark world.",
    reference: "Ephesians 6:12",
    theme: "courage",
  },
  {
    text: "Be completely humble and gentle; be patient, bearing with one another in love.",
    reference: "Ephesians 4:2",
    theme: "love",
  },
];

export function getDailyVerse(dayOfYear: number): Verse {
  const index = dayOfYear % verses.length;
  return verses[index];
}
