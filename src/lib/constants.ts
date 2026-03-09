// School information and content
export const SCHOOL = {
  name: 'Sree Vignan Public School',
  nameLocal: 'శ్రీ విజ్ఞాన్ పబ్లిక్ పాఠశాల',
  phone: '+91-9542560328', // Replace with actual
  whatsapp: '919542560328', // Without +91
  email: 'info@sreevignanschool.com',
  address: {
    street: 'Chodavaram',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '531036',
    fullAddress: 'Chodavaram, Visakhapatnam, Andhra Pradesh 531036',
  },
  maps: 'https://maps.app.goo.gl/qBpxYC4vNHvCR9426',
  hours: 'Mon-Sat: 9:00 AM - 4:00 PM, Sunday: Closed',
  foundedYear: '2010',
};

// Programs offered
export const PROGRAMS = [
  {
    id: 'primary',
    name: 'Primary Education',
    description: 'Classes 1-5: Foundation building with focus on core subjects and personality development.',
    icon: 'BookOpen',
  },
  {
    id: 'secondary',
    name: 'Secondary Education',
    description: 'Classes 6-10: Comprehensive curriculum with science, mathematics, and social studies.',
    icon: 'Lightbulb',
  },
  {
    id: 'cocurricular',
    name: 'Co-curricular Activities',
    description: 'Sports, arts, music, and cultural activities for overall development.',
    icon: 'Palette',
  },
  {
    id: 'skill',
    name: 'Skill Development',
    description: 'Computer training, spoken English, and life skills programs.',
    icon: 'Zap',
  },
];

// Facilities
export const FACILITIES = [
  {
    id: 'smart-classes',
    name: 'Smart Classrooms',
    description: 'Modern digital learning environment with interactive boards',
    icon: 'Monitor',
  },
  {
    id: 'library',
    name: 'Library',
    description: '5000+ books and digital resources for students',
    icon: 'BookMarked',
  },
  {
    id: 'playground',
    name: 'Playground',
    description: 'Well-maintained sports ground for various activities',
    icon: 'Trophy',
  },
  {
    id: 'computer-lab',
    name: 'Computer Lab',
    description: 'Modern computers with latest software and internet',
    icon: 'Cpu',
  },
  {
    id: 'safe-campus',
    name: 'Safe Campus',
    description: 'CCTV surveillance and trained security personnel',
    icon: 'Shield',
  },
  {
    id: 'cafeteria',
    name: 'Cafeteria',
    description: 'Hygienic food and nutritious meals for students',
    icon: 'Coffee',
  },
];

// Why choose us
export const WHY_CHOOSE = [
  {
    title: 'Experienced Teachers',
    description: 'Qualified faculty with years of teaching experience and passion for education',
    icon: 'Users',
  },
  {
    title: 'Holistic Development',
    description: 'Academic excellence combined with personality and character development',
    icon: 'Heart',
  },
  {
    title: 'Safe & Secure',
    description: 'Secure campus with strict discipline and student safety measures',
    icon: 'Lock',
  },
  {
    title: 'Values & Discipline',
    description: 'Focus on moral values, discipline, and social responsibility',
    icon: 'Star',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: 'Rajesh Kumar',
    relation: 'Parent',
    content: 'Sree Vignan has given my child an excellent education. The teachers are very caring and the campus is very safe. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    relation: 'Parent',
    content: 'The curriculum is comprehensive and the focus on all-around development is commendable. My child loves coming to school!',
    rating: 5,
  },
  {
    name: 'Anil Patel',
    relation: 'Parent',
    content: 'Best school in Chodavaram. The discipline, facilities, and teaching quality are top-notch.',
    rating: 5,
  },
];

// SEO Keywords
export const SEO_KEYWORDS = [
  'Best School in Chodavaram',
  'Private School in Chodavaram',
  'Top School in Chodavaram',
  'English Medium School in Chodavaram',
  'School near Visakhapatnam',
  'Quality Education',
  'CBSE School',
];

