const ingredients = [
  {
    id: 1,
    title: "1 pound oats",
  },
  {
    id: 2,
    title: "6 cucumber",
  },
  {
    id: 3,
    title: "2 eggs",
  },
  {
    id: 4,
    title: "no MSG",
  },
];

const books = [
  {
    id: 1,
    name: "Alchemist",
    author: "Paulo Coehlo",
    price: 165,
    image: require("../../assets/books/Alchemist.jpg"),
    ingredients,
    description:
      " The novel was originally published in Portuguese but was later translated into other languages as it gained popularity worldwide. There is also a short story within American literature by the same name; however, The Alchemist short story was written by American author H.P. Lovecraft and published in 1916. Although some readers may think of Coelho's The Alchemist as a short story, it is considered a novel because of the length of the work—nearly 200 pages. The novel is a modern classic that spans the genres of literary fiction, fantasy fiction, and adventure fiction.",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Atomic Habits",
    author: "James Clear",
    price: 511,
    image: require("../../assets/books/AtomicHabits.jpg"),
    ingredients,
    description:
      "Atomic Habits by James Clear is a comprehensive, practical guide on how to change your habits and get 1% better every day. Using a framework called the Four Laws of Behavior Change, Atomic Habits teaches readers a simple set of rules for creating good habits and breaking bad ones.",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Ikigai",
    author: "Hector Garcia",
    price: 347,
    image: require("../../assets/books/Ikigai.jpg"),
    ingredients,
    description:
      "The Japanese word “ikigai” means a “life purpose” or “raison d'être.” Ikigai refers to defining your personal meaning of life in relation to your talents, passions, and profession, as well as what you can give to the wider world.",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Murakami",
    author: "H. Murakami",
    price: 306,
    image: require("../../assets/books/Murakami.jpg"),
    ingredients,
    description:
      "Murakami's After Dark is about a young woman called Mari Asai who encounters several people in one night in downtown Tokyo. Through her interactions with these other characters, Mari is able to form a closer connection with her sister and also learn more about herself.",
    rating: 4.7,
  },
  
  {
    id: 4,
    name: "Master Your Emotions",
    author: "T. Meurisse",
    price: 99,
    image: require("../../assets/books/MasterYourEmotions.jpg"),
    ingredients,
    description:
      "In Master Your Emotions (2018), Thibaut Meurisse provides a practical guide to help you jump straight into the driver's seat of your own life, steering yourself in the direction of inner peace and what you truly desire.",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Rich Dad Poor Dad",
    author: "R. Kiyosaki",
    price: 343,
    image: require("../../assets/books/RichDadPoorDad.jpg"),
    ingredients,
    description:
      "Rich Dad, Poor Dad by Robert T. Kiyosaki is a personal finance book that emphasizes the importance of financial education, teaches how to make money work for you, and challenges traditional beliefs about money.",
    rating: 5,
  },
  {
    id: 7,
    name: "The 5 am club",
    author: "Robin Sharma",
    price: 240,
    image: require("../../assets/books/The5amClub.jpg"),
    ingredients,
    description:
      "The 5 AM Club (2018) shows how embracing a revolutionary morning routine can deliver epic results. Through the enchanting story of an entrepreneur, an artist, and their eccentric billionaire mentor, it explains how you can use the first hour of your day to drive personal growth and get the most out of life.",
    rating: 4.0,
  },
  {
    id: 8,
    name: "The Fault In Our Stars",
    author: "John Green",
    price: 151,
    image: require("../../assets/books/TheFaultInOurStars.jpg"),
    ingredients,
    description:
      "The Fault in Our Stars by John Green is a young adult fiction novel that narrates the story of a 16-year-old girl who is diagnosed with cancer. She joins a support group where she meets Augustus, and there is a rollercoaster of emotions throughout this novel as the relationship between Hazel and Augustus develops.",
    rating: 3.5,
  },
];

export default books;
