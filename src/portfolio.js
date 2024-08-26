/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hamza's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hamza Fakhir Portfolio",
    type: "website",
    
  },
}; 

//Home Page
const greeting = {
  title: "Hamza Fakhir",
  logo_name: "Hamza_Fakhir",
  nickname: "Rofix",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  portfolio_repository: "https://github.com/RofixHF",
  
};

const socialMediaLinks = [
  
  {
    name: "Github",
    link: "https://github.com/RofixHF/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/HamzaFakhir/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  
  {
    name: "Gmail",
    link: "mailto:itshamzafakhirhf@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/_hamza.hf/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Digital Marketing ",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Already helped many Startups grow using digital  Marketing channels especially Facebook/Instagram, Google Ads , Linkedin also search engines",
        "⚡ Experience in Big Budgets (market-Keywords Research / Buyer Persona- Consumer Behavior/ Marketing Mix  4Ps)",
        "⚡ Campaigns Setup And optimizing for High ROAS ",
      ],
      softwareSkills: [
        {
          skillName: "Google ads",
          fontAwesomeClassname: "logos-google",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Meta (IG/FB)",
          fontAwesomeClassname: "simple-icons:meta",
          style: {
            backgroundColor: "transaprent",
            
          },
        },
        {
          skillName: "Snapchat Ads",
          fontAwesomeClassname: "simple-icons:snapchat",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "tikotk ads",
          fontAwesomeClassname: "ion-logo-tiktok",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites and Ecommerce stores ",
        "⚡ Developing  applications using React-Redux ",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Shopify",
          fontAwesomeClassname: "simple-icons:shopify",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#1488C6",
          },
        },
        
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up hosting and DNS configuration  ",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#47A248",
          },
        },
        
      ],
    },
    
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      //siteName: "null",
      iconifyClassname: "simple-icons:k",
      style: {
       // color: "#2EC866",
      },
      
    },
  ]
};

