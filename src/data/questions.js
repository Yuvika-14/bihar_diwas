const nalanda = '/images/nalanda_university.png';
const rajgir = '/images/rajgir_stupa.png';
const mahabodhi = '/images/mahabodhi_temple.png';
const golghar = '/images/golghar.png';
const museum = '/images/museum.png';
const chief = '/images/chief.png';
const madhu = '/images/madhu.png';
const vaishali = '/images/vaishali.png';
const bridge = '/images/bridge.png';
const balmiki = '/images/balmiki.png';
const bhojpuri = '/images/bhojpuri.png';
const diwas = '/images/diwas.png';
const flower = '/images/flower.png';
const fort = '/images/fort.png';
const gandhi = '/images/gandhi.png';
const jay = '/images/jay.png';
const kanwar = '/images/kanwar.png';
const litchi = '/images/litchi.png';
const manjusha = '/images/manjusha.png';
const nawada = '/images/nawada.png';
const raj = '/images/raj.png';
const rice = '/images/rice.png';
const road = '/images/road.png';
const sari = '/images/sari.png';
const sikh = '/images/sikh.png';
const sonpur = '/images/sonpur.png';
const tree = '/images/tree.png';
const vikram = '/images/vikram.png';
// Placeholders for remaining images
const mithun = '/images/mithun.png';
const park = '/images/park.png';
const chandra = '/images/chandra.png';
const chatt = '/images/chatt.png';
const arya = '/images/arya.png';
const kosi = '/images/kosi.png';
const barbar = '/images/barbar.png';
const tomb = '/images/tomb.png';

