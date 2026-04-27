const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const Course = require('./models/Course');

const MONGODB_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/kie_school";

const seedData = [
  // ================= MATHEMATICS (JSS) =================
  {
    title: 'Mathematics',
    description: 'Junior Secondary School Mathematics Curriculum covering foundational numerical concepts from JSS1 to JSS3.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - Basic Arithmetic and Number Bases',
        videoUrl: 'https://www.youtube.com/embed/QpZIUDBMhg8',
        duration: 1800
      },
      {
        title: 'JSS2 - Introduction to Algebra',
        videoUrl: 'https://www.youtube.com/embed/Mcjy16c0eb0',
        duration: 2100
      },
      {
        title: 'JSS3 - Geometry and Probability',
        videoUrl: 'https://www.youtube.com/embed/TiwNp_AKWEU',
        duration: 1900
      }
    ]
  },
  // ================= MATHEMATICS (SSS) =================
  {
    title: 'Mathematics',
    description: 'Senior Secondary School Mathematics Curriculum mapping directly to WAEC and JAMB outlines — SSS1 to SSS3.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Set Theory and Surds',
        videoUrl: 'https://www.youtube.com/embed/r9W5fHAM3Ik',
        duration: 2500
      },
      {
        title: 'SSS1 - Logarithms and Indices',
        videoUrl: 'https://www.youtube.com/embed/APgiILWp1M8',
        duration: 2200
      },
      {
        title: 'SSS2 - Coordinate Geometry and Calculus',
        videoUrl: 'https://www.youtube.com/embed/F8ygllhuCSU',
        duration: 3000
      },
      {
        title: 'SSS2 - Trigonometry Mastery',
        videoUrl: 'https://www.youtube.com/embed/LA-XuKbIVIs',
        duration: 2800
      },
      {
        title: 'SSS3 - Matrices and Determinants',
        videoUrl: 'https://www.youtube.com/embed/NoXtd5p4os4',
        duration: 3200
      },
      {
        title: 'SSS3 - WAEC Past Question Walkthroughs',
        videoUrl: 'https://www.youtube.com/embed/0o1gI0IwPB4',
        duration: 4000
      }
    ]
  },
  // ================= ENGLISH LANGUAGE (JSS) =================
  {
    title: 'English Language',
    description: 'Junior Secondary School English Language covering grammar, comprehension and writing from JSS1 to JSS3.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - Parts of Speech',
        videoUrl: 'https://www.youtube.com/embed/PEia6SSrdBo',
        duration: 1500
      },
      {
        title: 'JSS2 - Reading and Listening Comprehension',
        videoUrl: 'https://www.youtube.com/embed/ZI7Wksv7f3U',
        duration: 1700
      },
      {
        title: 'JSS3 - Essay Writing',
        videoUrl: 'https://www.youtube.com/embed/w6PFGA1jRyI',
        duration: 2000
      }
    ]
  },
  // ================= ENGLISH LANGUAGE (SSS) =================
  {
    title: 'English Language',
    description: 'Senior Secondary School English Language mapped to WAEC and NECO outlines — SSS1 to SSS3.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Test of Orals',
        videoUrl: 'https://www.youtube.com/embed/s6UyAss1Puo',
        duration: 2400
      },
      {
        title: 'SSS2 - Summary Writing Techniques',
        videoUrl: 'https://www.youtube.com/embed/k9dfoXNMFCg',
        duration: 2100
      },
      {
        title: 'SSS3 - Advanced Essay Writing (Formal & Informal Letter)',
        videoUrl: 'https://www.youtube.com/embed/q0pUdU8xLR4',
        duration: 3000
      }
    ]
  },
  // ================= PHYSICS (JSS) =================
  {
    title: 'Physics',
    description: 'Integrated Science Basics for Junior Secondary School — foundation for SSS Physics.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1-3 - Integrated Science Basics',
        videoUrl: 'https://www.youtube.com/embed/JpH6g_yVti0',
        duration: 1800
      }
    ]
  },
  // ================= PHYSICS (SSS) =================
  {
    title: 'Physics',
    description: 'Senior Secondary School Physics — Mechanics, Waves, and Electricity with WAEC/JAMB coverage.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Introduction to Mechanics',
        videoUrl: 'https://www.youtube.com/embed/AMjEe0BmkHk',
        duration: 2500
      },
      {
        title: 'SSS2 - Waves and Optics',
        videoUrl: 'https://www.youtube.com/embed/RtHk4NHSYRE',
        duration: 2600
      },
      {
        title: 'SSS3 - Current Electricity & Modern Physics',
        videoUrl: 'https://www.youtube.com/embed/j_2q-0eE2zo',
        duration: 2800
      }
    ]
  },
  // ================= CHEMISTRY (SSS) =================
  {
    title: 'Chemistry',
    description: 'Senior Secondary School Chemistry — Periodic Table, Organic Chemistry and Quantitative Analysis for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Periodic Table and Atoms',
        videoUrl: 'https://www.youtube.com/embed/xpLAXcqCtJ8',
        duration: 2200
      },
      {
        title: 'SSS2 - Organic Chemistry I',
        videoUrl: 'https://www.youtube.com/embed/gn3kJsMVCG8',
        duration: 2900
      },
      {
        title: 'SSS3 - Quantitative Analysis & Volumetric Chemistry',
        videoUrl: 'https://www.youtube.com/embed/-y7nVizx4RY',
        duration: 3100
      }
    ]
  },
  // ================= BIOLOGY (SSS) =================
  {
    title: 'Biology',
    description: 'Senior Secondary School Biology — Cell Biology, Ecology, Genetics and Human Physiology for WAEC/JAMB/NECO.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Cell Biology',
        videoUrl: 'https://www.youtube.com/embed/0rBD_Xy1ASY',
        duration: 2000
      },
      {
        title: 'SSS2 - Ecology and Genetics',
        videoUrl: 'https://www.youtube.com/embed/moNxXFAJ448',
        duration: 2400
      },
      {
        title: 'SSS3 - Human Physiology (Nervous System)',
        videoUrl: 'https://www.youtube.com/embed/lBmkTKlaPCk',
        duration: 2600
      }
    ]
  },
  // ================= ECONOMICS (SSS) =================
  {
    title: 'Economics',
    description: 'Senior Secondary School Economics — fundamental principles, microeconomics, and macroeconomics tailored for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Basic Concepts (Scarcity, Choice, Opportunity Cost)',
        videoUrl: 'https://www.youtube.com/embed/2dR8cxGUV4Y',
        duration: 2400
      },
      {
        title: 'SSS1 - Theory of Production',
        videoUrl: 'https://www.youtube.com/embed/Re-W3B21R8Y',
        duration: 2100
      },
      {
        title: 'SSS2 - Demand and Supply Analysis',
        videoUrl: 'https://www.youtube.com/embed/bnNcSCqGPis',
        duration: 2600
      },
      {
        title: 'SSS2 - Money, Banking and Financial Institutions',
        videoUrl: 'https://www.youtube.com/embed/iS9ci8-07J8',
        duration: 2500
      },
      {
        title: 'SSS3 - National Income Accounting',
        videoUrl: 'https://www.youtube.com/embed/RQQOj5-eqGc',
        duration: 3000
      },
      {
        title: 'SSS3 - International Trade and ECOWAS',
        videoUrl: 'https://www.youtube.com/embed/ksJaE5rHDoA',
        duration: 2800
      }
    ]
  },
  // ================= FURTHER MATHEMATICS (SSS) =================
  {
    title: 'Further Mathematics',
    description: 'Advanced numerical and logical topics for Senior Secondary students — Indices, Calculus, Vectors, and Mechanics for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Binary Operations',
        videoUrl: 'https://www.youtube.com/embed/e6mvKcU1VaE',
        duration: 2200
      },
      {
        title: 'SSS1 - Indices and Logarithms (Advanced)',
        videoUrl: 'https://www.youtube.com/embed/4PNq0wPdlOE',
        duration: 2500
      },
      {
        title: 'SSS2 - Differentiation Mastery',
        videoUrl: 'https://www.youtube.com/embed/LkcbabVODx4',
        duration: 2800
      },
      {
        title: 'SSS2 - Integration and Applications',
        videoUrl: 'https://www.youtube.com/embed/LXOEJlL4jDw',
        duration: 3000
      },
      {
        title: 'SSS3 - Vectors in 2D and 3D',
        videoUrl: 'https://www.youtube.com/embed/D9S3sagUfNg',
        duration: 3200
      },
      {
        title: 'SSS3 - Mechanics (Resolution of Forces)',
        videoUrl: 'https://www.youtube.com/embed/cpe5WO4mvuk',
        duration: 3500
      }
    ]
  },
  // ================= ICT / COMPUTER STUDIES (JSS) =================
  {
    title: 'ICT',
    description: 'Introduction to Computer Science for Junior Secondary — history of computing, basic components, and information systems.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - Introduction to Computer Science & Parts',
        videoUrl: 'https://www.youtube.com/embed/-Wf74tVgGOo',
        duration: 1800
      },
      {
        title: 'JSS1 - Historical Development of Computers',
        videoUrl: 'https://www.youtube.com/embed/6gRHeHjm_KI',
        duration: 2000
      },
      {
        title: 'JSS2 - Information Processing & Data Conversion',
        videoUrl: 'https://www.youtube.com/embed/E_qTevpOqlU',
        duration: 1900
      }
    ]
  },
  // ================= ICT / COMPUTER STUDIES (SSS) =================
  {
    title: 'ICT',
    description: 'Senior Secondary ICT & Computer Science — Networking, Logic Circuits, and WAEC/NECO Practical Exam Mastery.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Logic Circuits and Computing Ethics',
        videoUrl: 'https://www.youtube.com/embed/b-9nGVd2xjA',
        duration: 2400
      },
      {
        title: 'SSS2 - Computer Networking and the Internet',
        videoUrl: 'https://www.youtube.com/embed/tSodBEAJz9Y',
        duration: 2600
      },
      {
        title: 'SSS3 - WAEC/NECO Practical: Microsoft Word',
        videoUrl: 'https://www.youtube.com/embed/4i_14szbcWQ',
        duration: 3200
      },
      {
        title: 'SSS3 - WAEC/NECO Practical: Microsoft Excel',
        videoUrl: 'https://www.youtube.com/embed/4i_14szbcWQ',
        duration: 3000
      }
    ]
  },
  // ================= AGRICULTURAL SCIENCE (JSS) =================
  {
    title: 'Agricultural Science',
    description: 'Junior Secondary Agricultural Science — Importance of agriculture, farm tools, and basic soil science.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - Meaning and Importance of Agriculture',
        videoUrl: 'https://www.youtube.com/embed/0hbhx_Jf3mc',
        duration: 1800
      },
      {
        title: 'JSS2 - Classification of Farm Tools and Equipment',
        videoUrl: 'https://www.youtube.com/embed/J14EZuvy72E',
        duration: 2000
      },
      {
        title: 'JSS3 - Soil Texture and Structure Basics',
        videoUrl: 'https://www.youtube.com/embed/0V02HU3fJmc',
        duration: 1900
      }
    ]
  },
  // ================= AGRICULTURAL SCIENCE (SSS) =================
  {
    title: 'Agricultural Science',
    description: 'Senior Secondary Agricultural Science — Ecology, Land Tenure, Animal/Crop Production, and Farm Management Mastery.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Agricultural Ecology and Land Tenure Systems',
        videoUrl: 'https://www.youtube.com/embed/0ubiBWl5Qb8',
        duration: 2400
      },
      {
        title: 'SSS2 - Principles of Animal Nutrition and Physiology',
        videoUrl: 'https://www.youtube.com/embed/UkVKYs4emog',
        duration: 2600
      },
      {
        title: 'SSS2 - Crop Production: Cultural Practices and Weeds',
        videoUrl: 'https://www.youtube.com/embed/6wsIuOGdIRE',
        duration: 2800
      },
      {
        title: 'SSS3 - Agricultural Marketing, Records and Accounts',
        videoUrl: 'https://www.youtube.com/embed/c3DTk1cQEmg',
        duration: 3000
      }
    ]
  },
  // ================= GOVERNMENT (SSS) =================
  {
    title: 'Government',
    description: 'Senior Secondary Government — core concepts, organs of government, constitutional development, and foreign policy for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Basic Concepts (Power, Authority, Legitimacy)',
        videoUrl: 'https://www.youtube.com/embed/VD3DmxTsvTM',
        duration: 2400
      },
      {
        title: 'SSS1 - Organs of Government: Legislature, Executive, Judiciary',
        videoUrl: 'https://www.youtube.com/embed/Zit8F4ssPIQ',
        duration: 2600
      },
      {
        title: 'SSS2 - Federalism and Local Government Systems',
        videoUrl: 'https://www.youtube.com/embed/Zit8F4ssPIQ',
        duration: 2500
      },
      {
        title: 'SSS2 - Constitutional Development in Nigeria (1960-1999)',
        videoUrl: 'https://www.youtube.com/embed/kEWwYqXARgc',
        duration: 2800
      },
      {
        title: 'SSS3 - Public Administration and Civil Service',
        videoUrl: 'https://www.youtube.com/embed/PVpG6Qzsnps',
        duration: 2400
      },
      {
        title: 'SSS3 - Nigerian Foreign Policy and International Organizations',
        videoUrl: 'https://www.youtube.com/embed/-IP-gJNu8OQ',
        duration: 3000
      }
    ]
  },
  // ================= CIVIC EDUCATION (JSS) =================
  {
    title: 'Civic Education',
    description: 'Junior Secondary Civic Education — National values, symbols, and identity for Nigerian students.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - National Values and Social Justice',
        videoUrl: 'https://www.youtube.com/embed/ee6u1wTmQVI',
        duration: 1800
      },
      {
        title: 'JSS2 - National Symbols and Identity',
        videoUrl: 'https://www.youtube.com/embed/BsPzsT6Rr08',
        duration: 2000
      },
      {
        title: 'JSS3 - Rules and Laws in Society',
        videoUrl: 'https://www.youtube.com/embed/mlPn49qgq4Y',
        duration: 1900
      }
    ]
  },
  // ================= CIVIC EDUCATION (SSS) =================
  {
    title: 'Civic Education',
    description: 'Senior Secondary Civic Education — Citizenship goals, Human Rights, Democracy, and Social Issues for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Goals of Citizenship Education',
        videoUrl: 'https://www.youtube.com/embed/Q3ygRjShXwg',
        duration: 2200
      },
      {
        title: 'SSS2 - Human Rights and the Universal Declaration (UDHR)',
        videoUrl: 'https://www.youtube.com/embed/nh2BXpAq11s',
        duration: 2500
      },
      {
        title: 'SSS2 - Democracy and Popular Participation',
        videoUrl: 'https://www.youtube.com/embed/aNyVSxoTofI',
        duration: 2600
      },
      {
        title: 'SSS3 - Cultism and Other Emerging Social Issues',
        videoUrl: 'https://www.youtube.com/embed/7zmFKbM5lik',
        duration: 2400
      }
    ]
  },
  // ================= GEOGRAPHY (SSS) =================
  {
    title: 'Geography',
    description: 'Senior Secondary Geography — Physical geography, Map reading, and the regional geography of Nigeria for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Meaning and Scope of Geography',
        videoUrl: 'https://www.youtube.com/embed/07inW2Cp0ug',
        duration: 1800
      },
      {
        title: 'SSS1 - The Solar System and Movement of the Earth',
        videoUrl: 'https://www.youtube.com/embed/ZDElhkhzhPM',
        duration: 2100
      },
      {
        title: 'SSS2 - Environmental Resources: Water and Rocks',
        videoUrl: 'https://www.youtube.com/embed/_0hxl03JoA0',
        duration: 2500
      },
      {
        title: 'SSS2 - Practical Geography: Map Scale and Measurement',
        videoUrl: 'https://www.youtube.com/embed/ToTwc-6MFBs',
        duration: 2800
      },
      {
        title: 'SSS3 - Regional Geography of Nigeria: Physical Settings',
        videoUrl: 'https://www.youtube.com/embed/THi3aHpH4gI',
        duration: 3000
      },
      {
        title: 'SSS3 - Regional Geography of Nigeria: People and Resources',
        videoUrl: 'https://www.youtube.com/embed/07inW2Cp0ug',
        duration: 3200
      }
    ]
  },
  // ================= LITERATURE IN ENGLISH (SSS) =================
  {
    title: 'Literature in English',
    description: 'Senior Secondary Literature — Genres, Literary devices, and deep analysis of African and Non-African drama, prose, and poetry.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Introduction to Genres of Literature',
        videoUrl: 'https://www.youtube.com/embed/YRpT66U4ox0',
        duration: 1800
      },
      {
        title: 'SSS1 - Figures of Speech and Literary Devices',
        videoUrl: 'https://www.youtube.com/embed/vMCf7qTgvLs',
        duration: 2100
      },
      {
        title: 'SSS2 - Analysis of "The Lion and the Jewel" (Wole Soyinka)',
        videoUrl: 'https://www.youtube.com/embed/O_d5JLPO4bc',
        duration: 2800
      },
      {
        title: 'SSS2 - Appreciation of African Poetry',
        videoUrl: 'https://www.youtube.com/embed/YRpT66U4ox0',
        duration: 2400
      },
      {
        title: 'SSS3 - Analysis of "Fences" (August Wilson)',
        videoUrl: 'https://www.youtube.com/embed/zsmNsUOjlz0',
        duration: 3000
      },
      {
        title: 'SSS3 - Non-African Poetry Analysis',
        videoUrl: 'https://www.youtube.com/embed/JmSjDJW0iCk',
        duration: 2600
      }
    ]
  },
  // ================= SOCIAL STUDIES (JSS) =================
  {
    title: 'Social Studies',
    description: 'Junior Secondary Social Studies — Family, socialization, culture, and environmental awareness for Nigerian students.',
    examType: 'JSS',
    lessons: [
      {
        title: 'JSS1 - Meaning and Scope of Social Studies',
        videoUrl: 'https://www.youtube.com/embed/OHtE_qN-2cs',
        duration: 1800
      },
      {
        title: 'JSS1 - The Family and Socialization Process',
        videoUrl: 'https://www.youtube.com/embed/hsd4KkwM98E',
        duration: 2200
      },
      {
        title: 'JSS2 - Social Issues: Drug Abuse and Proper Behavior',
        videoUrl: 'https://www.youtube.com/embed/Apq9kBgRXg4',
        duration: 2000
      },
      {
        title: 'JSS2 - Marriage and Family Values in Nigeria',
        videoUrl: 'https://www.youtube.com/embed/jZsJ_zq2Qhw',
        duration: 2100
      },
      {
        title: 'JSS3 - Conflict and Peace Education',
        videoUrl: 'https://www.youtube.com/embed/DUbQdEkqCEg',
        duration: 2400
      },
      {
        title: 'JSS3 - Science, Technology and Society',
        videoUrl: 'https://www.youtube.com/embed/3dhiuK9w52E',
        duration: 2300
      }
    ]
  },
  // ================= COMMERCE (SSS) =================
  {
    title: 'Commerce',
    description: 'Senior Secondary Commerce — Occupations, Trade logistics, Insurance, Banking, and Capital Markets for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Introduction to Commerce and Scope',
        videoUrl: 'https://www.youtube.com/embed/aW1RRFWCPSY',
        duration: 2000
      },
      {
        title: 'SSS1 - Occupation and Production Process',
        videoUrl: 'https://www.youtube.com/embed/Re-W3B21R8Y',
        duration: 2200
      },
      {
        title: 'SSS2 - Home Trade and Foreign Trade Logistics',
        videoUrl: 'https://www.youtube.com/embed/hje5mlaHik0',
        duration: 2500
      },
      {
        title: 'SSS2 - Insurance and Banking as Aids to Trade',
        videoUrl: 'https://www.youtube.com/embed/3MakDmb_Stg',
        duration: 2600
      },
      {
        title: 'SSS3 - The Stock Exchange and Capital Market',
        videoUrl: 'https://www.youtube.com/embed/YQl9IRtfas0',
        duration: 2800
      },
      {
        title: 'SSS3 - Law of Contract and Consumer Rights',
        videoUrl: 'https://www.youtube.com/embed/ZeBAWyp5lNs',
        duration: 3000
      }
    ]
  },
  // ================= FINANCIAL ACCOUNTING (SSS) =================
  {
    title: 'Financial Accounting',
    description: 'Senior Secondary Financial Accounting — Book-keeping, Final Accounts, Depreciation, Partnership and Company accounts for WAEC/JAMB.',
    examType: 'SSS',
    lessons: [
      {
        title: 'SSS1 - Introduction to Book-keeping and Accounting',
        videoUrl: 'https://www.youtube.com/embed/2ViC4m2qtaM',
        duration: 2000
      },
      {
        title: 'SSS1 - The Double Entry System and Journals',
        videoUrl: 'https://www.youtube.com/embed/nELHN1QFgUg',
        duration: 2200
      },
      {
        title: 'SSS2 - Preparation of Final Accounts (Trading/P&L)',
        videoUrl: 'https://www.youtube.com/embed/7BqBsjJf0Mk',
        duration: 2500
      },
      {
        title: 'SSS2 - Depreciation and Provision for Bad Debts',
        videoUrl: 'https://www.youtube.com/embed/R81wSTcnhmU',
        duration: 2400
      },
      {
        title: 'SSS3 - Company Accounts and Partnerships',
        videoUrl: 'https://www.youtube.com/embed/-FGz1MUMMy8',
        duration: 2800
      },
      {
        title: 'SSS3 - Incomplete Records and Accounting for Clubs',
        videoUrl: 'https://www.youtube.com/embed/rIWeycaj7oQ',
        duration: 3000
      }
    ]
  }
];

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('✅ MongoDB connected. Purging old courses...');
    await Course.deleteMany({});
    
    console.log('🌱 Seeding fresh curriculum with real YouTube videos...');
    await Course.insertMany(seedData);
    
    console.log('🎉 Curriculum seeded successfully with real educational videos!');
    process.exit(0);
  })
  .catch(err => {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  });
