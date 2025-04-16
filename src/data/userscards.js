const colors = [
  "#FF5733", // Red
  "#33FF57", // Green
  "#3357FF", // Blue
  "#FFC300", // Yellow
  "#DAF7A6", // Light Green
  "#FF33A6", // Pink
  "#33FFF6", // Cyan
  "#A633FF", // Purple
  "#FF8C33", // Orange
];

const users = [
  {
    id: 1,
    name: "Rupesh Mahadik",
    role: "Frontend Developer",
    company: "DEPT Company",
    skills: ["React", "JS", "CSS", "HTML"],
    colors: colors.slice(0, 4),
  },
  {
    id: 2,
    name: "John Doe",
    role: "Backend Developer",
    company: "Tech Solutions",
    skills: ["NodeJS", "ExpressJS", "MongoDB"],
    colors: colors.slice(4, 7),
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Full Stack Developer",
    company: "Innovatech",
    skills: ["React", "NodeJS", "Python"],
    colors: colors.slice(7, 10),
  },
  {
    id: 4,
    name: "Alice Johnson",
    role: "UI/UX Designer",
    company: "Creative Minds",
    skills: ["Figma", "Sketch", "CSS"],
    colors: colors.slice(0, 3),
  },
  {
    id: 5,
    name: "Bob Brown",
    role: "Data Scientist",
    company: "Data Insights",
    skills: ["Python", "R", "SQL"],
    colors: colors.slice(3, 6),
  },
  {
    id: 6,
    name: "Charlie Green",
    role: "DevOps Engineer",
    company: "CloudOps",
    skills: ["AWS", "Docker", "Kubernetes"],
    colors: colors.slice(6, 9),
  },
  {
    id: 7,
    name: "Diana White",
    role: "Mobile Developer",
    company: "Appify",
    skills: ["Flutter", "Dart", "Java"],
    colors: colors.slice(0, 3),
  },
  {
    id: 8,
    name: "Ethan Black",
    role: "Game Developer",
    company: "GameWorks",
    skills: ["Unity", "C#", "Blender"],
    colors: colors.slice(3, 6),
  },
  {
    id: 9,
    name: "Fiona Blue",
    role: "AI Engineer",
    company: "AI Labs",
    skills: ["TensorFlow", "PyTorch", "Python"],
    colors: colors.slice(6, 9),
  },
  {
    id: 10,
    name: "George Red",
    role: "Cybersecurity Analyst",
    company: "SecureTech",
    skills: ["Penetration Testing", "Networking", "Python"],
    colors: colors.slice(0, 3),
  },
];

export default users;
