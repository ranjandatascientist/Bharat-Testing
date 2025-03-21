import avatar from "../assets/avatar.png";
import bharatlogo from "../assets/testing.jpg";
import c1 from "../assets/c-1.png";
import c2 from "../assets/c-2.png";
import c3 from "../assets/c-3.png";
import c4 from "../assets/c-4.png";
import c5 from "../assets/c-5.png";
import c6 from "../assets/c-6.png";
import c7 from "../assets/c-7.png";
import c8 from "../assets/c-8.png";
import c9 from "../assets/c-9.png";
import c10 from "../assets/c-10.png";
import c11 from "../assets/c-11.png";
import c12 from "../assets/c-12.png";
import c13 from "../assets/c-13.png";
import c14 from "../assets/c-14.png";
import c15 from "../assets/c-15.png";
import c16 from "../assets/c-16.png";
import c17 from "../assets/c-17.png";
import c18 from "../assets/c-18.png";
import c19 from "../assets/c-19.png";
import c20 from "../assets/c-20.png";
import c21 from "../assets/c-21.png";

import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.jpg";
import p4 from "../assets/p-4.png";
import p5 from "../assets/p-5.png";
import p6 from "../assets/p-6.png";
import p7 from "../assets/p-7.jpg";
import p8 from "../assets/p-8.jpg";
import p9 from "../assets/p-9.jpg";
import p10 from "../assets/p-10.png";
import p11 from "../assets/p-11.jpg";
import p12 from "../assets/p-12.jpg";
import p13 from "../assets/p-13.jpg";
import p14 from "../assets/p-14.jpg";
import p15 from "../assets/p-15.jpg";
import p16 from "../assets/p-16.jpg";

// Responsive styles added via CSS variables
export const responsiveStyles = `
  :root {
    --container-padding: 15px;
  }

  @media (min-width: 768px) {
    :root {
      --container-padding: 30px;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--container-padding);
  }

  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  .testimonial-card {
    width: 100%;
    padding: 15px;
  }

  .company-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .pdf-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .responsive-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 15px;
    }
  }

  @media (max-width: 480px) {
    .responsive-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }

  /* Mobile navigation styles */
  .mobile-menu {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
    .mobile-menu-toggle {
      display: block;
      cursor: pointer;
    }
  }
`;

export const LINKS = [
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export const FEATURES = [
  "State-of-the-art laboratory equipment",
  "Certified and experienced professionals",
  "Quick turnaround time for results",
  "Affordable and transparent pricing",
  "Convenient online booking and results access",
  "Strict adherence to quality control measures",
];

export const SERVICES_ENVIRONMENTAL = [
  "Baseline Surveys for EIA Reports",
  "Environmental Testing",
  "Drug & Pharma Testing",
  "Food Testing",
  "Microbiological Testing",
  "BIS Approved Water Testing",
  "Cosmetics Testing",
  "GRFCEDX",
  "Environmental Impact Assessment",
  "Process Safety Study",
  "Ground Water Impact Assessment",
  "Mining Plan & Mines Safety Study",
  "Social Impact Assessment",
  "Ecology Biodiversity Studies",
  "Packaged Drinking Water",
  "Waste Water – Effluent and Sewage",
  "Ambient Air Quality",
  "Indoor Air Quality",
  "VOCs and Hydrocarbons",
  "Fugitive Emission",
  "Luminosity",
  "Ambient and Point Source Noise Monitoring",
  "Microbiological testing",
];

export default bharatlogo;  

export const Testimonials = [
  {
    id: 1,
    text: "He is having more than 12 years of Experience Business Developement Activities and and Tenders preparation for Environment Management Services. He is approved Functional Area Expert by QCI-NABET",
    name: "Manoj Kumar Saini",
    title: "Senior Manager - Marketing",
    image: avatar,
  },
  {
    id: 2,
    text: "Technical Manager of Gurugram Laboratory. Authorized Signatory for NABL & MoEF & CC (GOI) Reports.",
    name: "Gaurav Pratap Singh",
    title: "Lab Incharge & Technical Manager",
    image: avatar,
  },
  {
    id: 3,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image: avatar,
  },
  {
    id: 4,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image: avatar,
  },
  {
    id: 5,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image: avatar,
  },
  {
    id: 6,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image: avatar,
  },
  {
    id: 7,
    text: "Food & Agriculture Products, Environmental & Quality Control. All business processes are aligned with the requirements of the regulatory standards. Handing of Instruments LC-MSMS, ICP-MS, GC-MSMS.",
    name: "Dr. Shiv Prakash Singh",
    title: "Senior Technical Manager",
    image: avatar,
  },
];

export const CompaniesMains = [
  {
    name: "Roopika Sharma",
    designation: "CEO",
    desription:
      "Highly accomplished professional with more than ten years of experience in management. Roopika is overall in charge of Finance, Human Resources and Administration.",
    image: avatar,
  },
  {
    name: "Aman Sharma",
    designation: "Vice President",
    desription:
      "Aman has more than twelve years of experience in the field of environmental management. He's involved in EIA reports of Mining, Building Construction and Area Development projects as well as consent management, compliance reporting and business development.",
    image: avatar,
  },
  {
    name: "Anshul Yadav",
    designation: "General Manager",
    desription:
      "More than six years of experience in the field of environmental management. Anshul is organization's Management Representative, Business Development and operational head. He's an approved EIA coordinator for mining projects. He's also involved in EIAs of metallurgical industries, sugar industries and oil & gas projects..",
    image: avatar,
  },
  {
    name: "Radhika Aggarwal Yadav",
    designation: "Chief Marketing Manager",
    desription:
      "More than 4 years of experience in business development activities for Testing of environmental parameters, agriculture & food products, pharmac eutical, ayurvedic product and building materials.",
    image: avatar,
  },
];

export const CompanyImages = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,
  c11,
  c12,
  c13,
  c14,
  c15,
  c16,
  c17,
  c18,
  c19,
  c20,
  c21,
];

export const PdfImages = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
];

// Mobile menu toggle functionality
export const toggleMobileMenu = () => {
  const mobileMenu = document.querySelector('.mobile-menu');
  if (mobileMenu) {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
  }
};

// Responsive media query helper
export const isMobile = () => {
  return window.innerWidth <= 768;
};

// Add event listener for window resize
export const setupResponsive = () => {
  window.addEventListener('resize', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (window.innerWidth > 768) {
      if (mobileMenu) mobileMenu.style.display = 'none';
      if (desktopMenu) desktopMenu.style.display = 'block';
    } else {
      if (desktopMenu) desktopMenu.style.display = 'none';
    }
  });
};