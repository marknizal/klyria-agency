import {
  LuPhone,
  LuShieldCheck,
  LuCalendarDays,
  LuChartSpline,
} from "react-icons/lu";

export const services = [
  {
    id: "support",
    title: "24/7 Support",
    description:
      "Our support team is available 24/7 to assist with technical issues, account inquiries, or urgent troubleshooting.",
    icon: LuPhone,
    color: "#007bff",
  },
  {
    id: "payments",
    title: "Secure Payments",
    description:
      "We use industry-leading encryption and fraud prevention tools to ensure every transaction is safe, fast, and protected.",
    icon: LuShieldCheck,
    color: "#28a745",
  },
  {
    id: "updates",
    title: "Daily Updates",
    description:
      "Stay informed with real-time updates and reports so you never miss important changes, progress, or improvements in your projects.",
    icon: LuCalendarDays,
    color: "#ffc107",
  },
  {
    id: "research",
    title: "Market Research",
    description:
      "We deliver clear market analysis and insights to help you track industry trends, customer behavior, and new business opportunities.",
    icon: LuChartSpline,
    color: "#dc3545",
  },
];