const degrees = {
  degrees: [
    {
      title: "Kharkiv National University of Radio Electronics",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "nureua.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Digital Marketing , Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://nure.ua/",
      style: {
         backgroundcolor: "transparent",
       },
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Blockchain",
      subtitle: "- University at Buffalo",
      logo_path: "ub.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/FPBZAZPACNXL",
      color_code: "#00000",
    },
    {
      title: "Google IT Automation with Python Professional Certificate ",
      subtitle: "- Google Team",
      logo_path: "google_logo.png",
      certificate_link:
      "https://www.coursera.org/account/accomplishments/specialization/certificate/FPBZAZPACNXL",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Meta Certified Digital Marketing Associate",
      subtitle: "- Meta Team",
      logo_path: "meta2.png",
      certificate_link:
      "https://www.credly.com/badges/c7525f6f-9687-4b6f-823d-bbaefcf522b0/public_url",
      color_code: "#1F70C199",
    },
    {
      title: "Google ADS ",
      subtitle: "- Google Team",
      logo_path: "adwords1.png",
      certificate_link:
      "https://skillshop.exceedlms.com/student/award/H3YPTEDWf8oHC7iJkefktM95",
      color_code: "#00000",
    },
    {
      title: "English for Career Development",
      subtitle: "- University of Pennsylvania",
      logo_path: "penny.png",
      certificate_link:
      "https://www.coursera.org/account/accomplishments/certificate/UEK2J37UTADM ",
      color_code: "#D83B0199",
    },
    {
      title: "Front-End Web UI Frameworks and Tools",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
      "https://www.coursera.org/account/accomplishments/certificate/FCS2YFAT74BP",
      color_code: "#1F70C199",
    },
    {
      title: "Social Media Marketing",
      subtitle: "- Meta Team/Coursera",
      logo_path: "meta.png",
      certificate_link:
      "https://coursera.org/verify/professional-cert/LFZJPS5EUPTZ",
      alt_name: "meta",
      color_code: "#1F70C199",
    },
    {
      title: "Snapchat Essentials for Advertising and Marketing",
      subtitle: "- Snapchat Team",
      logo_path: "google_logo.png",
      certificate_link:
        "https://focus.snapchat.com/student/award/n168wZBa1DLRptWrsXEiJxCQ",
      alt_name: "snapchat",
      color_code: "#0C9D5899",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Freelance and Volunteership",
  description:
    "I have worked with many evolving startups as Digital Marketer  , Sales Rep and  Developer.I spend much of my time learning new technologies and skills in the field of Social media marketing , growh marketing , and Programming",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "services",
      experiences: [
        {
          title: "Digital Marketing",
          logo_path: "dm.png",
          description:
            "Starting from aligning You businees objectives with marketing strategies until getting loyal customers to your brand .",
          color: "#0879bf",
        },
        {
          title: "Website Creation ",
         
          logo_path: "wc.png",
          
          description:
            "Get A Well-Designed responsive Ecommerce store or Website  For Your Project, Company, Or Any Other Plan...!",
          color: "#9b1578",
        },
        {
          title: "Network and system Audit",
          logo_path: "sys.png",
          description:
            "managing, troubleshooting, licensing, and updating hardware and software assets.",
          color: "#fc1f20",
        },
      ],
    },
   
    {
      title: "Freelance Portfolio",
      experiences: [
        {
          title: "Website creation",
          company: "Afaq Digital LLC",
          logo_path: "fdjvn.png",
          duration: "Nov 2011",
          location: "Work From Home",
         
          color: "#4285F4",
        },
        {
       
          title: "Website creation",
          company: "reinigungsservice  Gmbh.",
          logo_path: "dfhd.png",
          duration: "Aug 2022",
          location: "Buxtehude ,Germany",
        
          color: "#D83B01",
        },
        {

          title: "Google Campaigns",
          company: "Conversion campaign in the US ",
          logo_path: "dksd.png",
          duration: "Ju  2020",
          location: "Work From Home",
          color: "#0071C5",
        },
        {

          title: "Corona Test",
          company: "Campaigns for Corona test  ",
          logo_path: "scasc.png",
          duration: "  2021",
          location: "Work From Home",
          color: "#fc1f20",
        },
        {

          title: "TikTok Marketing",
          company: "Campaigns for Ecommerce  ",
          logo_path: "tiktok.png",
          duration: "Feb  2019",
          location: "Work From Home",
          color: "#D83B01",
        },
        {

          title: "Ecommerce Store",
          company: "Landing page for an ecommerce store located in the mena  ",
          logo_path: "dsds.png",
          duration: "July  2022",
          location: "Work From Home",
          color: "#0071C5",
        },
        {

          title: "Facebook Ads",
          company: "A screenshoot from my facebook dashboard   ",
          logo_path: "scrfb.png",
          duration: "Apr  2022",
          location: "Work From Home",
          color: "#0071C5",
        },
        {

          title: "Tik padel Campaign",
          company: "Results for traffic campaign  ",
          logo_path: "sar.jpg",
          duration: "OCT  2022",
          location: "Work From Home",
          color: "#0071C5",
        },
        {

          title: "Snapchat Campaign",
          company: "Results for traffic campaign  ",
          logo_path: "snapads.jpg",
          duration: "Apr  2022",
          location: "Work From Home",
          color: "#0071C5",
        },

        {

          title: "tik padel Campaign",
          company: "Results for Conversion campaign  ",
          logo_path: "tikcnv.jpg",
          duration: "oct  2022",
          location: "Work From Home",
          color: "#0071C5",
        },
        {

          title: "tik padel Shop",
          company: "Store setup   ",
          logo_path: "tikwb.png",
          duration: "oct  2022",
          location: "Work From Home",
          color: "#0071C5",
        },
        {
        title: "Website creation",
          company: "titresservices /belguim Cleaning services",
          logo_path: "kd.png",
          duration: "Mar 2022",
          location: "Work From Home",
          color: "#D83B01",
        },
      
      
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "blogs_image.svg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, marketing and Cloud ...",
  },
  
  addressSection: {
    title: "Address",
    subtitle:
      "Stade,Lower Saxony / Germany",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/3M48fm4HENMQACy78",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+4915116537790",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  
  contactPageData,
};
