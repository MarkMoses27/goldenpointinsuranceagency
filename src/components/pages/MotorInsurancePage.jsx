import React, { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "benefits", label: "Benefits" },
  { id: "how", label: "How Do I Start" }
];

const coverOptions = [
  {
    title: "Comprehensive Insurance Cover",
    description: "This cover takes care of a wide range of risks that a motorist may suffer in the process of using their vehicle. The main cover features are as follows:",
    features: [
      "Accidental impact damage including overturning and collision.",
      "Accidental fire damage.",
      "Theft/partial theft cover.",
      "Third-party liability cover for bodily injury & property damage.",
      "Windscreen cover.",
      "Entertainment system cover.",
      "Emergency medical expense cover.",
      "Courtesy car / loss of use cover.",
      "Excess protector.",
      "Political violence & terrorism cover."
    ]
  },
  {
    title: "Third-Party, Fire and Theft",
    description: "This policy covers the insured against three main risks:",
    features: [
      "Third-party liability covers bodily injury or property damage as a result of your vehicle being involved in an accident.",
      "Accidental fire damage in the event your vehicle catches fire and is destroyed.",
      "Theft cover as a result of your vehicle being stolen."
    ]
  },
  {
    title: "Third-Party Insurance Cover",
    description: "It is the minimum legally required cover that every car owner must have to be on the road. The cover protects a vehicle owner from liabilities that may arise from third parties in the event of an accident. Third-party liability relates to:",
    features: [
      "Bodily injury.",
      "Property damage."
    ],
    note: "This cover does not protect the car owner from personal liabilities – any repair costs are met by the insured himself."
  }
];

const mainProducts = [
  "COMPREHENSIVE",
  "3RD PARTY ONLY",
  "3RD PARTY & THEFT",
  "NAMED DRIVER",
  "BIMA BAMBA"
];

const allBenefits = [
  "Accidental impact damage including overturning and collision.",
  "Accidental fire damage.",
  "Theft/partial theft cover.",
  "Third-party liability cover for bodily injury & property damage.",
  "Windscreen cover.",
  "Entertainment system cover.",
  "Emergency medical expense cover.",
  "Courtesy car/ loss of use cover.",
  "Excess protector.",
  "Political violence & terrorism cover.",
  "Third-party liability cover for bodily injury or property damage as a result of your vehicle being involved in an accident.",
  "Accidental fire damage in the event your vehicle catches fire and is destroyed.",
  "Theft cover as a result of your vehicle being stolen.",
  "Bodily injury.",
  "Property damage."
];

const whyChooseUs = [
  "Expert Insurance Guidance",
  "Personalized Customer Service",
  "Swift Claim Process",
  "Prompt Response",
  "24/7 Availability",
  "Convenient Premium Payment Plan",
  "Strong, Trusted Insurer Partnerships"
];

const MotorPrivateCoverPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 w-full">
      <style jsx>{`
        /* Mobile First - Base styles for 320px+ */
        .hero-container {
          padding: 2rem 1rem;
        }
        
        .hero-title {
          font-size: 1.5rem;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }
        
        .hero-subtitle {
          font-size: 0.875rem;
          line-height: 1.4;
          margin-bottom: 1rem;
        }
        
        .tab-container {
          margin-top: -1.5rem;
          margin-bottom: 1rem;
          padding: 0 0.5rem;
        }
        
        .tab-button {
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
          min-width: 80px;
        }
        
        .main-content {
          padding: 1rem;
          margin-bottom: 2rem;
        }
        
        .content-title {
          font-size: 1.125rem;
          margin-bottom: 0.75rem;
        }
        
        .content-text {
          font-size: 0.875rem;
          line-height: 1.5;
        }
        
        .cover-option {
          padding: 1rem;
          margin-bottom: 1.5rem;
        }
        
        .cover-title {
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .cover-list {
          font-size: 0.75rem;
          line-height: 1.4;
        }
        
        .product-badge {
          padding: 0.375rem 0.75rem;
          font-size: 0.625rem;
          margin: 0.25rem;
        }
        
        .benefit-item {
          padding: 0.75rem;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }
        
        .cta-section {
          padding: 1rem;
          margin-bottom: 2rem;
        }
        
        .cta-title {
          font-size: 1.125rem;
          margin-bottom: 0.5rem;
        }
        
        .cta-text {
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }
        
        .cta-button {
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
          margin: 0.25rem;
          display: block;
          text-align: center;
          width: 100%;
        }
        
        .bg-shapes {
          display: none;
        }

        /* Small Mobile - 375px+ */
        @media (min-width: 375px) {
          .hero-title {
            font-size: 1.75rem;
          }
          
          .hero-subtitle {
            font-size: 1rem;
          }
          
          .tab-button {
            padding: 0.625rem 1rem;
            font-size: 0.875rem;
            min-width: 90px;
          }
          
          .content-title {
            font-size: 1.25rem;
          }
          
          .cover-title {
            font-size: 1rem;
          }
          
          .cover-list {
            font-size: 0.875rem;
          }
          
          .product-badge {
            font-size: 0.75rem;
          }
          
          .benefit-item {
            font-size: 0.875rem;
          }
          
          .bg-shapes {
            display: block;
          }
        }

        /* Large Mobile - 425px+ */
        @media (min-width: 425px) {
          .hero-container {
            padding: 2.5rem 1.5rem;
          }
          
          .hero-title {
            font-size: 2rem;
            margin-bottom: 1rem;
          }
          
          .hero-subtitle {
            font-size: 1.125rem;
            margin-bottom: 1.25rem;
          }
          
          .tab-container {
            margin-top: -2rem;
            margin-bottom: 1.5rem;
            padding: 0 1rem;
          }
          
          .tab-button {
            padding: 0.75rem 1.25rem;
            font-size: 0.875rem;
            min-width: 100px;
          }
          
          .main-content {
            padding: 1.5rem;
          }
          
          .content-title {
            font-size: 1.375rem;
          }
          
          .content-text {
            font-size: 1rem;
          }
          
          .cover-option {
            padding: 1.25rem;
          }
          
          .cover-title {
            font-size: 1.125rem;
          }
          
          .product-badge {
            padding: 0.5rem 1rem;
            font-size: 0.875rem;
          }
          
          .benefit-item {
            padding: 1rem;
            font-size: 0.875rem;
          }
          
          .cta-section {
            padding: 1.5rem;
          }
          
          .cta-title {
            font-size: 1.25rem;
          }
          
          .cta-text {
            font-size: 0.875rem;
          }
          
          .cta-button {
            padding: 0.875rem 1.25rem;
            font-size: 0.875rem;
            width: auto;
            display: inline-block;
          }
        }

        /* Tablet - 768px+ */
        @media (min-width: 768px) {
          .hero-container {
            padding: 3rem 2rem;
          }
          
          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 1.25rem;
          }
          
          .hero-subtitle {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }
          
          .tab-container {
            margin-top: -2.5rem;
            margin-bottom: 2rem;
            padding: 0 2rem;
          }
          
          .tab-button {
            padding: 0.875rem 1.5rem;
            font-size: 1rem;
            min-width: 120px;
          }
          
          .main-content {
            padding: 2rem 2.5rem;
          }
          
          .content-title {
            font-size: 1.5rem;
            margin-bottom: 1rem;
          }
          
          .content-text {
            font-size: 1rem;
          }
          
          .cover-option {
            padding: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .cover-title {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
          }
          
          .cover-list {
            font-size: 1rem;
          }
          
          .product-badge {
            padding: 0.625rem 1.25rem;
            font-size: 0.875rem;
            margin: 0.375rem;
          }
          
          .benefit-item {
            padding: 1.25rem;
            font-size: 1rem;
          }
          
          .benefit-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
          
          .benefits-list {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem 2rem;
          }
          
          .cta-section {
            padding: 2rem;
          }
          
          .cta-title {
            font-size: 1.5rem;
            margin-bottom: 0.75rem;
          }
          
          .cta-text {
            font-size: 1rem;
            margin-bottom: 1.5rem;
          }
          
          .cta-button {
            padding: 1rem 2rem;
            font-size: 1rem;
            margin: 0 0.5rem;
          }
          
          .cta-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
          
          .how-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
          }
        }

        /* Large Tablet - 1024px+ */
        @media (min-width: 1024px) {
          .hero-container {
            padding: 4rem 2rem;
          }
          
          .hero-title {
            font-size: 3rem;
            margin-bottom: 1.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.375rem;
            margin-bottom: 2rem;
          }
          
          .tab-container {
            margin-top: -3rem;
            margin-bottom: 2.5rem;
          }
          
          .tab-button {
            padding: 1rem 2rem;
            font-size: 1.125rem;
            min-width: 140px;
          }
          
          .main-content {
            padding: 3rem 4rem;
          }
          
          .content-title {
            font-size: 1.75rem;
            margin-bottom: 1.25rem;
          }