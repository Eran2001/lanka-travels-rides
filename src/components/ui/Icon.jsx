import React from "react";
import * as HeroIcons from "@heroicons/react/24/outline";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// Add more social icons if needed
const SocialIcons = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
};

const Icon = ({ icon, className = "", size = "w-6 h-6", type = "hero" }) => {
  let IconComponent;

  if (type === "social") {
    IconComponent = SocialIcons[icon.toLowerCase()] || FaTwitter;
  } else {
    IconComponent = HeroIcons[icon] || HeroIcons["QuestionMarkCircleIcon"];
  }

  return <IconComponent className={`${size} ${className}`} />;
};

export default Icon;
