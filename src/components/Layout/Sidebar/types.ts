import { LucideIcon } from 'lucide-react';

export interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export interface CourseSectionProps {
  title: string;
  icon: LucideIcon;
  courses: Array<{
    id: string;
    name: string;
    description: string;
  }>;
}