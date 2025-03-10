import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  href: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, icon: Icon, children }) => {
  return (
    <a href={href} className="sidebar-link">
      <Icon size={20} />
      <span>{children}</span>
    </a>
  );
};

export default NavLink;