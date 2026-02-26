
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Data
const solutions = {
    title: "Solutions",
    sections: [
      {
        title: "Contact Center Solution",
        items: [
          { name: 'Auto Dialer', href: '/solutions/contact-center/auto-dialer', description: 'Automatically dial from a list of contacts.' },
          { name: 'Power Dialer', href: '/solutions/contact-center/power-dialer', description: 'Dial one by one, skipping unanswered calls.' },
          { name: 'Predictive Dialer', href: '/solutions/contact-center/predictive-dialer', description: 'Dial multiple numbers and connect agents to live calls.' },
          { name: 'Progressive Dialer', href: '/solutions/contact-center/progressive-dialer', description: 'Dial numbers at a fixed ratio to available agents.' },
          { name: 'Inbound Contact Center', href: '/solutions/contact-center/inbound', description: 'Manage incoming customer calls efficiently.' },
          { name: 'Outbound Contact Center', href: '/solutions/contact-center/outbound', description: 'Power up your outbound sales and marketing calls.' },
        ],
      },
      {
        title: "International Numbers",
        items: [
          { name: 'Toll-Free Numbers', href: '/solutions/international-numbers/toll-free', description: 'Allow customers to call you for free.' },
          { name: 'Local Numbers', href: '/solutions/international-numbers/local', description: 'Establish a local presence in any country.' },
        ],
      },
      {
        items: [
          { name: 'Cloud PBX', href: '/solutions/cloud-pbx', description: 'A complete business phone system in the cloud.' },
          { name: 'Unified Communications', href: '/solutions/unified-communications', description: 'Combine all your communication channels in one platform.' },
          { name: 'Click to Call', href: '/solutions/click-to-call', description: 'Add a call button to your website or app.' },
          { name: 'SMS/MMS API', href: '/solutions/sms-mms-api', description: 'Integrate SMS and MMS messaging into your applications.' },
          { name: 'Number Masking', href: '/solutions/number-masking', description: 'Protect user privacy with temporary numbers.' },
        ]
      }
    ],
  };
  
  const features = {
    title: "Features",
    sections: [
        {
            title: "Core Features",
            items: [
                { name: 'Calling Features', href: '/features/calling-features', description: 'Enhance your communication with powerful calling features.' },
                { name: 'Call Management', href: '/features/call-management', description: 'Take control of your inbound and outbound calls.' },
                { name: 'Call Reporting', href: '/features/call-reporting', description: 'Gain valuable insights into your call performance.' },
            ],
        },
        {
            title: "Advanced Call Control",
            items: [
                { name: 'Call Tracking', href: '/features/call-tracking', description: 'Monitor and analyze your call sources to optimize your marketing.' },
                { name: 'Call Forwarding', href: '/features/call-forwarding', description: 'Redirect incoming calls to any number, ensuring you never miss a call.' },

            ],
        },
        {
            title: "Contact Management",
            items: [
                { name: 'Target Management', href: '/features/target-management', description: 'Efficiently manage and organize your contact lists.' },
                { name: 'Call Capping', href: '/features/call-capping', description: 'Limit calls to contacts to avoid over-dialing.' },
            ]
        }
    ],
  };

