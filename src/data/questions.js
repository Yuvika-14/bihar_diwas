import nalanda from '../assets/images/nalanda_university.png';
import rajgir from '../assets/images/rajgir_stupa.png';
import mahabodhi from '../assets/images/mahabodhi_temple.png';
import golghar from '../assets/images/golghar.png';
import museum from '../assets/images/museum.png';
import chief from '../assets/images/chief.png';
import madhu from '../assets/images/madhu.png';
// Placeholders for remaining images
import mithun from '../assets/images/mithun.png';
import park from '../assets/images/park.png';
import chandra from '../assets/images/chandra.png';
import chatt from '../assets/images/chatt.png';
import arya from '../assets/images/arya.png';
import kosi from '../assets/images/kosi.png';
import barbar from '../assets/images/barbar.png';
import tomb from '../assets/images/tomb.png';
import img1 from '../assets/images/bihar_heritage_1_1773389967069.png';
import img2 from '../assets/images/bihar_heritage_2_1773389982812.png';
import img3 from '../assets/images/bihar_heritage_3_1773390021723.png';
import img4 from '../assets/images/bihar_heritage_4_1773390060942.png';
import img5 from '../assets/images/bihar_heritage_5_1773390077247.png';

const placeholder = img1;
const placeholder2 = img2;
const placeholder3 = img3;
const placeholder4 = img4;
const placeholder5 = img5;
const placeholder6 = img2; // Reused one since we only made 5


