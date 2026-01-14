
import React from 'react';
import { ExperienceItem, EducationItem, SkillCategory } from './types';

export const CV_DATA = {
  name: "Joel MATHEW",
  phone: "+33 754030830",
  email: "joel.mathew@edu.em-lyon.com",
  summary: "Operations Management professional with 45 months of cross-sector experience. Managed $30M Oil & Gas turnarounds with a 2000+ workforce. Results-driven, analytical leader skilled in problem-solving and strategic optimization.",
  experiences: [
    {
      company: "Najma Al Badaa General Contracting Est",
      role: "Operations and Business Support Associate",
      period: "May 2024 – Oct 2024",
      duration: "6 months",
      location: "Riyadh, KSA",
      description: "Sustainable Civil construction Solutions provider",
      achievements: [
        "Managed efficient deployment of 200+ staff across client sites, ensuring 95% manpower availability",
        "Generated $600K+ in monthly procurement and sales across 12 hospitals, achieving 98% fulfillment",
        "Ensured 400+ staff contracts and licensing with 90%+ timely compliance to safety regulations",
        "Streamlined invoice workflows via ERP; reduced lead time by 20%",
        "Delivered 12–15% gross margins by targeted materials supply negotiations",
        "Lowered overtime costs by 10% through advanced labor forecasting"
      ]
    },
    {
      company: "AYTB",
      role: "Project Planning Engineer",
      period: "Sep 2019 – Nov 2022",
      duration: "39 months",
      location: "Jubail, KSA",
      description: "Industrial Services, Operations & Maintenance, Middle East Region",
      achievements: [
        "Spearheaded 5+ turnaround managing 2000+ workforce, ensuring on-time delivery",
        "Developed 30+ dashboards/reports using Excel, Power BI for project tracking",
        "Created Level 4 Primavera schedules across 8+ TA projects, 100% on-time execution",
        "Handled $10M+ procurement from tech-commercial review to contractor mobilization",
        "Managed $1M+ subcontractor spend aligning 200K+ deliverables to budget",
        "Trained 12+ planners in TA scheduling and Primavera execution standards",
        "Mitigated 15% delay risk by fast-tracking 1400+ ID approvals"
      ]
    }
  ] as ExperienceItem[],
  education: [
    {
      school: "EMLYON BUSINESS SCHOOL",
      degree: "Master in Management – 1st Year (Programme Grande Ecole)",
      period: "2025 - 2027",
      location: "France",
      specialization: "Operations Management",
      courses: ["Supply Chain Strategy", "Product Management", "Data Analytics for Business", "Performance Management & KPI’s", "Process Management"]
    },
    {
      school: "Rajiv Gandhi Institute of Technology",
      degree: "Bachelor of Engineering",
      period: "2014 - 2018",
      location: "India",
      specialization: "Mechanical Engineering",
      courses: ["Economics", "Principles of Management", "Data Analytics"]
    }
  ] as EducationItem[],
  skillCategories: [
    {
      title: "IT & Tools",
      skills: ["Microsoft Office", "Advanced Excel", "Primavera P6", "MS Projects", "MySQL", "Python", "Power BI", "Tableau", "SAP PM"]
    },
    {
      title: "Certifications",
      skills: ["Lean Six Sigma Green Belt (KPMG)", "Data Driven Decision Making (Udemy)", "Oracle Primavera P6 Professional"]
    },
    {
      title: "Soft Skills",
      skills: ["Agile Management", "Stakeholder Management", "Process Orientation", "Resilience", "Data Driven Decision Making"]
    }
  ] as SkillCategory[],
  awards: [
    "Torch Bearer award for mentoring 15 junior employees in Turnaround planning",
    "1st position in school and city for highest marks in Computer Science (12th Grade)"
  ],
  interests: [
    "Junior Member, Sportscom MDI Gurgaon",
    "Black Belt in Combat Kung Fu (8 years training)",
    "Volunteer at Lourdes Matha Cancer Care Centre"
  ]
};
