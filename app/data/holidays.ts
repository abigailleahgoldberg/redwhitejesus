export interface Holiday {
  slug: string;
  name: string;
  emoji: string; // for data only — render SVG in UI
  description: string;
  significance: string;
  howObserved: string;
  scriptureRef: string;
  scriptureText: string;
  month: number;
  day?: number;
  isMoveable: boolean;
  approximateMonth?: number; // for moveable feasts, approximate month
  color: string;
}

export const holidays: Holiday[] = [
  {
    slug: "christmas",
    name: "Christmas",
    emoji: "🎄",
    description: "The celebration of the birth of Jesus Christ, the Son of God, who came to earth to redeem humanity.",
    significance:
      "Christmas marks the Incarnation — the moment when God became flesh and dwelt among us. It is the fulfillment of centuries of prophecy and the beginning of the salvation story. The birth of Jesus in Bethlehem was not a quiet historical footnote but the hinge on which all of human history turns. God, in an act of incomprehensible love, entered creation in human form, born to a carpenter's family in a stable, to live among the poor and the broken before dying and rising for the redemption of the world. Christians celebrate Christmas not as a sentimental holiday but as the announcement of cosmic hope: God has come, and nothing will ever be the same.",
    howObserved:
      "Christmas is observed through church services, often including a candlelight service on Christmas Eve. Families gather, gifts are exchanged in remembrance of the Magi's offerings, nativity scenes are displayed depicting the holy family, and carols are sung throughout the Advent and Christmas seasons. Many traditions observe the twelve days of Christmas from December 25 to January 5, ending with the Feast of Epiphany.",
    scriptureRef: "Luke 2:10-11",
    scriptureText:
      "But the angel said to them, 'Do not be afraid. I bring you good news that will cause great joy for all the people. Today in the town of David a Savior has been born to you; he is the Messiah, the Lord.'",
    month: 12,
    day: 25,
    isMoveable: false,
    color: "#CC2200",
  },
  {
    slug: "easter",
    name: "Easter",
    emoji: "✝️",
    description: "The resurrection of Jesus Christ from the dead — the central and defining event of the Christian faith.",
    significance:
      "Easter is the most important day in the Christian calendar. Without the resurrection, as the Apostle Paul wrote, faith is futile and Christians are to be pitied above all people. But the tomb was empty. Jesus rose bodily from the dead on the third day, defeating sin and death and opening the way for every human being to be reconciled to God. The resurrection is not a metaphor or a spiritual concept — it is a historical claim that the early church staked their lives on, and that transformed a movement of frightened disciples into a force that spread across the known world within a generation. Easter is not merely a spring holiday; it is the day that changes what death means for every person who has ever lived.",
    howObserved:
      "Easter is observed with sunrise services held at dawn to commemorate the early morning discovery of the empty tomb. Churches hold their largest services of the year, often with special music and flowers. Many families gather for Easter dinners featuring lamb as a symbol of Christ the Lamb of God. Easter egg traditions, while not biblical in origin, have become associated with new life and resurrection. Easter is preceded by Holy Week, the most sacred week of the Christian year.",
    scriptureRef: "1 Corinthians 15:20",
    scriptureText:
      "But Christ has indeed been raised from the dead, the firstfruits of those who have fallen asleep.",
    month: 4,
    isMoveable: true,
    approximateMonth: 4,
    color: "#CC2200",
  },
  {
    slug: "good-friday",
    name: "Good Friday",
    emoji: "✝️",
    description: "The solemn commemoration of the crucifixion and death of Jesus Christ on the cross.",
    significance:
      "Good Friday stands as the most somber day in the Christian year — yet it is called 'good' because through the suffering and death of Jesus, the work of redemption was accomplished. Christians believe that Jesus, fully God and fully human, bore the sin of the world on the cross. His death was not a tragedy interrupted by resurrection; it was the necessary and willing sacrifice that made resurrection and new life possible. The cross, once a symbol of Roman execution and shame, became the central symbol of Christian faith because it represents the love of God taken to its furthest possible expression: dying so that others may live.",
    howObserved:
      "Good Friday is observed with solemn church services, often featuring the reading of the Passion narrative, meditations on the Seven Last Words of Christ, and extended periods of silence and prayer. Many Christians fast on Good Friday. Churches may strip their altars, drape crosses in black, and dim the lights to reflect the gravity of the day. Hot cross buns, marked with a cross, are a traditional Good Friday food in many cultures.",
    scriptureRef: "John 3:16",
    scriptureText:
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    month: 4,
    isMoveable: true,
    approximateMonth: 4,
    color: "#1A1A1A",
  },
  {
    slug: "ash-wednesday",
    name: "Ash Wednesday",
    emoji: "🕊️",
    description: "The first day of Lent — a solemn season of repentance, fasting, and preparation before Easter.",
    significance:
      "Ash Wednesday marks the beginning of the forty-day season of Lent, which mirrors Jesus's forty days of fasting and temptation in the wilderness. The ashes used in the service — typically made from burned palm branches from the previous year's Palm Sunday — are placed on the forehead in the sign of the cross, accompanied by the words 'Remember that you are dust, and to dust you shall return.' It is a profound and humbling reminder of human mortality and the need for repentance. Ash Wednesday and the Lenten season that follows call Christians to examine their lives, turn away from sin, and turn toward God in anticipation of the resurrection celebrated at Easter.",
    howObserved:
      "Christians attend Ash Wednesday services where ashes are applied to the forehead. Many Christians fast or abstain from meat on this day and observe some form of fasting or giving up throughout the forty days of Lent. It is a day of reflection, prayer, and intentional spiritual discipline. The visible ashes worn throughout the day have become a public witness of faith and a conversation starter about the meaning of the season.",
    scriptureRef: "Joel 2:12-13",
    scriptureText:
      "'Even now,' declares the Lord, 'return to me with all your heart, with fasting and weeping and mourning.' Rend your heart and not your garments. Return to the Lord your God, for he is gracious and compassionate, slow to anger and abounding in love.",
    month: 2,
    isMoveable: true,
    approximateMonth: 2,
    color: "#4A4A4A",
  },
  {
    slug: "pentecost",
    name: "Pentecost",
    emoji: "🔥",
    description: "The descent of the Holy Spirit upon the apostles — called the birthday of the Church.",
    significance:
      "Pentecost, celebrated fifty days after Easter, marks the outpouring of the Holy Spirit upon the gathered disciples in Jerusalem. The event described in Acts 2 — tongues of fire, rushing wind, and the sudden ability to speak in languages not previously known — transformed a group of frightened and uncertain followers into the founding generation of the Christian church. Three thousand people were baptized that day. Pentecost is sometimes called the birthday of the Church because it marks the beginning of the community of believers empowered by the Spirit to carry the message of Christ to the ends of the earth. For Christians, Pentecost is a celebration not of a past event alone, but of the ongoing presence and power of the Holy Spirit in the Church today.",
    howObserved:
      "Pentecost is observed with church services often decorated in red — the color of fire and the Holy Spirit. Some traditions hold outdoor services or processions. Hymns celebrating the Holy Spirit are central to the liturgy. In many cultures, Pentecost has folk traditions associated with it including outdoor gatherings and communal meals. Charismatic and Pentecostal churches place particular emphasis on this day and the gifts of the Spirit.",
    scriptureRef: "Acts 2:1-4",
    scriptureText:
      "When the day of Pentecost came, they were all together in one place. Suddenly a sound like the blowing of a violent wind came from heaven and filled the whole house where they were sitting. They saw what seemed to be tongues of fire that separated and came to rest on each of them. All of them were filled with the Holy Spirit and began to speak in other tongues as the Spirit enabled them.",
    month: 5,
    isMoveable: true,
    approximateMonth: 5,
    color: "#CC2200",
  },
  {
    slug: "epiphany",
    name: "Epiphany",
    emoji: "⭐",
    description: "The revelation of Jesus to the Magi — and to all the nations of the world.",
    significance:
      "Epiphany, celebrated on January 6, marks the visit of the Magi to the infant Jesus and the revelation of Christ to the Gentile world. The Magi — traditionally numbered as three because of the three gifts of gold, frankincense, and myrrh — represent the nations outside Israel, and their journey to worship the newborn king signals that the salvation brought by Jesus is for all people everywhere, not just the Jewish nation. Epiphany is also associated with the Baptism of Jesus, where God declared from heaven 'This is my beloved Son' — another moment of divine revelation. The word 'epiphany' means 'manifestation' or 'appearance,' and this feast celebrates the ongoing revelation of God in Christ to a watching world.",
    howObserved:
      "Epiphany marks the official end of the Christmas season — the traditional twelfth day after Christmas. Some traditions feature the blessing of homes by tracing 'CMB' (the initials of the traditional names of the Magi) in chalk above the doorway. King cake is eaten in some cultures, featuring a small figure hidden inside representing the Christ child. Epiphany is a major feast in many Eastern Christian traditions and is sometimes called 'Little Christmas.'",
    scriptureRef: "Matthew 2:10-11",
    scriptureText:
      "When they saw the star, they were overjoyed. On coming to the house, they saw the child with his mother Mary, and they bowed down and worshiped him. Then they opened their treasures and presented him with gifts of gold, frankincense and myrrh.",
    month: 1,
    day: 6,
    isMoveable: false,
    color: "#B8960C",
  },
  {
    slug: "advent",
    name: "Advent",
    emoji: "🕯️",
    description: "The four-week season of waiting, hope, and preparation leading up to Christmas.",
    significance:
      "Advent — from the Latin 'adventus,' meaning 'coming' — is a season of joyful anticipation rather than celebration. It asks Christians to enter into the experience of waiting for the coming of Christ, both in remembrance of the historical anticipation of the Messiah by Israel and in forward-looking expectation of Christ's return at the end of history. The Advent season honors the fullness of the Christian timeline: Christ has come, Christ is present, and Christ will come again. It is a counter-cultural invitation to slow down, to cultivate hope, and to make room — as Mary made room — for the presence of God.",
    howObserved:
      "Advent is observed through the lighting of the Advent wreath, which holds four candles — traditionally three purple and one pink — representing hope, peace, joy, and love. One candle is lit each Sunday of Advent, with a fifth white candle lit on Christmas Day. Advent calendars, featuring twenty-four doors opened one per day from December 1 to Christmas Eve, are a beloved tradition. Many churches hold special evening Advent services. It is a season for reading Scripture, prayer, and simplicity — a counterweight to the commercial frenzy of the surrounding culture.",
    scriptureRef: "Isaiah 9:6",
    scriptureText:
      "For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.",
    month: 12,
    isMoveable: true,
    approximateMonth: 12,
    color: "#5B2D8E",
  },
  {
    slug: "palm-sunday",
    name: "Palm Sunday",
    emoji: "🌿",
    description: "Jesus's triumphal entry into Jerusalem — the beginning of Holy Week.",
    significance:
      "Palm Sunday opens Holy Week, the most sacred seven days in the Christian calendar. On this day, Jesus rode into Jerusalem on a donkey, fulfilling the prophecy of Zechariah that the king would come 'gentle and riding on a donkey.' The crowds spread palm branches and their cloaks on the road, shouting 'Hosanna' — a word meaning 'save us.' The mood is triumphant, even jubilant. Yet within a week, the same crowds would call for his crucifixion. Palm Sunday holds the tension that defines Christian faith: glory and suffering, triumph and sacrifice, the king who comes not to conquer by force but to give his life as a ransom for many.",
    howObserved:
      "Palm Sunday services often begin with a procession, with congregants carrying palm fronds or crosses made of palm. The Passion narrative — the full account of Jesus's arrest, trial, and crucifixion — is typically read aloud during the service, often with different voices taking different parts. Palm branches distributed at the service are sometimes kept by families throughout the year, and many churches burn these palms to create the ashes used on the following year's Ash Wednesday.",
    scriptureRef: "Matthew 21:9",
    scriptureText:
      "The crowds that went ahead of him and those that followed shouted, 'Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest heaven!'",
    month: 4,
    isMoveable: true,
    approximateMonth: 4,
    color: "#2E7D32",
  },
];

export function getHolidayBySlug(slug: string): Holiday | undefined {
  return holidays.find((h) => h.slug === slug);
}

export function getRelatedHolidays(slug: string, count = 3): Holiday[] {
  return holidays.filter((h) => h.slug !== slug).slice(0, count);
}
