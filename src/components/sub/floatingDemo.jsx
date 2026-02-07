import React from "react";
import { FloatingDock } from "./floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,

  IconUser,
  IconNotebook
} from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react/dist/esm/tabler-icons-react";
import { FaProjectDiagram } from "react-icons/fa";
import observerAPI from "../../api/observer.api.js";
// import Image from "next/image";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "Projects",
      icon: (
        <FaProjectDiagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Blogs",
      icon: (
        <IconNotebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/blogs",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />

      ),
      href: "https://www.linkedin.com/in/tamil0714/",
      onClick: () => observerAPI.create("https://www.linkedin.com/in/tamil0714/"),
    },


    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "http://www.github.com/tamil-0714",
      onClick: () => observerAPI.create("http://www.github.com/tamil-0714"),
    },
  ];
  return (
    (<div className="flex items-center justify-center mt-20 w-full dock-nav-bar">
      <FloatingDock


        items={links} />
    </div>)
  );
}