// News & Blog Posts
export const NEWS_POSTS = [
  {
    id: 1,
    title: '🏆 Sports Day 2026 - A Grand Success!',
    excerpt: 'Our annual sports day was held with great enthusiasm and participation from all students.',
    content: 'This year\'s sports day was the most successful yet with record participation. Students showcased their athletic talents in various events. The opening ceremony was a spectacular display of marching drills and PT formations.',
    date: '2026-03-01',
    category: 'Events',
    image: '/gallery/Sportsday.png',
  },
  {
    id: 2,
    title: '📚 Board Exam Toppers Announced',
    excerpt: 'Sree Vignan celebrates outstanding performance in board examinations.',
    content: 'We are proud to announce that 5 students have scored above 95% in their board exams. Their dedication and hard work have paid off remarkably. Special appreciation to all teachers who guided them.',
    date: '2026-02-28',
    category: 'Achievements',
    image: '/gallery/image5.jpg',
  },
  {
    id: 3,
    title: '🎨 Cultural Program - Celebrating Diversity',
    excerpt: 'Students showcased their talents in our inter-house cultural competition.',
    content: 'The cultural program was a beautiful celebration of Indian heritage and creativity. Students performed classical dances, folk songs, and dramatic performances.',
    date: '2026-02-20',
    category: 'Events',
    image: '/gallery/image6.jpg',
  },
  {
    id: 4,
    title: '💻 New Computer Lab Inaugurated',
    excerpt: 'State-of-the-art computer lab with latest software installed.',
    content: 'We are excited to announce the inauguration of our new computer lab with 30 high-spec computers equipped with the latest software for programming and IT courses.',
    date: '2026-02-10',
    category: 'News',
    image: '/gallery/lab.png',
  },
];

// School Events
export const EVENTS = [
  {
    id: 1,
    title: 'Final Term Exams',
    startDate: '2026-03-15',
    endDate: '2026-04-10',
    description: 'Final examination for all classes.',
    category: 'Academics',
    location: 'School Campus',
  },
  {
    id: 2,
    title: 'Summer Vacation',
    startDate: '2026-04-15',
    endDate: '2026-06-15',
    description: 'Annual summer break for students.',
    category: 'Holiday',
    location: 'Vacation',
  },
  {
    id: 3,
    title: 'Parent-Teacher Meet',
    startDate: '2026-04-20',
    endDate: '2026-04-20',
    description: 'Meet with teachers to discuss student progress.',
    category: 'Meeting',
    location: 'School Campus',
  },
  {
    id: 4,
    title: 'Annual Day Celebration',
    startDate: '2026-04-25',
    endDate: '2026-04-25',
    description: 'Grand celebration with performances and awards.',
    category: 'Events',
    location: 'School Auditorium',
  },
  {
    id: 5,
    title: 'Independence Day',
    startDate: '2026-08-15',
    endDate: '2026-08-15',
    description: 'National holiday - School Closed',
    category: 'Holiday',
    location: 'Closed',
  },
];

// Faculty & Staff
export const FACULTY = [
  {
    id: 1,
    name: 'Dr. Ramesh Kumar',
    position: 'Principal',
    subject: 'Education Administration',
    qualification: 'Ph.D in Education',
    experience: '25 years',
    photo: '/gallery/P.png',
  },
  {
    id: 2,
    name: 'Mrs. Lakshmi Sharma',
    position: 'Vice Principal',
    subject: 'English',
    qualification: 'M.A, B.Ed',
    experience: '18 years',
    photo: '/gallery/V.png',
  },
  {
    id: 3,
    name: 'Mr. Suresh Reddy',
    position: 'Senior Teacher',
    subject: 'Mathematics',
    qualification: 'M.Sc, B.Ed',
    experience: '15 years',
    photo: '/gallery/Maths.png',
  },
  {
    id: 4,
    name: 'Mrs. Anjali Patel',
    position: 'Teacher',
    subject: 'Science',
    qualification: 'B.Sc, B.Ed',
    experience: '10 years',
    photo: '/gallery/Science.png',
  },
  {
    id: 5,
    name: 'Mr. Vikram Singh',
    position: 'Sports Coordinator',
    subject: 'Physical Education',
    qualification: 'B.P.Ed, M.A',
    experience: '12 years',
    photo: '/gallery/Sports.png',
  },
  {
    id: 6,
    name: 'Mrs. Divya Gupta',
    position: 'Computer Science Teacher',
    subject: 'Information Technology',
    qualification: 'B.Tech, B.Ed',
    experience: '8 years',
    photo: '/gallery/Computer.png',
  },
];

