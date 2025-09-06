import ToolItem from "./ToolItem";
import {
  CodeIcon,
  NetworkIcon,
  PackageIcon,
  SearchIcon,
  ShipIcon,
  TerminalIcon,
  ZapIcon,
} from "lucide-react";

const tools = [
  {
    href: "https://github.com/403unlocker/bargozin-desktop",
    title: "برگزین",
    description:
      "ابزار قدرتمند تست DNS و شبکه برای انتخاب بهترین تنظیمات شبکه. تست سرعت دانلود و رجیستری‌های داکر.",
    tags: ["Network Testing", "DNS Optimization", "Docker Registry"],
    icon: <NetworkIcon className="w-8 h-8 text-white" />,
    isSpecial: true,
  },
  {
    href: "https://github.com/403unlocker/403unlocker-cli",
    title: "403unlocker-cli",
    description:
      "یک ابزار CLI همه‌کاره برای 403Unlocker شامل قابلیت‌های BestDNS، FastDocker و Check که به صورت یک پکیج کاربردی ارائه شده است.",
    tags: ["CLI Tool", "All-in-One", "Cross Platform"],
    icon: <TerminalIcon className="w-8 h-8 text-white" />,
    isSpecial: false,
  },
  {
    href: "https://github.com/403unlocker/check403unlocker-ext",
    title: "check403unlocker",
    description:
      "اگه نمیدونی وبسایتی که تو مرورگرت بازه رو با چه DNS میتونی بازش کنی کافیه این extension رو توی مرورگرت داشته باشی.",
    tags: ["Browser Extension", "DNS Detection", "Website Testing"],
    icon: <SearchIcon className="w-8 h-8 text-white" />,
    isSpecial: false,
  },
  // {
  //   href: "https://github.com/403unlocker/best403unlocker",
  //   title: "best403unlocker",
  //   description:
  //     "اگر شما هم برای دانلود و نصب یه سری از پکیج‌ها در سرورهاتون با تحریم روبرو شدید، می‌تونید با تغییر DNS بخشی از این تحریم‌ها رو دور بزنید.",
  //   tags: ["DNS Optimization", "Package Download", "Server Tools"],
  //   icon: <ZapIcon className="w-8 h-8 text-white" />,
  //   isSpecial: false,
  // },
  // {
  //   href: "https://github.com/403unlocker/fastDocker403unlocker",
  //   title: "fastDocker403unlocker",
  //   description:
  //     "اگر نیاز داشتید که پر سرعت‌ترین میرور رجیستری داکر رو برای دانلود ایمج‌های تحریمی به راحتی و سرعت پیدا کنید می‌تونید از این اسکریپت استفاده کنید.",
  //   tags: ["Docker Registry", "Image Download", "Mirror Finder"],
  //   icon: <ShipIcon className="w-8 h-8 text-white" />,
  //   isSpecial: false,
  // },
  {
    href: "https://github.com/403unlocker/best403unlocker-rs",
    title: "best403unlocker-rs",
    description:
      "اگر هنگام دانلود پکیج‌ها با تحریم مواجه شدید، می‌توانید با تغییر DNS بخشی از این محدودیت‌ها را دور بزنید. این ابزار برای ویندوز در دسترس است.",
    tags: ["Rust", "Windows", "Package Manager"],
    icon: <CodeIcon className="w-8 h-8 text-white" />,
    isSpecial: false,
  },
  {
    href: "https://github.com/403unlocker/best403unlocker-py",
    title: "best403unlocker-py",
    description:
      "اگه برای دانلود پکیج‌ها تحریم شدید، می‌تونید با تغییر DNS این مشکل رو حل کنید. این ابزار با پایتون ساخته شده و در PyPI موجوده.",
    tags: ["Python", "PyPI Package", "Package Manager"],
    icon: <PackageIcon className="w-8 h-8 text-white" />,
    isSpecial: false,
  },
];

export default function ToolsSection() {
  return (
    <div
      id="tools"
      className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              ابزار های ما
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            مجموعه‌ای از ابزارهای قدرتمند برای دور زدن تحریم‌ها و بهینه‌سازی
            شبکه
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map(tool => (
            <ToolItem key={tool.title} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}