const qPool = [
  // Set 1
  { id: 1, image: nalanda, question: "Identify this ancient center of learning, considered one of the earliest universities in the world.", options: ["Vikramshila", "Nalanda University", "Taxila", "Odantapuri"], correctAnswer: "Nalanda University" },
  { id: 2, image: rajgir, question: "This pure white marble pagoda with golden statues is located on top of Ratnagiri Hill. What is it called?", options: ["Sanchi Stupa", "Dhamek Stupa", "Vishwa Shanti Stupa", "Bawali Stupa"], correctAnswer: "Vishwa Shanti Stupa" },
  { id: 3, image: mahabodhi, question: "This UNESCO World Heritage site marks the location where the Buddha is said to have attained enlightenment.", options: ["Mahabodhi Temple", "Kashi Vishwanath", "Konark Sun Temple", "Meenakshi Temple"], correctAnswer: "Mahabodhi Temple" },
  { id: 4, image: golghar, question: "Built in 1786 by Captain John Garstin to store grain after a devastating famine, what is this massive dome called?", options: ["Patna Museum", "Sher Shah Tomb", "Golghar", "Khuda Bakhsh Library"], correctAnswer: "Golghar" },
  { id: 5, image: museum, question: "Known for its modern, rust-colored Corten steel architecture, which museum is this?", options: ["National Museum", "Bihar Museum", "Jalan Museum", "Gandhi Sangrahalaya"], correctAnswer: "Bihar Museum" },
  { id: 6, image: vaishali, question: "This polished sandstone pillar, topped with a single lion, was erected by Emperor Ashoka. Where is it located?", options: ["Sarnath", "Lumbini", "Vaishali", "Lauriya Nandangarh"], correctAnswer: "Vaishali" },
  { id: 7, image: vikram, question: "Along with Nalanda, this was one of the two most important centers of learning in India during the Pala Empire.", options: ["Vikramshila", "Somapura", "Jagaddala", "Odantapuri"], correctAnswer: "Vikramshila" },
  { id: 8, image: fort, question: "This ancient hill fort is considered one of the largest and strongest forts in India, captured by Sher Shah Suri.", options: ["Munger Fort", "Rohtasgarh Fort", "Jalargarh Fort", "Chunar Fort"], correctAnswer: "Rohtasgarh Fort" },
  { id: 9, image: tomb, question: "This stunning octagonal mausoleum of red sandstone sits in the middle of an artificial lake in Sasaram.", options: ["Tomb of Hasan Suri", "Tomb of Makhdum Yahya", "Tomb of Sher Shah Suri", "Tomb of Ibrahim Suri"], correctAnswer: "Tomb of Sher Shah Suri" },
  { id: 10, image: barbar, question: "These are the oldest surviving rock-cut caves in India, dating from the Maurya Empire. What are they called?", options: ["Ajanta Caves", "Ellora Caves", "Elephanta Caves", "Barabar Caves"], correctAnswer: "Barabar Caves" },
  
  // Set 2
  { id: 11, image: chief, question: "Who was the first Chief Minister of Bihar?", options: ["Dr. Rajendra Prasad", "Sri Krishna Sinha", "Karpoori Thakur", "Lalu Prasad Yadav"], correctAnswer: "Sri Krishna Sinha" },
  { id: 12, image:chatt, question: "Which festival is dedicated to the Sun God and is the most significant in Bihar?", options: ["Diwali", "Holi", "Chhath Puja", "Makar Sankranti"], correctAnswer: "Chhath Puja" },
  { id: 13, image: arya, question: "Which famous mathematician and astronomer from ancient India was born in Kusumapura (modern Patna)?", options: ["Bhaskara I", "Brahmagupta", "Aryabhata", "Varahamihira"], correctAnswer: "Aryabhata" },
  { id: 14, image: golghar, question: "What is the capital of Bihar?", options: ["Gaya", "Bhagalpur", "Patna", "Muzaffarpur"], correctAnswer: "Patna" },
  { id: 15, image: kosi, question: "Which river is known as the 'Sorrow of Bihar'?", options: ["Ganga", "Kosi", "Gandak", "Son"], correctAnswer: "Kosi" },
  { id: 16, image: madhu, question: "The famous Madhubani painting originated in which region of Bihar?", options: ["Magadh", "Mithila", "Bhojpur", "Anga"], correctAnswer: "Mithila" },
  { id: 17, image: park, question: "Which National Park is located in Bihar?", options: ["Jim Corbett", "Kaziranga", "Valmiki National Park", "Sundarbans"], correctAnswer: "Valmiki National Park" },
  { id: 18, image: chandra, question: "Who founded the Maurya Empire?", options: ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"], correctAnswer: "Chandragupta Maurya" },
  { id: 19, image: rajgir, question: "Which ancient city was the capital of the Magadha Empire?", options: ["Rajgir", "Vaishali", "Pataliputra", "Ayodhya"], correctAnswer: "Rajgir" },
  { id: 20, image: mithun, question: "What is the official state animal of Bihar?", options: ["Tiger", "Gaur (Mithun)", "Elephant", "Rhinoceros"], correctAnswer: "Gaur (Mithun)" },

  // Set 3
  { id: 21, image: gandhi, question: "Which famous Indian leader successfully led the Champaran Satyagraha in Bihar?", options: ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose", "Mahatma Gandhi"], correctAnswer: "Mahatma Gandhi" },
  { id: 22, image: tree, question: "The Bodhi Tree, under which Gautama Buddha attained enlightenment, is in which city?", options: ["Patna", "Rajgir", "Bodh Gaya", "Vaishali"], correctAnswer: "Bodh Gaya" },
  { id: 23, image: road, question: "Which medieval ruler built the Grand Trunk Road?", options: ["Akbar", "Aurangzeb", "Sher Shah Suri", "Babur"], correctAnswer: "Sher Shah Suri" },
  { id: 24, image: bridge, question: "Which state is situated to the East of Bihar?", options: ["Uttar Pradesh", "West Bengal", "Jharkhand", "Nepal"], correctAnswer: "West Bengal" },
  { id: 25, image: sari, question: "What is the traditional attire of women in Bihar?", options: ["Lehenga", "Salwar Kameez", "Sari", "Mekhela Chador"], correctAnswer: "Sari" },
  { id: 26, image: balmiki, question: "Which ancient texts were composed by sage Valmiki?", options: ["Mahabharata", "Ramayana", "Vedas", "Upanishads"], correctAnswer: "Ramayana" },
  { id: 27, image: vaishali, question: "The ruins of Vaishali are famous for the site of the second Buddhist council. Who convened it?", options: ["Ajatashatru", "Kalashoka", "Ashoka", "Kanishka"], correctAnswer: "Kalashoka" },
  { id: 28, image: manjusha, question: "Which of the following describes the Manjusha Art form of Bihar?", options: ["Scroll painting", "Mural painting", "Snake motif painting", "Sand art"], correctAnswer: "Snake motif painting" },
  { id: 29, image: bhojpuri, question: "Bhojpuri, Maithili, and Magahi are primarily what?", options: ["Dance forms", "Musical instruments", "Languages/Dialects", "Festivals"], correctAnswer: "Languages/Dialects" },
  { id: 30, image: kanwar, question: "Which famous bird sanctuary is located in Begusarai district?", options: ["Sultanpur", "Kanwar Lake", "Bharatpur", "Nal Sarovar"], correctAnswer: "Kanwar Lake" },

  // Set 4
  { id: 31, image: jay, question: "Who was the 'Loknayak' of Bihar?", options: ["Jayaprakash Narayan", "Rajendra Prasad", "Bindeshwari Dubey", "Jagannath Mishra"], correctAnswer: "Jayaprakash Narayan" },
  { id: 32, image: sonpur, question: "The famous Sonepur Cattle Fair is held on the confluence of which rivers?", options: ["Ganga and Yamuna", "Ganga and Gandak", "Kosi and Bagmati", "Son and Punpun"], correctAnswer: "Ganga and Gandak" },
  { id: 33, image: litchi, question: "Which district of Bihar is known for its Litchi production?", options: ["Muzaffarpur", "Darbhanga", "Saharsa", "Purnea"], correctAnswer: "Muzaffarpur" },
  { id: 34, image: flower, question: "What is the state flower of Bihar?", options: ["Lotus", "Kachnar (Orchid Tree)", "Marigold", "Rose"], correctAnswer: "Kachnar (Orchid Tree)" },
  { id: 35, image: sikh, question: "Which Sikh Guru was born in Patna?", options: ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan", "Guru Tegh Bahadur"], correctAnswer: "Guru Gobind Singh" },
  { id: 36, image: diwas, question: "When is Bihar Diwas celebrated?", options: ["1st April", "22nd March", "15th August", "26th January"], correctAnswer: "22nd March" },
  { id: 37, image: raj, question: "Which notable freedom fighter from Bihar served as the first President of independent India?", options: ["Dr. Rajendra Prasad", "Maulana Abul Kalam Azad", "Dr. Zakir Husain", "V.V. Giri"], correctAnswer: "Dr. Rajendra Prasad" },
  { id: 38, image: vaishali, question: "Which ancient republic, considered one of the earliest, had its capital at Vaishali?", options: ["Vajjis", "Mallas", "Kuru", "Panchala"], correctAnswer: "Vajjis" },
  { id: 39, image: rice, question: "What is the primary crop grown in Bihar?", options: ["Wheat", "Sugarcane", "Rice", "Maize"], correctAnswer: "Rice" },
  { id: 40, image:nawada, question: "The Kakolat Waterfall is situated in which district?", options: ["Gaya", "Nawada", "Rohtas", "Kaimur"], correctAnswer: "Nawada" },
  
  // Set 5
  { id: 41, image: chandra, question: "Who was the last ruler of the Mauryan Empire?", options: ["Brihadratha", "Samprati", "Dasharatha", "Bindusara"], correctAnswer: "Brihadratha" },
  { id: 42, image: mithun, question: "What is the literacy rate of Bihar as per the 2011 Census?", options: ["58.5%", "61.8%", "63.8%", "54.2%"], correctAnswer: "61.8%" },
  { id: 43, image: rajgir, question: "In which year did the Battle of Buxar take place?", options: ["1757", "1764", "1761", "1765"], correctAnswer: "1764" },
  { id: 44, image: gandhi, question: "Who led the Great Rebellion of 1857 in Bihar?", options: ["Babu Kunwar Singh", "Mangal Pandey", "Tatya Tope", "Nana Sahib"], correctAnswer: "Babu Kunwar Singh" },
  { id: 45, image: madhu, question: "Which famous poet from Bihar earned the title 'Rashtrakavi'?", options: ["Phanishwar Nath Renu", "Ramdhari Singh Dinkar", "Vidyapati", "Bikhari Thakur"], correctAnswer: "Ramdhari Singh Dinkar" },
  { id: 46, image: bhojpuri, question: "The famous novel 'Maila Aanchal' was written by which Bihari author?", options: ["Premchand", "Ramdhari Singh Dinkar", "Phanishwar Nath Renu", "Bhikhari Thakur"], correctAnswer: "Phanishwar Nath Renu" },
  { id: 47, image: chief, question: "When did Bihar formally become a separate province from the Bengal Presidency?", options: ["1911", "1912", "1936", "1947"], correctAnswer: "1912" },
  { id: 48, image: bridge, question: "Mahatma Gandhi Setu connects Patna to which city in the north?", options: ["Hajipur", "Muzaffarpur", "Darbhanga", "Chhapra"], correctAnswer: "Hajipur" },
  { id: 49, image: vaishali, question: "Which great Jain Tirthankara was born in Kundagrama (near Vaishali)?", options: ["Rishabhanatha", "Parshvanatha", "Mahavira", "Neminatha"], correctAnswer: "Mahavira" },
  { id: 50, image: nalanda, question: "Who destroyed the ancient university of Nalanda?", options: ["Qutb al-Din Aibak", "Muhammad bin Tughluq", "Bakhtiyar Khalji", "Alauddin Khalji"], correctAnswer: "Bakhtiyar Khalji" },

  // Set 6
  { id: 51, image: tree, question: "Where was the first Buddhist Council held?", options: ["Pataliputra", "Rajgir", "Vaishali", "Kundalvana"], correctAnswer: "Rajgir" },
  { id: 52, image: litchi, question: "To which crop is the 'Shahi' variety native in Bihar?", options: ["Mango", "Litchi", "Banana", "Makhana"], correctAnswer: "Litchi" },
  { id: 53, image: kosi, question: "Which is the longest river flowing solely through Bihar?", options: ["Ganga", "Burhi Gandak", "Kosi", "Mahananda"], correctAnswer: "Burhi Gandak" },
  { id: 54, image: tomb, question: "Which prominent architectural structure in Bihar was modelled on the Taj Mahal?", options: ["Tomb of Sher Shah", "Golghar", "Maner Sharif", "Pathar Ki Masjid"], correctAnswer: "Maner Sharif" },
  { id: 55, image: park, question: "Kanwar Lake Bird Sanctuary is located in which district?", options: ["Begusarai", "Bhagalpur", "Patna", "West Champaran"], correctAnswer: "Begusarai" },
  { id: 56, image: sonpur, question: "What is the historical name of the famous cattle fair at Sonepur?", options: ["Madavgarh Mela", "Harihar Kshetra Mela", "Maghi Mela", "Shravani Mela"], correctAnswer: "Harihar Kshetra Mela" },
  { id: 57, image: rajgir, question: "The Cyclopean Wall, one of the oldest examples of cyclopean masonry, is located in?", options: ["Nalanda", "Pataliputra", "Rajgir", "Vaishali"], correctAnswer: "Rajgir" },
  { id: 58, image: road, question: "Who shifted the capital of Magadha from Rajgir to Pataliputra?", options: ["Bimbisara", "Udayin", "Kalashoka", "Shishunaga"], correctAnswer: "Udayin" },
  { id: 59, image: diwas, question: "During which era did the famous Nalanda University flourish the most?", options: ["Mauryan", "Kushan", "Gupta", "Mughal"], correctAnswer: "Gupta" },
  { id: 60, image: mahabodhi, question: "Who was the founder of the Nanda Dynasty?", options: ["Dhana Nanda", "Mahapadma Nanda", "Shishunaga", "Chandragupta"], correctAnswer: "Mahapadma Nanda" },

  // Set 7
  { id: 61, image: sikh, question: "Takht Sri Patna Sahib was built by which Sikh ruler?", options: ["Maharaja Ranjit Singh", "Guru Gobind Singh", "Guru Har Rai", "Baba Banda Singh Bahadur"], correctAnswer: "Maharaja Ranjit Singh" },
  { id: 62, image: flower, question: "Bihar accounts for the highest production of which aquatic crop in India?", options: ["Water Chestnut", "Makhana (Fox nut)", "Lotus", "Water Lily"], correctAnswer: "Makhana (Fox nut)" },
  { id: 63, image: manjusha, question: "Which ancient kingdom was located in the present-day Bhagalpur and Munger districts?", options: ["Magadha", "Vajji", "Anga", "Malla"], correctAnswer: "Anga" },
  { id: 64, image: museum, question: "The Didarganj Yakshi, a fine example of Mauryan art, is currently housed where?", options: ["National Museum, Delhi", "Patna Museum", "Bihar Museum", "Indian Museum, Kolkata"], correctAnswer: "Bihar Museum" },
  { id: 65, image: jay, question: "Which airport in Bihar is named after Jayaprakash Narayan?", options: ["Gaya Airport", "Patna Airport", "Darbhanga Airport", "Purnea Airport"], correctAnswer: "Patna Airport" },
  { id: 66, image: chandra, question: "Under which king was the Third Buddhist Council convened at Pataliputra?", options: ["Ashoka", "Kanishka", "Ajatashatru", "Kalashoka"], correctAnswer: "Ashoka" },
  { id: 67, image: fort, question: "Which district of Bihar has the highest literacy rate as per 2011 Census?", options: ["Patna", "Rohtas", "Munger", "Aurangabad"], correctAnswer: "Rohtas" },
  { id: 68, image: golghar, question: "Which of the following is true about 'Golghar'?", options: ["It's a tomb", "It's a granary", "It's a royal palace", "It's an observatory"], correctAnswer: "It's a granary" },
  { id: 69, image: balmiki, question: "What is the primary theme of Madhubani paintings?", options: ["Nature and Hindu deities", "Modern cityscapes", "Abstract geometry", "Islamic calligraphy"], correctAnswer: "Nature and Hindu deities" },
  { id: 70, image: bhojpuri, question: "Bhikhari Thakur is famously known as the Shakespeare of which language?", options: ["Maithili", "Magahi", "Bhojpuri", "Angika"], correctAnswer: "Bhojpuri" },

  // Set 8
  { id: 71, image: barbar, question: "The Barabar Hill Caves were originally constructed for which ascetic sect?", options: ["Buddhists", "Jains", "Ajivikas", "Hindus"], correctAnswer: "Ajivikas" },
  { id: 72, image: chief, question: "Which prominent socialist leader from Bihar served multiple terms as Chief Minister and championed social justice?", options: ["Nitish Kumar", "Lalu Prasad Yadav", "Karpoori Thakur", "Sri Krishna Sinha"], correctAnswer: "Karpoori Thakur" },
  { id: 73, image: chatt, question: "Bihula-Bishari is a regional folk festival celebrated predominantly in which region?", options: ["Anga (Bhagalpur)", "Mithila (Darbhanga)", "Magadh (Patna)", "Bhojpur (Buxar)"], correctAnswer: "Anga (Bhagalpur)" },
  { id: 74, image: vikram, question: "Which medieval traveler visited Nalanda and wrote detailed accounts of its grandeur?", options: ["Ibn Battuta", "Marco Polo", "Hiuen Tsang (Xuanzang)", "Al-Biruni"], correctAnswer: "Hiuen Tsang (Xuanzang)" },
  { id: 75, image: sari, question: "What is Bawan Buti, mostly practiced in Nalanda district?", options: ["A weaving technique", "A folk dance", "A traditional dish", "An ancient martial art"], correctAnswer: "A weaving technique" },
  { id: 76, image: kosi, question: "Which major tributary joins the Ganga near Patna from the south?", options: ["Gandak", "Kosi", "Son", "Mahananda"], correctAnswer: "Son" },
  { id: 77, image: nawada, question: "Gaya is a major pilgrimage site for offering Pind Daan. On the banks of which river is it located?", options: ["Ganga", "Falgu", "Punpun", "Son"], correctAnswer: "Falgu" },
  { id: 78, image: raj, question: "Which modern infrastructure is known as Asia's longest river bridge?", options: ["Bandra-Worli Sea Link", "Mahatma Gandhi Setu", "Dhola-Sadiya Bridge", "Bogibeel Bridge"], correctAnswer: "Mahatma Gandhi Setu" },
  { id: 79, image: arya, question: "Which of these classical scholars did NOT belong to ancient Bihar?", options: ["Aryabhata", "Chanakya (Kautilya)", "Panini", "Kalidasa"], correctAnswer: "Kalidasa" },
  { id: 80, image: rice, question: "Which district in Bihar is the largest producer of jute?", options: ["Patna", "Purnia", "Bhagalpur", "Gaya"], correctAnswer: "Purnia" },

  // Set 9
  { id: 81, image: gandhi, question: "In which ashram did Mahatma Gandhi stay during the Champaran Satyagraha?", options: ["Sabarmati Ashram", "Bhitiharwa Ashram", "Sadaqat Ashram", "Sevagram Ashram"], correctAnswer: "Bhitiharwa Ashram" },
  { id: 82, image: sikh, question: "Guru Gobind Singh, the 10th Sikh Guru, was born in Patna in which year?", options: ["1666", "1699", "1708", "1650"], correctAnswer: "1666" },
  { id: 83, image: mahabodhi, question: "Which king convened the Fourth Buddhist Council (which was NOT in Bihar but relevant to Buddhism)?", options: ["Ashoka", "Kanishka", "Ajatashatru", "Pushyamitra Shunga"], correctAnswer: "Kanishka" },
  { id: 84, image: fort, question: "Who among the following was a legendary female scholar in ancient Mithila?", options: ["Gargi Vachaknavi", "Amrapali", "Sita", "Yashodhara"], correctAnswer: "Gargi Vachaknavi" },
  { id: 85, image: tomb, question: "Which dynasty ruled Bihar immediately before the Mauryas?", options: ["Shunga Dynasty", "Nanda Dynasty", "Haryanka Dynasty", "Gupta Dynasty"], correctAnswer: "Nanda Dynasty" },
  { id: 86, image: madhu, question: "Sujini embroidery is a famous traditional craft of which state?", options: ["Gujarat", "Rajasthan", "Bihar", "West Bengal"], correctAnswer: "Bihar" },
  { id: 87, image: vaishali, question: "Which is the principal headquarters of the East Central Railway zone in Bihar?", options: ["Patna", "Samastipur", "Hajipur", "Mughalsarai"], correctAnswer: "Hajipur" },
  { id: 88, image: diwas, question: "Which prominent international organization has declared the Mahabodhi Temple a World Heritage Site?", options: ["UNICEF", "UNESCO", "WHO", "UNEP"], correctAnswer: "UNESCO" },
  { id: 89, image: litchi, question: "Zardalu mango, Katarni rice, and Magahi paan from Bihar have received which special tag?", options: ["ISI Mark", "Agmark", "Geographical Indication (GI)", "Eco-mark"], correctAnswer: "Geographical Indication (GI)" },
  { id: 90, image: rajgir, question: "What was the ancient name of Patna?", options: ["Prayagraj", "Kanakpur", "Pataliputra", "Ayodhya"], correctAnswer: "Pataliputra" },

  // Set 10
  { id: 91, image: chandra, question: "Megasthenes, the Greek ambassador, visited the court of which king in Pataliputra?", options: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"], correctAnswer: "Chandragupta Maurya" },
  { id: 92, image: arya, question: "Which book was authored by the ancient scholar Kautilya (Chanakya)?", options: ["Arthashastra", "Indica", "Mudrarakshasa", "Panchatantra"], correctAnswer: "Arthashastra" },
  { id: 93, image: nawada, question: "Which famous leader started the 'Total Revolution' (Sampoorna Kranti) movement from Bihar in 1974?", options: ["Lalu Prasad Yadav", "Jayaprakash Narayan", "Nitish Kumar", "Ram Manohar Lohia"], correctAnswer: "Jayaprakash Narayan" },
  { id: 94, image: bridge, question: "Which holy place of Jains in Bihar features the Jal Mandir in the middle of a lotus pond?", options: ["Rajgir", "Pawapuri", "Kundalpur", "Kamaldah"], correctAnswer: "Pawapuri" },
  { id: 95, image: chief, question: "Dr. Sachchidananda Sinha and who else are considered the main architects of modern Bihar?", options: ["Mazharul Haque", "Dr. Rajendra Prasad", "Mahesh Narayan", "Hasan Imam"], correctAnswer: "Mahesh Narayan" },
  { id: 96, image: park, question: "Which district is bordered by Nepal to the north and West Bengal to the east?", options: ["West Champaran", "Kishanganj", "Purnia", "Araria"], correctAnswer: "Kishanganj" },
  { id: 97, image: manjusha, question: "The ancient festival of Sonepur Mela begins on which auspicious day?", options: ["Diwali", "Makar Sankranti", "Kartik Purnima", "Chhath Puja"], correctAnswer: "Kartik Purnima" },
  { id: 98, image: road, question: "Under which Mughal emperor's reign did Patna become a prominent center of international trade?", options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], correctAnswer: "Aurangzeb" },
  { id: 99, image: sikh, question: "During the Swadeshi Movement, who established the 'Bihar National College' in Patna?", options: ["Dr. Rajendra Prasad", "Sachchidananda Sinha", "Mahatma Gandhi", "Syed Hasan Imam"], correctAnswer: "Sachchidananda Sinha" },
  { id: 100, image: tree, question: "What is the name of the famous glass bridge inaugurated in Rajgir, Bihar?", options: ["Rajgir Glass Skywalk", "Nalanda Glass Bridge", "Vishwa Shanti Bridge", "Magadh Skywalk"], correctAnswer: "Rajgir Glass Skywalk" }
];

export const questionSets = [
  { id: 1, title: "LEVEL 1: THE HERITAGE TRIALS", questions: qPool.slice(0, 10) },
  { id: 2, title: "LEVEL 2: THE MAURYA MYSTERIES", questions: qPool.slice(10, 20) },
  { id: 3, title: "LEVEL 3: THE PALA PUZZLES", questions: qPool.slice(20, 30) },
  { id: 4, title: "LEVEL 4: THE SURI SECRETS", questions: qPool.slice(30, 40) },
  { id: 5, title: "LEVEL 5: THE MAGADHA MYTHS", questions: qPool.slice(40, 50) },
  { id: 6, title: "LEVEL 6: THE BODHI TRAILS", questions: qPool.slice(50, 60) },
  { id: 7, title: "LEVEL 7: THE CULTURAL ECHOES", questions: qPool.slice(60, 70) },
  { id: 8, title: "LEVEL 8: THE NALANDA CHRONICLES", questions: qPool.slice(70, 80) },
  { id: 9, title: "LEVEL 9: THE GANGES LEGACIES", questions: qPool.slice(80, 90) },
  { id: 10, title: "LEVEL 10: THE BIHAR MASTERS", questions: qPool.slice(90, 100) }
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