// FAQs
export const FAQS = [
  {
    id: 1,
    question: 'What is the admission process?',
    answer: 'Students can apply online through our website or visit the school office. Written entrance test, merit evaluation, and personal interview are conducted. Admission is based on performance and available seats.',
  },
  {
    id: 2,
    question: 'What is the annual fee structure?',
    answer: 'Fees vary by class. Primary (Classes 1-5): ₹25,000-35,000 per annum. Secondary (Classes 6-10): ₹40,000-50,000 per annum. Special discounts for siblings and excellent academic performers.',
  },
  {
    id: 3,
    question: 'What is the medium of instruction?',
    answer: 'English is the primary medium of instruction. Regional languages (Telugu) are taught as subject. We follow CBSE curriculum.',
  },
  {
    id: 4,
    question: 'Does the school provide transportation?',
    answer: 'Yes, we provide transportation facility to students from various areas. Transportation charges are charged separately based on distance zones.',
  },
  {
    id: 5,
    question: 'What are the school timings?',
    answer: 'Primary Classes (1-5): 9:00 AM - 1:30 PM. Secondary Classes (6-10): 9:00 AM - 3:30 PM. Lunch break: 12:30 PM - 1:00 PM.',
  },
  {
    id: 6,
    question: 'Are there scholarships available?',
    answer: 'Yes, merit-based scholarships and need-based financial assistance are available for deserving students. Eligibility criteria can be obtained from the school office.',
  },
  {
    id: 7,
    question: 'What activities and clubs are available?',
    answer: 'We offer sports (cricket, badminton, basketball), arts clubs, cultural programs, science club, debate team, and more. Students can participate in multiple activities based on interest.',
  },
  {
    id: 8,
    question: 'How can parents stay updated about their child progress?',
    answer: 'Through our parent portal, parent-teacher meets, regular progress reports, and WhatsApp updates. Parents can also contact teachers anytime for queries.',
  },
];

// Sports & Clubs
export const CLUBS_AND_SPORTS = [
  {
    id: 1,
    name: 'Cricket Team',
    type: 'Sports',
    description: 'Professional training in cricket. Participates in inter-school tournaments.',
    coordinator: 'Mr. Vikram Singh',
    image: '/gallery/image2.jpg',
  },
  {
    id: 2,
    name: 'Badminton Club',
    type: 'Sports',
    description: 'Coaching in badminton techniques and strategy. Regular practice sessions.',
    coordinator: 'Mrs. Priya Verma',
    image: '/gallery/image3.jpg',
  },
  {
    id: 3,
    name: 'Science Club',
    type: 'Academic',
    description: 'Hands-on experiments, science fair participation, and exploration of STEM.',
    coordinator: 'Mr. Suresh Reddy',
    image: '/gallery/image4.jpg',
  },
  {
    id: 4,
    name: 'Debate Team',
    type: 'Academic',
    description: 'Public speaking, debate competitions, and communication skills development.',
    coordinator: 'Mrs. Lakshmi Sharma',
    image: '/gallery/image1.jpg',
  },
  {
    id: 5,
    name: 'Art & Music Club',
    type: 'Arts',
    description: 'Training in classical music, dance, painting, and sketching.',
    coordinator: 'Mr. Arjun Desai',
    image: '/gallery/image5.jpg',
  },
  {
    id: 6,
    name: 'Robotics Club',
    type: 'Tech',
    description: 'Building and programming robots. Participation in national competitions.',
    coordinator: 'Mrs. Divya Gupta',
    image: '/gallery/image6.jpg',
  },
];

// School Products for Store
export const SCHOOL_STORE_PRODUCTS = [
  {
    id: 1,
    name: 'School Uniform (Primary)',
    price: 1500,
    description: 'Official school uniform for Classes 1-5',
    category: 'Uniform',
  },
  {
    id: 2,
    name: 'School Uniform (Secondary)',
    price: 1800,
    description: 'Official school uniform for Classes 6-10',
    category: 'Uniform',
  },
  {
    id: 3,
    name: 'School Tie',
    price: 300,
    description: 'Official school tie with logo',
    category: 'Accessory',
  },
  {
    id: 4,
    name: 'School Bag',
    price: 1200,
    description: 'Durable school bag with school logo',
    category: 'Accessory',
  },
  {
    id: 5,
    name: 'Sports Uniform',
    price: 800,
    description: 'Official sports wear for PT classes',
    category: 'Sports',
  },
  {
    id: 6,
    name: 'Notebook Set (10 books)',
    price: 250,
    description: 'School branded notebooks',
    category: 'Stationery',
  },
  {
    id: 7,
    name: 'School Badge & Name Plate',
    price: 150,
    description: 'Name badge for school uniform',
    category: 'Accessory',
  },
];