// Tab Content Components
const SolutionsTabContent = ({ closeDropdown }) => (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-6">
            <h3 className="font-bold text-lg">{solutions.sections[0].title}</h3>
            <ul className="space-y-2">
                {solutions.sections[0].items.map((item, index) => (
                    <li key={index}>
                        <Link to={item.href} className="block group" onClick={closeDropdown}>
                            <span className="font-medium text-sm group-hover:text-foreground transition-colors">{item.name}</span>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="md:col-span-1 space-y-6">
            <h3 className="font-bold text-lg">{solutions.sections[1].title}</h3>
            <ul className="space-y-2">
                {solutions.sections[1].items.map((item, index) => (
                     <li key={index}>
                        <Link to={item.href} className="block group" onClick={closeDropdown}>
                            <span className="font-medium text-sm group-hover:text-foreground transition-colors">{item.name}</span>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
             <ul className="space-y-2">
                {solutions.sections[2].items.slice(0, 2).map((item, index) => (
                     <li key={index}>
                        <Link to={item.href} className="block group" onClick={closeDropdown}>
                            <span className="font-medium text-sm group-hover:text-foreground transition-colors">{item.name}</span>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        <div className="md:col-span-1 space-y-2">
             <ul className="space-y-2 pt-12">
                {solutions.sections[2].items.slice(2).map((item, index) => (
                     <li key={index}>
                        <Link to={item.href} className="block group" onClick={closeDropdown}>
                            <span className="font-medium text-sm group-hover:text-foreground transition-colors">{item.name}</span>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const FeaturesTabContent = ({ closeDropdown }) => (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="md:col-span-1 space-y-6">
                <h3 className="font-bold text-lg">{section.title}</h3>
                <ul className="space-y-2">
                    {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                            <Link to={item.href} className="block group" onClick={closeDropdown}>
                                <span className="font-medium text-sm group-hover:text-foreground transition-colors">{item.name}</span>
                                <p className="text-xs text-muted-foreground">{item.description}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ))}
    </div>
);

const TABS = [
  {
    title: "Solutions",
    href: "/solutions",
    Component: SolutionsTabContent,
    data: solutions,
  },
  {
    title: "Features",
    href: "/features",
    Component: FeaturesTabContent,
    data: features,
  },
];

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
    }

    return (
      <div onMouseLeave={handleClose} className="relative flex h-fit gap-2">
        {TABS.map((t, i) => (
          <Tab key={t.title} i={i} title={t.title} href={t.href} selected={selected} setSelected={handleSetSelected} />
        ))}
        <AnimatePresence>
          {selected !== null && (
            <Content dir={dir} selected={selected} onMouseEnter={() => clearTimeout(timeoutRef.current)} closeDropdown={closeDropdown} />
          )}
        </AnimatePresence>
      </div>
    );
  };
  
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
          className={`relative z-10 block cursor-pointer px-3 py-1.5 text-sm font-medium transition-colors hover:text-foreground ${isActive ? "font-bold text-foreground" : "text-muted-foreground"}`}
        >
          <span className="relative z-10 flex items-center">
            {title}
            <FiChevronDown className={`ml-1 transition-transform duration-300 ${selected === i ? "rotate-180" : ""}`} />
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
        className="absolute left-0 top-full mt-2 w-auto min-w-[600px] rounded-lg border border-border bg-background shadow-lg z-50"
      >
        <Component closeDropdown={closeDropdown} />
      </motion.div>
    );
  };

  const MobileShiftingDropDown = () => {
    const [openItems, setOpenItems] = useState([]);

    const handleValueChange = (value) => {
        setOpenItems(value);
    }

    const closeAccordion = () => {
        setOpenItems([]);
    }

    return (
      <Accordion type="multiple" className="w-full" value={openItems} onValueChange={handleValueChange}>
        {TABS.map((tab) => (
          <AccordionItem key={tab.title} value={tab.title}>
            <AccordionTrigger className="text-sm font-medium hover:no-underline">{tab.title}</AccordionTrigger>
            <AccordionContent>
              <div className="overflow-y-auto max-h-[60vh] pr-2">
                  <div className="pl-4">
                      {tab.data.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="mb-6 last:mb-0">
                          {section.title && <h3 className="font-semibold text-base mb-3 sticky top-0 bg-background py-2 -mt-2">{section.title}</h3>}
                          <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                              <Link to={item.href} className="block group text-sm p-2 rounded-md hover:bg-muted" onClick={closeAccordion}>
                                  <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">{item.name}</span>
                                  <p className="text-xs text-muted-foreground/80 mt-1">{item.description}</p>
                              </Link>
                              </li>
                          ))}
                          </ul>
                      </div>
                      ))}
                  </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    );
  };

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
