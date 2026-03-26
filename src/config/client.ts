export const client = {
  // Business Details
  name: "Think Gardeners",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Epsom.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "01372 236350",
  email: "",
  website: "",

  // Location
  address: "Epsom",
  city: "Epsom",
  county: "",
  postcode: "",
  basedIn: "Epsom",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "3",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Lisa English", rating: 5, text: "Scott and his team have been maintaining our garden on a weekly basis for nearly 4 years now. We are very happy with their work. Scott is knowledgeable,  reliable and friendly.", date: "6 years ago" },
    { name: "Shelley McFarlane", rating: 5, text: "Have been using Think Gardeners for over 5 years, would highly recommend Scott and his team.", date: "6 years ago" },
    { name: "LP Marketing", rating: 5, text: "Friendly, reliable and professional gardeners.  We've used at our old home in Epsom and they did us a massive favour by coming to help with our new house in Wimbledon.  Recommended.", date: "8 years ago", badge: "Local Guide" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "Think Gardeners | Landscaper in Epsom",
    description: "Professional landscaper in Epsom. 5.0-star rated on Google. Call for a free quote.",
  },
};
