import React, { useState } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { Link } from "react-router-dom"; // Import Link
import { FiBook, FiBriefcase, FiCreditCard, FiHome, FiMessageSquare, FiTrendingUp, FiUsers } from "react-icons/fi";

const ShiftingDropDown = () => {
  return (
    <div className="flex justify-center ">
      <Tabs />
    </div>
  );
};

const Tabs = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-fit gap-2">
      {TABS.map((tab) => {
        return (
          <Tab
            key={tab.id}
            selected={selected === tab.id}
            setSelected={setSelected}
            id={tab.id}
            title={tab.title}
          />
        );
      })}
    </div>
  );
};

const Tab = ({
  id,
  selected,
  setSelected,
  title,
}: {
  id: number;
  selected: boolean;
  setSelected: (id: number | null) => void;
  title: string;
}) => {
  return (
    <div className="relative w-fit" onMouseLeave={() => setSelected(null)}>
      <button
        onMouseEnter={() => setSelected(id)}
        className={`${selected ? "" : "hover:text-neutral-400"} relative z-10 p-2 text-sm transition-colors`}
      >
        {title}
      </button>
      {selected && <Underline />}

      {selected && <Content id={id} />}
    </div>
  );
};

const Underline = () => {
  return (
    <motion.div
      layoutId="underline"
      className="absolute bottom-0 left-0 right-0 h-1 bg-foreground"
    />
  );
};

const Content = ({ id }: { id: number }) => {
  return (
    <motion.div
      initial={{ y: 8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 8, opacity: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.35 }}
      style={{ x: "-50%" }}
      className="absolute left-1/2 top-full z-20 mt-2 w-max rounded-lg border-2 border-foreground bg-background shadow-[0px_4px_8px_rgba(0,0,0,0.6)]"
    >
      <div className="grid h-full w-full grid-cols-2 gap-4 p-4">
        {TABS[id].cards.map((card) => {
          return <Card key={card.id} {...card} />;
        })}
      </div>
    </motion.div>
  );
};

const Card = ({
  title,
  Icon,
  description,
  link,
}: {
  title: string;
  Icon: IconType;
  description: string;
  link: string;
}) => {
  return (
    <Link to={link} className="block">
      <div className="group relative w-72 cursor-pointer rounded-lg border-2 border-border bg-background p-4 transition-colors hover:border-foreground">
        <div className="flex items-center gap-4">
          <Icon className="text-2xl text-foreground" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>

        <div className="absolute right-4 top-4 text-2xl text-muted-foreground transition-colors group-hover:text-foreground">
          <FiTrendingUp />
        </div>
      </div>
    </Link>
  );
};

export default ShiftingDropDown;

const TABS = [
  {
    id: 0,
    title: "Solutions",
    cards: [
      {
        id: 0,
        title: "Auto Dialer",
        Icon: FiMessageSquare,
        description: "Automatically dial from a list of numbers.",
        link: "/solutions/contact-center/auto-dialer",
      },
      {
        id: 1,
        title: "Power Dialer",
        Icon: FiBook,
        description: "Dial numbers one after another automatically.",
        link: "/solutions/contact-center/power-dialer",
      },
      {
        id: 2,
        title: "Predictive Dialer",
        Icon: FiBriefcase,
        description: "Uses algorithms to dial numbers and connect to live agents.",
        link: "/solutions/contact-center/predictive-dialer",
      },
      {
        id: 3,
        title: "Inbound",
        Icon: FiUsers,
        description: "Manage incoming calls effectively.",
        link: "/solutions/contact-center/inbound",
      },
    ],
  },
  {
    id: 1,
    title: "Features",
    cards: [
      {
        id: 0,
        title: "Call Routing",
        Icon: FiCreditCard,
        description: "Direct calls to the right department or agent.",
        link: "/features/call-routing",
      },
      {
        id: 1,
        title: "Call Management",
        Icon: FiHome,
        description: "Tools to manage and control calls.",
        link: "/features/call-management",
      },
      {
        id: 2,
        title: "Analytics & Reports",
        Icon: FiTrendingUp,
        description: "Get insights into your call data.",
        link: "/features/analytics-reports",
      },
       {
        id: 3,
        title: "IVR System",
        Icon: FiTrendingUp,
        description: "Automated voice response system.",
        link: "/features/ivr-system",
      },
    ],
  },
];
