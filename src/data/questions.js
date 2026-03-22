// Easy Questions (Basic Facts & Direct Knowledge)
const easyPool = [
  // Set 1
  { id: 1, question: "What is the capital city of Bihar?", options: ["Gaya", "Bhagalpur", "Patna", "Muzaffarpur"], correctAnswer: "Patna" },
  { id: 2, question: "Which ancient university in Bihar was one of the earliest global centers of learning?", options: ["Vikramshila", "Nalanda University", "Taxila", "Odantapuri"], correctAnswer: "Nalanda University" },
  { id: 3, question: "The Mahabodhi Temple, where Gautama Buddha attained enlightenment, is located in which city?", options: ["Rajgir", "Vaishali", "Bodh Gaya", "Patna"], correctAnswer: "Bodh Gaya" },
  { id: 4, question: "Which major river flows through the middle of Bihar, dividing it into north and south?", options: ["Kosi", "Yamuna", "Brahmaputra", "Ganga"], correctAnswer: "Ganga" },
  { id: 5, question: "What is the massive dome-shaped granary in Patna built by the British called?", options: ["Patna Museum", "Sher Shah Tomb", "Golghar", "Khuda Bakhsh Library"], correctAnswer: "Golghar" },
  { id: 6, question: "Which festival, dedicated to the Sun God, is considered the most significant festival of Bihar?", options: ["Diwali", "Holi", "Chhath Puja", "Makar Sankranti"], correctAnswer: "Chhath Puja" },
  { id: 7, question: "Which of the following is the official state animal of Bihar?", options: ["Tiger", "Gaur (Mithun)", "Elephant", "Rhinoceros"], correctAnswer: "Gaur (Mithun)" },
  { id: 8, question: "Who was the first Chief Minister of Bihar?", options: ["Dr. Rajendra Prasad", "Sri Krishna Sinha", "Karpoori Thakur", "Lalu Prasad Yadav"], correctAnswer: "Sri Krishna Sinha" },
  { id: 9, question: "The famous Madhubani painting style originated in which historical region of Bihar?", options: ["Magadh", "Mithila", "Bhojpur", "Anga"], correctAnswer: "Mithila" },
  { id: 10, question: "Which ancient mathematician and astronomer, famous for the concept of zero, was born in Kusumapura (modern Patna)?", options: ["Bhaskara I", "Brahmagupta", "Aryabhata", "Varahamihira"], correctAnswer: "Aryabhata" },

  // Set 2
  { id: 11, question: "Who was the first President of India, hailing from Bihar?", options: ["Jawaharlal Nehru", "Dr. Rajendra Prasad", "Sardar Patel", "Dr. S. Radhakrishnan"], correctAnswer: "Dr. Rajendra Prasad" },
  { id: 12, question: "In which district is the Valmiki National Park, the only national park in Bihar, located?", options: ["West Champaran", "East Champaran", "Kaimur", "Gaya"], correctAnswer: "West Champaran" },
  { id: 13, question: "Which Indian leader led his first major Satyagraha movement in Champaran, Bihar in 1917?", options: ["Subhas Chandra Bose", "Sardar Patel", "Mahatma Gandhi", "Bhagat Singh"], correctAnswer: "Mahatma Gandhi" },
  { id: 14, question: "Which great Emperor of the Maurya Dynasty embraced Buddhism after the Kalinga War?", options: ["Chandragupta", "Bindusara", "Ashoka", "Bimbisara"], correctAnswer: "Ashoka" },
  { id: 15, question: "What is the state flower of Bihar?", options: ["Lotus", "Kachnar (Orchid Tree)", "Marigold", "Rose"], correctAnswer: "Kachnar (Orchid Tree)" },
  { id: 16, question: "Which Sikh Guru was born in Patna, where the Takht Sri Patna Sahib now stands?", options: ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan", "Guru Tegh Bahadur"], correctAnswer: "Guru Gobind Singh" },
  { id: 17, question: "Which ancient city served as the capital of the powerful Magadha Empire?", options: ["Rajgir", "Vaishali", "Ayodhya", "Lumbini"], correctAnswer: "Rajgir" },
  { id: 18, question: "Which river is widely known as the 'Sorrow of Bihar' due to frequent flooding?", options: ["Ganga", "Kosi", "Gandak", "Son"], correctAnswer: "Kosi" },
  { id: 19, question: "The Sonepur Cattle Fair, one of Asia's largest, is held at the confluence of the Ganga and which other river?", options: ["Yamuna", "Gandak", "Kosi", "Punpun"], correctAnswer: "Gandak" },
  { id: 20, question: "On what date is 'Bihar Diwas' (Bihar Day) celebrated every year?", options: ["1st April", "22nd March", "15th August", "26th January"], correctAnswer: "22nd March" },

  // Set 3
  { id: 21, question: "Which district in Bihar is renowned globally for its sweet and juicy 'Shahi Litchi'?", options: ["Muzaffarpur", "Darbhanga", "Saharsa", "Purnea"], correctAnswer: "Muzaffarpur" },
  { id: 22, question: "Which medieval ruler, known for building the Grand Trunk Road, is interred in a magnificent tomb in Sasaram, Bihar?", options: ["Akbar", "Aurangzeb", "Sher Shah Suri", "Babur"], correctAnswer: "Sher Shah Suri" },
  { id: 23, question: "What is the most widely spoken language/dialect in the western regions of Bihar, like Arrah and Buxar?", options: ["Maithili", "Magahi", "Bhojpuri", "Angika"], correctAnswer: "Bhojpuri" },
  { id: 24, question: "Who is popularly known as the 'Loknayak' of Bihar and led the 'Total Revolution' in 1974?", options: ["Jayaprakash Narayan", "Rajendra Prasad", "Karpoori Thakur", "Lalu Prasad Yadav"], correctAnswer: "Jayaprakash Narayan" },
  { id: 25, question: "Which state is situated immediately to the east of Bihar?", options: ["Uttar Pradesh", "West Bengal", "Jharkhand", "Nepal"], correctAnswer: "West Bengal" },
  { id: 26, question: "The Mahatma Gandhi Setu bridge connects Patna to which city across the Ganga river?", options: ["Hajipur", "Muzaffarpur", "Darbhanga", "Chhapra"], correctAnswer: "Hajipur" },
  { id: 27, question: "What is the primary food crop grown in Bihar, essential to the local diet?", options: ["Wheat", "Sugarcane", "Rice", "Maize"], correctAnswer: "Rice" },
  { id: 28, question: "Which famous 20th-century Hindi poet from Bihar earned the prestigious title 'Rashtrakavi'?", options: ["Phanishwar Nath Renu", "Ramdhari Singh Dinkar", "Vidyapati", "Bikhari Thakur"], correctAnswer: "Ramdhari Singh Dinkar" },
  { id: 29, question: "What is the traditional attire of women in rural Bihar?", options: ["Lehenga", "Salwar Kameez", "Sari", "Mekhela Chador"], correctAnswer: "Sari" },
  { id: 30, question: "Which Hindu deity is the primary focus of the Chhath Puja festival in Bihar?", options: ["Lord Shiva", "Lord Vishnu", "Sun God (Surya)", "Goddess Durga"], correctAnswer: "Sun God (Surya)" }
];

// Medium Questions (Slightly Deeper Historical/Cultural Knowledge)
const mediumPool = [
  // Set 1
  { id: 31, question: "Which classical scholar authored the 'Arthashastra' and guided the establishment of the Mauryan Empire?", options: ["Aryabhata", "Chanakya (Kautilya)", "Panini", "Kalidasa"], correctAnswer: "Chanakya (Kautilya)" },
  { id: 32, question: "The Kakolat Waterfall, a popular tourist destination, is situated in which district?", options: ["Gaya", "Nawada", "Rohtas", "Kaimur"], correctAnswer: "Nawada" },
  { id: 33, question: "Which famous bird sanctuary, a large oxbow lake, is located in Begusarai district?", options: ["Sultanpur", "Kanwar Lake", "Bharatpur", "Nal Sarovar"], correctAnswer: "Kanwar Lake" },
  { id: 34, question: "Bihar is the largest producer of which unique aquatic seed crop in India, famously consumed roasted?", options: ["Water Chestnut", "Makhana (Fox nut)", "Lotus", "Water Lily"], correctAnswer: "Makhana (Fox nut)" },
  { id: 35, question: "The pure white Vishwa Shanti Stupa, accessible via a ropeway, is located on top of Ratnagiri Hill in:", options: ["Patna", "Gaya", "Rajgir", "Nalanda"], correctAnswer: "Rajgir" },
  { id: 36, question: "What was the ancient name of Patna during the Magadha period?", options: ["Prayagraj", "Kanakpur", "Pataliputra", "Ayodhya"], correctAnswer: "Pataliputra" },
  { id: 37, question: "Which of these regions in Bihar is renowned for its traditional Bawan Buti weaving technique?", options: ["Bhagalpur", "Darbhanga", "Nalanda", "Purnia"], correctAnswer: "Nalanda" },
  { id: 38, question: "The Didarganj Yakshi statue, a brilliant example of Mauryan polished stone art, is currently housed in which museum?", options: ["National Museum, Delhi", "Patna Museum", "Bihar Museum", "Indian Museum, Kolkata"], correctAnswer: "Bihar Museum" },
  { id: 39, question: "Who was the founder of the powerful Mauryan Empire?", options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"], correctAnswer: "Chandragupta Maurya" },
  { id: 40, question: "Which Great Jain Tirthankara was born in Kundagrama, near Vaishali in Bihar?", options: ["Rishabhanatha", "Parshvanatha", "Mahavira", "Neminatha"], correctAnswer: "Mahavira" },

  // Set 2
  { id: 41, question: "Which prominent socialist leader and former Chief Minister of Bihar is known for championing social justice and reservations?", options: ["Nitish Kumar", "Lalu Prasad Yadav", "Karpoori Thakur", "Sri Krishna Sinha"], correctAnswer: "Karpoori Thakur" },
  { id: 42, question: "The famous Hindi novel 'Maila Aanchal' was written by which legendary author from Bihar?", options: ["Premchand", "Ramdhari Singh Dinkar", "Phanishwar Nath Renu", "Bhikhari Thakur"], correctAnswer: "Phanishwar Nath Renu" },
  { id: 43, question: "In which year did Bihar formally become a separate province from the Bengal Presidency under British rule?", options: ["1911", "1912", "1936", "1947"], correctAnswer: "1912" },
  { id: 44, question: "Who valiantly led the Great Rebellion of 1857 in Bihar against the British East India Company?", options: ["Babu Kunwar Singh", "Mangal Pandey", "Tatya Tope", "Nana Sahib"], correctAnswer: "Babu Kunwar Singh" },
  { id: 45, question: "Which airport in Bihar's capital is named after a prominent freedom fighter?", options: ["Birsa Munda Airport", "Jayaprakash Narayan Airport", "Lal Bahadur Shastri Airport", "Netaji Subhash Chandra Bose Airport"], correctAnswer: "Jayaprakash Narayan Airport" },
  { id: 46, question: "Bhikhari Thakur is famously known as the 'Shakespeare' of which regional language?", options: ["Maithili", "Magahi", "Bhojpuri", "Angika"], correctAnswer: "Bhojpuri" },
  { id: 47, question: "Which major tributary river joins the Ganga near Patna from the south?", options: ["Gandak", "Kosi", "Son", "Mahananda"], correctAnswer: "Son" },
  { id: 48, question: "What famous structure in Rajgir allows tourists to walk high above the ground with a transparent floor?", options: ["Rajgir Glass Skywalk", "Nalanda Suspension Bridge", "Vishwa Shanti Ropeway", "Magadh Skywalk"], correctAnswer: "Rajgir Glass Skywalk" },
  { id: 49, question: "In the context of Bihar's produce, what do Zardalu mango, Katarni rice, and Magahi paan have in common?", options: ["They are exclusively exported", "They have Geographical Indication (GI) tags", "They are only grown in Patna", "They are winter crops only"], correctAnswer: "They have Geographical Indication (GI) tags" },
  { id: 50, question: "Which prominent international organization declared the Mahabodhi Temple Complex in Bodh Gaya a World Heritage Site?", options: ["UNICEF", "UNESCO", "WHO", "UNEP"], correctAnswer: "UNESCO" },

  // Set 3
  { id: 51, question: "Which of the following describes the 'Manjusha' Art form of Bihar?", options: ["Scroll painting", "Mural painting", "Snake motif painting", "Sand art"], correctAnswer: "Snake motif painting" },
  { id: 52, question: "The ruins of Vaishali are famous for the site of the second Buddhist council. It was also the capital of which ancient republic?", options: ["Vajjis", "Mallas", "Kuru", "Panchala"], correctAnswer: "Vajjis" },
  { id: 53, question: "Which district of Bihar has the highest literacy rate as per the 2011 Census?", options: ["Patna", "Rohtas", "Munger", "Aurangabad"], correctAnswer: "Rohtas" },
  { id: 54, question: "The ancient rock-cut Barabar Hill Caves were originally constructed for which ascetic sect?", options: ["Buddhists", "Jains", "Ajivikas", "Hindus"], correctAnswer: "Ajivikas" },
  { id: 55, question: "Which medieval traveler visited Nalanda and wrote detailed accounts of its grandeur?", options: ["Ibn Battuta", "Marco Polo", "Hiuen Tsang (Xuanzang)", "Al-Biruni"], correctAnswer: "Hiuen Tsang (Xuanzang)" },
  { id: 56, question: "Gaya is a major pilgrimage site for offering 'Pind Daan'. On the banks of which river is it located?", options: ["Ganga", "Falgu", "Punpun", "Son"], correctAnswer: "Falgu" },
  { id: 57, question: "Which is the longest river flowing solely through Bihar?", options: ["Ganga", "Burhi Gandak", "Kosi", "Mahananda"], correctAnswer: "Burhi Gandak" },
  { id: 58, question: "Which dynasty ruled Bihar immediately before the Mauryas?", options: ["Shunga Dynasty", "Nanda Dynasty", "Haryanka Dynasty", "Gupta Dynasty"], correctAnswer: "Nanda Dynasty" },
  { id: 59, question: "What is the primary theme of Madhubani paintings?", options: ["Nature and Hindu deities", "Modern cityscapes", "Abstract geometry", "Islamic calligraphy"], correctAnswer: "Nature and Hindu deities" },
  { id: 60, question: "To which crop is the 'Shahi' variety native in Bihar?", options: ["Mango", "Litchi", "Banana", "Makhana"], correctAnswer: "Litchi" }
];


export const questionSets = [
  { id: 1, difficulty: 'easy', title: "LEVEL 1: BIHAR BASICS", questions: easyPool.slice(0, 10) },
  { id: 2, difficulty: 'easy', title: "LEVEL 2: ICONS & HERITAGE", questions: easyPool.slice(10, 20) },
  { id: 3, difficulty: 'easy', title: "LEVEL 3: CULTURE & GEOGRAPHY", questions: easyPool.slice(20, 30) },
  { id: 4, difficulty: 'medium', title: "LEVEL 4: MONUMENTS & LEGACIES", questions: mediumPool.slice(0, 10) },
  { id: 5, difficulty: 'medium', title: "LEVEL 5: HISTORY DEEP DIVE", questions: mediumPool.slice(10, 20) },
  { id: 6, difficulty: 'medium', title: "LEVEL 6: ART & RIVERS", questions: mediumPool.slice(20, 30) }
];

// Shuffle helper
export const shuffle = (array) => {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
