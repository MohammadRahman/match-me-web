const profileData= {
    creativeHobbies:[
        {
            id: 1,
            name: "Photography",
            description: "Capturing moments through the lens.",
            icon: "camera",
        },{
            id: 2,
            name: "Painting",
            description: "Expressing creativity with colors.",
            icon: "palette",
        },{
            id: 3,
            name: "Writing",
            description: "Crafting stories and ideas with words.",
            icon: "pen",
        },{
            id: 4,
            name: "Music Composition",
            description: "Creating melodies and harmonies.",
            icon: "music-note",
        },{
            id: 5,
            name: "Sculpting",
            description: "Shaping materials into art.",
            icon: "sculpture",
        }
    ],
    PhysicalActivities:[
        {
            id: 1,
            name: "Yoga",
            description: "A practice for mind and body wellness.",
            icon: "yoga",
        },{
            id: 2,
            name: "Running",
            description: "A cardiovascular exercise for fitness.",
            icon: "running",
        },{
            id: 3,
            name: "Cycling",
            description: "Riding a bicycle for leisure or sport.",
            icon: "bicycle",
        },{
            id: 4,
            name: "Swimming",
            description: "An aquatic activity for health and fun.",
            icon: "swimmer",
        },{
            id: 5,
            name: "Rock Climbing",
            description: "An adventurous sport of climbing rocks.",
            icon: "mountain-climbing",
        }
    ],
    entertainmentPreference:[
        {
            id: 1,
            name: "Movies",
            description: "Enjoying films from various genres.",
            icon: "film",
        },{
            id: 2,
            name: "Music",
            description: "Listening to and appreciating different music styles.",
            icon: "music",
        },{
            id: 3,
            name: "Books",
            description: "Reading literature across various genres.",
            icon: "book",
        },{
            id: 4,
            name: "Video Games",
            description: "Playing interactive games for entertainment.",
            icon: "gamepad",
        },{
            id: 5,
            name: "Theater",
            description: "Experiencing live performances and plays.",
            icon: "theater-masks",
        }
    ],
    foodPreferences:[
        {
            id: 1,
            name: "Vegetarian",
            description: "A diet excluding meat and fish.",
            icon: "leaf",
        },{
            id: 2,
            name: "Vegan",
            description: "A plant-based diet excluding all animal products.",
            icon: "carrot",
        },{
            id: 3,
            name: "Gluten-Free",
            description: "A diet avoiding gluten-containing foods.",
            icon: "bread-slice",
        },{
            id: 4,
            name: "Paleo",
            description: "A diet based on foods presumed to be available to Paleolithic humans.",
            icon: "bone",
        },{
            id: 5,
            name: "Keto",
            description: "A low-carb, high-fat diet for weight loss.",
            icon: "cheese",
        }
    ],
    musicTaste: [
        {
            id: 1,
            name: "Rock",
            description: "A genre characterized by a strong beat and often revolves around the electric guitar.",
            icon: "guitar",
        },{
            id: 2,
            name: "Pop",
            description: "Popular music that is catchy and appeals to a wide audience.",
            icon: "microphone",
        },{
            id: 3,
            name: "Jazz",
            description: "A genre known for its improvisation and complex rhythms.",
            icon: "saxophone",
        },{
            id: 4,
            name: "Classical",
            description: "A genre rooted in Western art music, known for its complexity and formality.",
            icon: "violin",
        },{
            id: 5,
            name: "Hip-Hop",
            description: "A genre characterized by rhythmic vocal style and DJing.",
            icon: "turntable",
        }
    ],
    lifeStyleAndUniquePreferences: [
        {
            id: 1,
            name: "Minimalist",
            description: "A lifestyle focused on simplicity and minimal possessions.",
            icon: "home",
        },{
            id: 2,
            name: "Adventurous",
            description: "A preference for exploration and new experiences.",
            icon: "compass",
        },{
            id: 3,
            name: "Tech Enthusiast",
            description: "An interest in the latest technology and gadgets.",
            icon: "laptop",
        },{
            id: 4,
            name: "Eco-Conscious",
            description: "A lifestyle that prioritizes environmental sustainability.",
            icon: "leaf-heart",
        },{
            id: 5,
            name: "Culinary Explorer",
            description: "A passion for trying new cuisines and cooking styles.",
            icon: "utensils",
        }
    ]
};

const recommendations: AppTypes.Profile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    profilePicture: 'https://randomuser.me/api/portraits/men/32.jpg',
    phone: '+1 (555) 123-4567',
    bio: 'Photography enthusiast and travel lover',
    interests: ['Photography', 'Hiking', 'Cooking'],
  },
  {
    id: '2',
    name: 'Maria Garcia',
    profilePicture: 'https://randomuser.me/api/portraits/women/44.jpg',
    phone: '+1 (555) 987-6543',
    bio: 'Professional chef and food blogger',
    interests: ['Cooking', 'Wine Tasting', 'Travel'],
  },
];
export const mockData = {
    profileData,
    recommendations
};