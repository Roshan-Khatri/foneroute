"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getSanityClient } from "@/lib/sanity/client";
import {
  NAV_SOLUTIONS_QUERY,
  NAV_FEATURES_QUERY,
} from "@/sanity/queries";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


/* =========================
   DATA FROM SANITY
========================= */

const useDropdownData = () => {
  const [solutions, setSolutions] = useState([]);
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const client = getSanityClient();

    const loadData = async () => {
      const solutionsData = await client.fetch(NAV_SOLUTIONS_QUERY);
      const featuresData = await client.fetch(NAV_FEATURES_QUERY);

      setSolutions(solutionsData || []);
      setFeatures(featuresData || []);
    };

    loadData();
  }, []);

  return { solutions, features };
};


/* =========================
   TAB CONTENT
========================= */

const SolutionsTabContent = ({ closeDropdown }) => {
  const { solutions } = useDropdownData();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {solutions.map((item) => (
        <Link
          key={item.slug}
          to={`/solutions/${item.slug}`}
          className="block group"
          onClick={closeDropdown}
        >
          <span className="font-medium text-sm group-hover:text-foreground transition-colors">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
};

const FeaturesTabContent = ({ closeDropdown }) => {
  const { features } = useDropdownData();

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((item) => (
        <Link
          key={item.slug}
          to={`/features/${item.slug}`}
          className="block group"
          onClick={closeDropdown}
        >
          <span className="font-medium text-sm group-hover:text-foreground transition-colors">
            {item.title}
          </span>
        </Link>
      ))}
    </div>
  );
};


/* =========================
   TABS
========================= */

const TABS = [
  {
    title: "Solutions",
    href: "/solutions",
    Component: SolutionsTabContent,
  },
  {
    title: "Features",
    href: "/features",
    Component: FeaturesTabContent,
  },
];


/* =========================
   DESKTOP DROPDOWN
========================= */

const DesktopShiftingDropDown = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);
  const timeoutRef = useRef(null);

  const handleSetSelected = (val) => {
    clearTimeout(timeoutRef.current);

    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  const closeDropdown = () => {
    setSelected(null);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => {
      setSelected(null);
    }, 150);
  };

  return (
    <div onMouseLeave={handleClose} className="relative flex h-fit gap-2">
      {TABS.map((t, i) => (
        <Tab
          key={t.title}
          i={i}
          title={t.title}
          href={t.href}
          selected={selected}
          setSelected={handleSetSelected}
        />
      ))}

      <AnimatePresence>
        {selected !== null && (
          <Content
            dir={dir}
            selected={selected}
            onMouseEnter={() => clearTimeout(timeoutRef.current)}
            closeDropdown={closeDropdown}
          />
        )}
      </AnimatePresence>
    </div>
  );
};


/* =========================
   TAB BUTTON
========================= */

const Tab = ({ i, title, href, selected, setSelected }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname.startsWith(href);

  return (
    <div className="relative" onMouseEnter={() => setSelected(i)}>
      <button
        onClick={(e) => {
          e.preventDefault();
          navigate(href);
          window.scrollTo(0, 0);
        }}
        className={`relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${
          isActive ? "font-bold text-foreground" : "text-muted-foreground"
        }`}
      >
        <span className="relative z-10 flex items-center">
          {title}
          <FiChevronDown
            className={`ml-1 transition-transform duration-300 ${
              selected === i ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {selected === i && (
        <motion.div
          layoutId="tabs"
          transition={{ type: "spring", duration: 0.4, bounce: 0.2 }}
          className="absolute inset-0 z-0 rounded-md bg-muted"
        />
      )}
    </div>
  );
};


/* =========================
   DROPDOWN CONTENT
========================= */

const Content = ({ selected, dir, onMouseEnter, closeDropdown }) => {
  const { Component } = TABS[selected] || {};
  if (!Component) return null;

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      initial={{ opacity: 0, x: dir === "l" ? 100 : -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: dir === "l" ? -100 : 100 }}
      transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
      className="absolute left-0 top-full mt-2 w-auto min-w-[500px] rounded-lg border border-border bg-background shadow-lg z-50"
    >
      <Component closeDropdown={closeDropdown} />
    </motion.div>
  );
};


/* =========================
   MOBILE DROPDOWN
========================= */

const MobileShiftingDropDown = () => {
  const { solutions, features } = useDropdownData();

  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="solutions">
        <AccordionTrigger>Solutions</AccordionTrigger>
        <AccordionContent>
          {solutions.map((item) => (
            <Link
              key={item.slug}
              to={`/solutions/${item.slug}`}
              className="block p-2 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="features">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          {features.map((item) => (
            <Link
              key={item.slug}
              to={`/features/${item.slug}`}
              className="block p-2 text-sm"
            >
              {item.title}
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};


/* =========================
   EXPORT
========================= */

export const ShiftingDropDown = () => {
  return (
    <>
      <div className="hidden lg:flex">
        <DesktopShiftingDropDown />
      </div>

      <div className="block lg:hidden w-full">
        <MobileShiftingDropDown />
      </div>
    </>
  );
};