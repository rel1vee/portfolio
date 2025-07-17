"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LuSparkles } from "react-icons/lu";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaFigma,
  FaArrowUp,
  FaBriefcase,
  FaPython,
  FaDocker,
  FaGraduationCap,
  FaAward,
  FaInstagram,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiVercel,
  SiPostgresql,
} from "react-icons/si";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumber = "6287868685950";
    const { name, email, message } = formData;

    const whatsappMessage = `Halo Zaki, saya ${name} (${email}) ingin menghubungi Anda. ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "portfolio", "contact"];
      let currentActive = "home";
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom >= window.innerHeight * 0.4
          ) {
            currentActive = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2 } },
  };

  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9 },
    },
  };

  const textRevealVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const Sparkles = ({ children }: { children: React.ReactNode }) => (
    <div className="relative inline-block">
      {children}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-yellow-300 text-sm"
          initial={{
            opacity: 0,
            scale: 0.5,
            x: Math.random() * 40 - 20,
            y: Math.random() * 40 - 20,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            x: [
              Math.random() * 40 - 20,
              Math.random() * 60 - 30,
              Math.random() * 40 - 20,
            ],
            y: [
              Math.random() * 40 - 20,
              Math.random() * 60 - 30,
              Math.random() * 40 - 20,
            ],
          }}
          transition={{
            duration: 1 + Math.random() * 0.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{ pointerEvents: "none" }}
        >
          ✨
        </motion.span>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-x-hidden">
      {/* Navbar */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 p-4 mx-4 mt-4 md:mx-auto md:max-w-6xl bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl flex justify-between items-center`}
      >
        <div className="text-2xl font-bold text-teal-400 flex items-center">
          <LuSparkles className="mr-2 text-3xl" />
          mzes.dev
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, color: "#63B3ED" }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                  className={`relative text-lg font-medium transition-colors duration-300 ${
                    activeSection === item.toLowerCase()
                      ? "text-blue-400"
                      : "text-white hover:text-blue-200"
                  }`}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 right-0 h-[2px] bg-blue-400 bottom-[-5px]"
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-20 left-4 right-4 z-40 p-6 bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl md:hidden flex flex-col items-center space-y-6`}
        >
          {["Home", "About", "Portfolio", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
                setIsMenuOpen(false);
              }}
              className={`text-xl font-medium transition-colors duration-300 ${
                activeSection === item.toLowerCase()
                  ? "text-blue-400"
                  : "text-white hover:text-blue-200"
              }`}
              whileHover={{ scale: 1.05, color: "#63B3ED" }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex flex-col items-center justify-center text-center mt-4 px-4 overflow-hidden"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10 max-w-full px-4"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
          >
            Hi, I&apos;m{" "}
            <Sparkles>
              <span className="text-blue-400">Muh. Zaki Erbai Syas</span>
            </Sparkles>
          </motion.h1>
          <motion.h2
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            className="text-2xl md:text-4xl font-semibold mb-6 text-gray-200 italic"
          >
            {"Creative Fullstack Developer".split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-xl max-w-2xl mx-auto mb-10 text-gray-300"
          >
            Crafting captivating web experiences with innovative design and
            robust functionality. Let&apos;s bring your ideas to life!
          </motion.p>
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(96, 165, 250, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("portfolio")}
            className="px-6 py-3 md:px-8 md:py-4 cursor-pointer bg-blue-600 text-white font-bold text-base md:text-lg rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg"
          >
            View My Work
          </motion.button>
        </motion.div>
        {/* Background Animation Elements - Enhanced with More Subtle Colors */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{
            duration: 8,
            delay: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
        ></motion.div>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{
            duration: 6,
            delay: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 md:w-80 md:h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
          style={{ transform: "translate(-50%, -50%)" }}
        ></motion.div>
      </section>
      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center my-8 sm:my-16 text-blue-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInUp}
        >
          About Me
        </motion.h2>
        <motion.div
          className={`p-6 md:p-12 bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl text-base md:text-lg leading-relaxed`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
        >
          {/* Summary */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6 flex items-center">
              <FaBriefcase className="mr-3 text-xl md:text-2xl" />
              Summary
            </h3>
            <p className="text-gray-300">
              I am a{" "}
              <span className="text-blue-300 font-semibold">
                Creative Fullstack Developer
              </span>{" "}
              with 2+ years of experience building modern, responsive, and
              high-performance web applications. I am proficient in various
              frontend and backend technologies, with a focus on creating
              seamless and engaging user experiences. I am passionate about
              solving complex problems and constantly seeking ways to improve
              code quality and design.
            </p>
          </motion.div>
          {/* Keahlian & Tools */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 justify-items-center">
              {[
                { icon: <FaReact />, name: "React.js" },
                { icon: <SiNextdotjs />, name: "Next.js" },
                { icon: <SiTailwindcss />, name: "Tailwind CSS" },
                { icon: <SiTypescript />, name: "TypeScript" },
                { icon: <FaNodeJs />, name: "Node.js" },
                { icon: <SiExpress />, name: "Express.js" },
                { icon: <FaPython />, name: "Python" },
                { icon: <FaHtml5 />, name: "HTML5" },
                { icon: <FaCss3Alt />, name: "CSS3" },
                { icon: <SiMongodb />, name: "MongoDB" },
                { icon: <SiPostgresql />, name: "PostgreSQL" },
                { icon: <FaFigma />, name: "Figma" },
                { icon: <FaDocker />, name: "Docker" },
                { icon: <SiVercel />, name: "Vercel" },
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`flex flex-col items-center p-3 md:p-4 bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl text-center`}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(96, 165, 250, 0.6)",
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-4xl md:text-5xl mb-2 md:mb-3 text-blue-300">
                    {skill.icon}
                  </div>
                  <p className="text-xs md:text-sm font-medium text-gray-200">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Pengalaman */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6 flex items-center">
              <FaBriefcase className="mr-3 text-xl md:text-2xl" />
              Experience
            </h3>
            <div className="relative border-l-2 border-gray-700 pl-6">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 transform -translate-y-1/2"></div>
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-white/5 rounded-lg shadow-md border border-gray-700/30"
              >
                <h4 className="text-xl font-semibold text-blue-300">
                  Fullstack Developer
                </h4>
                <p className="text-gray-400">
                  Prodi Teknik Informatika UIN Suska Riau | Jan 2025 - Present
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 text-sm md:text-base">
                  <li>
                    Developed and maintained end-to-end web applications using
                    React.js (<i>front-end</i>) and Express.js/Hono (
                    <i>back-end</i>).
                  </li>
                  <li>
                    Designed and managed PostgreSQL and implemented RESTful
                    APIs.
                  </li>
                  <li>
                    Collaborated with design and product teams to implement new
                    features and enhance user experience.
                  </li>
                  <li>
                    Optimized application performance, security, and
                    scalability.
                  </li>
                </ul>
              </motion.div>
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-[calc(50%-8px)] transform -translate-y-1/2"></div>
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-white/5 rounded-lg shadow-md border border-gray-700/30"
              >
                <h4 className="text-xl font-semibold text-blue-300">
                  Laboratory Assistant
                </h4>
                <p className="text-gray-400">
                  Lab. Multimedia UIN Suska Riau | Feb 2024 - Feb 2025
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 text-sm md:text-base">
                  <li>
                    Assisted students and faculty with lab experiments and
                    equipment.
                  </li>
                  <li>
                    Maintained lab inventory and ensured proper functioning of
                    tools.
                  </li>
                  <li>
                    Provided technical support for various software and hardware
                    issues.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          {/* Pendidikan */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6 flex items-center">
              <FaGraduationCap className="mr-3 text-xl md:text-2xl" /> Education
            </h3>
            <div className="relative border-l-2 border-gray-700 pl-6">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 transform -translate-y-1/2"></div>
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-white/5 rounded-lg shadow-md border border-gray-700/30"
              >
                <h4 className="text-xl font-semibold text-blue-300">
                  Bachelor of Engineering (<i>Otw...</i>)
                </h4>
                <p className="text-gray-400">
                  Teknik Informatika UIN Suska Riau | 2022 - 2026
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-2 text-sm md:text-base">
                  <li>Focus: Web Development & Interaction Design.</li>
                  <li>
                    Final Project: (<i>Otw...</i>)
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          {/* Penghargaan & Sertifikasi */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-teal-400 mb-6 flex items-center">
              <FaAward className="mr-3 text-xl md:text-2xl" /> Awards &
              Certifications
            </h3>
            <div className="relative border-l-2 border-gray-700 pl-6">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 transform -translate-y-1/2"></div>
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-white/5 rounded-lg shadow-md border border-gray-700/30"
              >
                <h4 className="text-xl font-semibold text-blue-300">
                  Fullstack Web Development Certification
                </h4>
                <p className="text-gray-400">Udemy | 2024</p>
              </motion.div>
              {/* <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-[calc(50%-8px)] transform -translate-y-1/2"></div>
              <motion.div
                variants={itemVariants}
                className="mb-8 p-4 bg-white/5 rounded-lg shadow-md border border-gray-700/30"
              >
                <h4 className="text-xl font-semibold text-blue-300">
                  1st Place National Hackathon
                </h4>
                <p className="text-gray-400">InnoTech Summit | 2021</p>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center my-8 sm:my-16 text-blue-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInUp}
        >
          My Work
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            {
              name: "Dashboard TIF UIN Suska Riau",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768945/Screenshot_2025-07-17_230603_djvpjr.png",
              link: "https://dashboard.tif.uin-suska.ac.id/",
            },
            {
              name: "Dashboard Ketahanan Pangan Polda Riau",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768944/Screenshot_2025-07-17_230738_tl4bua.png",
              link: "https://dashboard-polda-riau.vercel.app/",
            },
            {
              name: "Zoro AI",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768943/Screenshot_2025-07-17_231220_ofhgwi.png",
              link: "https://zoro-ai.streamlit.app/",
            },
            {
              name: "Klasifikasi Tumor Otak",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768943/Screenshot_2025-07-17_231119_cvuszf.png",
              link: "https://brain-tumors-classification.streamlit.app/",
            },
            {
              name: "Sistem Pakar Dikotil",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768943/Screenshot_2025-07-17_231046_inkaj9.png",
              link: "https://sistem-pakar-dikotil.vercel.app/",
            },
            {
              name: "Reportify KP",
              tech: "",
              image:
                "https://res.cloudinary.com/dbsltir7r/image/upload/v1752768944/Screenshot_2025-07-17_230912_ifxeal.png",
              link: "https://reportify-kp.vercel.app/",
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl overflow-hidden group cursor-pointer`}
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-56 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = `https://placehold.co/600x400/1F2937/60A5FA?text=Image+Error`;
                }}
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-300">
                  {project.name}
                </h3>
                {/* <p className="text-sm md:text-base text-gray-400">
                  {project.tech}
                </p> */}
              </div>
              <motion.div
                variants={{
                  rest: { opacity: 0, y: 50 },
                  hover: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 rounded-2xl"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 md:px-6 md:py-3 bg-blue-600 text-white font-bold text-sm md:text-base rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  View Project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center my-8 sm:my-16 text-blue-400"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInUp}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className={`p-6 md:p-12 bg-white/5 backdrop-blur-xl border border-gray-700/30 rounded-2xl shadow-2xl`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-gray-300 text-base md:text-lg font-medium mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 bg-white/5 border border-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-base md:text-lg font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 bg-white/5 border border-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-300 text-base md:text-lg font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 bg-white/5 border border-gray-700/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-bold text-base md:text-lg rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 20px rgba(96, 165, 250, 0.6)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
          <div className="mt-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-400 mb-6">
              Find Me On
            </h3>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <motion.a
                href="https://github.com/rel1vee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub className="text-4xl md:text-5xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/muhzakierbaisyas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin className="text-4xl md:text-5xl" />
              </motion.a>
              <motion.a
                href="mailto:muhzakierbaisyas@gmail.com"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope className="text-4xl md:text-5xl" />
              </motion.a>
              <motion.a
                href="https://instagram.com/reliv.ee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram className="text-4xl md:text-5xl" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Muh. Zaki Erbai Syas. All Rights
          Reserved.
        </p>
        <motion.button
          onClick={() => scrollToSection("home")}
          className="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowUp />
        </motion.button>
      </footer>
    </div>
  );
}