const qPool = [
  // Set 1
  { id: 1, image: nalanda, question: "Identify this ancient center of learning, considered one of the earliest universities in the world.", options: ["Vikramshila", "Nalanda University", "Taxila", "Odantapuri"], correctAnswer: "Nalanda University" },
  { id: 2, image: rajgir, question: "This pure white marble pagoda with golden statues is located on top of Ratnagiri Hill. What is it called?", options: ["Sanchi Stupa", "Dhamek Stupa", "Vishwa Shanti Stupa", "Bawali Stupa"], correctAnswer: "Vishwa Shanti Stupa" },
  { id: 3, image: mahabodhi, question: "This UNESCO World Heritage site marks the location where the Buddha is said to have attained enlightenment.", options: ["Mahabodhi Temple", "Kashi Vishwanath", "Konark Sun Temple", "Meenakshi Temple"], correctAnswer: "Mahabodhi Temple" },
  { id: 4, image: golghar, question: "Built in 1786 by Captain John Garstin to store grain after a devastating famine, what is this massive dome called?", options: ["Patna Museum", "Sher Shah Tomb", "Golghar", "Khuda Bakhsh Library"], correctAnswer: "Golghar" },
  { id: 5, image: museum, question: "Known for its modern, rust-colored Corten steel architecture, which museum is this?", options: ["National Museum", "Bihar Museum", "Jalan Museum", "Gandhi Sangrahalaya"], correctAnswer: "Bihar Museum" },
  { id: 6, image: placeholder2, question: "This polished sandstone pillar, topped with a single lion, was erected by Emperor Ashoka. Where is it located?", options: ["Sarnath", "Lumbini", "Vaishali", "Lauriya Nandangarh"], correctAnswer: "Vaishali" },
  { id: 7, image: placeholder3, question: "Along with Nalanda, this was one of the two most important centers of learning in India during the Pala Empire.", options: ["Vikramshila", "Somapura", "Jagaddala", "Odantapuri"], correctAnswer: "Vikramshila" },
  { id: 8, image: placeholder4, question: "This ancient hill fort is considered one of the largest and strongest forts in India, captured by Sher Shah Suri.", options: ["Munger Fort", "Rohtasgarh Fort", "Jalargarh Fort", "Chunar Fort"], correctAnswer: "Rohtasgarh Fort" },
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
  { id: 21, image: placeholder5, question: "Which famous Indian leader successfully led the Champaran Satyagraha in Bihar?", options: ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose", "Mahatma Gandhi"], correctAnswer: "Mahatma Gandhi" },
  { id: 22, image: placeholder6, question: "The Bodhi Tree, under which Gautama Buddha attained enlightenment, is in which city?", options: ["Patna", "Rajgir", "Bodh Gaya", "Vaishali"], correctAnswer: "Bodh Gaya" },
  { id: 23, image: placeholder, question: "Which medieval ruler built the Grand Trunk Road?", options: ["Akbar", "Aurangzeb", "Sher Shah Suri", "Babur"], correctAnswer: "Sher Shah Suri" },
  { id: 24, image: placeholder2, question: "Which state is situated to the East of Bihar?", options: ["Uttar Pradesh", "West Bengal", "Jharkhand", "Nepal"], correctAnswer: "West Bengal" },
  { id: 25, image: placeholder3, question: "What is the traditional attire of women in Bihar?", options: ["Lehenga", "Salwar Kameez", "Sari", "Mekhela Chador"], correctAnswer: "Sari" },
  { id: 26, image: placeholder4, question: "Which ancient texts were composed by sage Valmiki?", options: ["Mahabharata", "Ramayana", "Vedas", "Upanishads"], correctAnswer: "Ramayana" },
  { id: 27, image: placeholder5, question: "The ruins of Vaishali are famous for the site of the second Buddhist council. Who convened it?", options: ["Ajatashatru", "Kalashoka", "Ashoka", "Kanishka"], correctAnswer: "Kalashoka" },
  { id: 28, image: placeholder6, question: "Which of the following describes the Manjusha Art form of Bihar?", options: ["Scroll painting", "Mural painting", "Snake motif painting", "Sand art"], correctAnswer: "Snake motif painting" },
  { id: 29, image: placeholder, question: "Bhojpuri, Maithili, and Magahi are primarily what?", options: ["Dance forms", "Musical instruments", "Languages/Dialects", "Festivals"], correctAnswer: "Languages/Dialects" },
  { id: 30, image: placeholder2, question: "Which famous bird sanctuary is located in Begusarai district?", options: ["Sultanpur", "Kanwar Lake", "Bharatpur", "Nal Sarovar"], correctAnswer: "Kanwar Lake" },

  // Set 4
  { id: 31, image: placeholder3, question: "Who was the 'Loknayak' of Bihar?", options: ["Jayaprakash Narayan", "Rajendra Prasad", "Bindeshwari Dubey", "Jagannath Mishra"], correctAnswer: "Jayaprakash Narayan" },
  { id: 32, image: placeholder4, question: "The famous Sonepur Cattle Fair is held on the confluence of which rivers?", options: ["Ganga and Yamuna", "Ganga and Gandak", "Kosi and Bagmati", "Son and Punpun"], correctAnswer: "Ganga and Gandak" },
  { id: 33, image: placeholder5, question: "Which district of Bihar is known for its Litchi production?", options: ["Muzaffarpur", "Darbhanga", "Saharsa", "Purnea"], correctAnswer: "Muzaffarpur" },
  { id: 34, image: placeholder6, question: "What is the state flower of Bihar?", options: ["Lotus", "Kachnar (Orchid Tree)", "Marigold", "Rose"], correctAnswer: "Kachnar (Orchid Tree)" },
  { id: 35, image: placeholder, question: "Which Sikh Guru was born in Patna?", options: ["Guru Nanak", "Guru Gobind Singh", "Guru Arjan", "Guru Tegh Bahadur"], correctAnswer: "Guru Gobind Singh" },
  { id: 36, image: placeholder2, question: "When is Bihar Diwas celebrated?", options: ["1st April", "22nd March", "15th August", "26th January"], correctAnswer: "22nd March" },
  { id: 37, image: placeholder3, question: "Which notable freedom fighter from Bihar served as the first President of independent India?", options: ["Dr. Rajendra Prasad", "Maulana Abul Kalam Azad", "Dr. Zakir Husain", "V.V. Giri"], correctAnswer: "Dr. Rajendra Prasad" },
  { id: 38, image: placeholder4, question: "Which ancient republic, considered one of the earliest, had its capital at Vaishali?", options: ["Vajjis", "Mallas", "Kuru", "Panchala"], correctAnswer: "Vajjis" },
  { id: 39, image: placeholder5, question: "What is the primary crop grown in Bihar?", options: ["Wheat", "Sugarcane", "Rice", "Maize"], correctAnswer: "Rice" },
  { id: 40, image: placeholder6, question: "The Kakolat Waterfall is situated in which district?", options: ["Gaya", "Nawada", "Rohtas", "Kaimur"], correctAnswer: "Nawada" }
];

export const questionSets = [
  { id: 1, title: "LEVEL 1: THE HERITAGE TRIALS", questions: qPool.slice(0, 10) },
  { id: 2, title: "LEVEL 2: THE MAURYA MYSTERIES", questions: qPool.slice(10, 20) },
  { id: 3, title: "LEVEL 3: THE PALA PUZZLES", questions: qPool.slice(20, 30) },
  { id: 4, title: "LEVEL 4: THE SURI SECRETS", questions: qPool.slice(30, 40) }
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
