import { 
  Building2, 
  Users, 
  Settings, 
  CreditCard, 
  Receipt,
  ChevronDown,
  ChevronRight,
  Bell,
  ExternalLink,
  Calendar,
  History,
  MapPin,
  Mail,
  Phone,
  Clock,
  Star,
  Menu
} from 'lucide-react';

export const navigationItems = [
    {
      title: "Dashboard",
      icon: Building2,
      url: "#",
      isActive: false,
    },
    {
      title: "Company", 
      icon: Users,
      url: "#",
      isActive: false,
    },
    {
      title: "Services",
      icon: Settings,
      url: "#",
      isActive: true,
      items: [
        { title: "Online Visibility Optimization", url: "#" },
        { title: "Reputation management", url: "#" },
        { title: "Website Builder", url: "#" },
        { title: "Business Email", url: "#" },
        { title: "Dedicated Business Phone Number", url: "#" },
        { title: "Customized Customer Service", url: "#" },
        { title: "Content Creation", url: "#" },
        { title: "Personal Graphic Designer", url: "#" },
        { title: "Personal Marketer", url: "#" },
        { title: "Advertisement", url: "#", isActive: true },
        { title: "SEA Advertising", url: "#" },
        { title: "Social Media Advertising & Management", url: "#" },
        { title: "Accountant", url: "#" },
        { title: "Legal Support", url: "#" },
        { title: "Custom Services", url: "#" },
      ],
    },
    {
      title: "Subscription",
      icon: CreditCard,
      url: "#",
      isActive: false,
    },
    {
      title: "Billing & Invoices",
      icon: Receipt,
      url: "#", 
      isActive: false,
    },
  ];

  