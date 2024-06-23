import React from "react";
import { Button } from "@/components/ui/MovingBorder";
import Image from "next/image";
import HTMLlogo from "@/public/html.svg";
import CSSlogo from "@/public/css.svg";
import JSlogo from "@/public/js.svg";
import PHP from "@/public/php.svg";
import TypeScriptlogo from "@/public/ts.svg";
import SHADCNlogo from "@/public/shacnUI.png";
import JQERYlogo from "@/public/jqury.png";
import SASSlogo from "@/public/scss.png";
import Framerlogo from "@/public/fm.svg";
import GSAPlogo from "@/public/gsap.svg";
import NEXTlogo from "@/public/nextjs.png";
import Reactlogo from "@/public/re.svg";
import Bootstraplogo from "@/public/boos.png";
import Tailwindlogo from "@/public/tail.svg";
import MaterialUIlogo from "@/public/materialui.png";
import VSCodeLogo from "@/public/vscode.png";
import GitHubLogo from "@/public/git.svg";
import GitLogo from "@/public/git.png";
import ChatGPTLogo from "@/public/chatgpt.jpg";
import Figmalogo from "@/public/figma.png"; // Reusing ChatGPTLogo for Figma

const skills = [
  {
    category: "Programming Languages",
    items: [
      { logo: HTMLlogo, name: "HTML" },
      { logo: CSSlogo, name: "CSS" },
      { logo: JSlogo, name: "JavaScript" },
      { logo: PHP, name: "PHP" },
      { logo: TypeScriptlogo, name: "TypeScript" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { logo: SHADCNlogo, name: "SHADCN/UI" },
      { logo: JQERYlogo, name: "JQuery" },
      { logo: SASSlogo, name: "SASS" },
      { logo: Framerlogo, name: "Framer Motion" },
      { logo: GSAPlogo, name: "GSAP" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { logo: NEXTlogo, name: "NEXT.js" },
      { logo: Reactlogo, name: "React" },
      { logo: Bootstraplogo, name: "Bootstrap" },
      { logo: Tailwindlogo, name: "Tailwind CSS" },
      { logo: MaterialUIlogo, name: "Material-UI" },
    ],
  },
  {
    category: "Technical Tools",
    items: [
      { logo: Figmalogo, name: "Figma" },
      { logo: VSCodeLogo, name: "VS Code" },
      { logo: GitHubLogo, name: "GitHub" },
      { logo: GitLogo, name: "Git" },
      { logo: ChatGPTLogo, name: "ChatGPT" },
    ],
  },
];

const Technologies = () => {
  return (
    <div className="py-20 w-full mt-[8rem]" id="Topskills">
      <h1 className="text-4xl font-bold text-center mb-12 heading">
        My <span className="text-purple">Top Skills</span>
      </h1>
      <div className="w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 px-4">
        {skills.map((skillCategory, index) => (
          <Button
            key={index}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="text-black dark:text-white border-neutral-200 dark:border-slate-800 shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col p-6 gap-6">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-4 mt-2">
                  {skillCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Image
                        src={item.logo}
                        alt={item.name}
                        width={32}
                        height={32}
                        className="mb-2"
                      />
                      <p className="text-gray-800 dark:text-white font-medium">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
