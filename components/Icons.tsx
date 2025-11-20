import React from 'react';

const Icon = ({ className, children, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

export const Scan = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M3 7V5a2 2 0 0 1 2-2h2" /><path d="M17 3h2a2 2 0 0 1 2 2v2" /><path d="M21 17v2a2 2 0 0 1-2 2h-2" /><path d="M7 21H5a2 2 0 0 1-2-2v-2" /></Icon>
);

export const History = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l4 2" /></Icon>
);

export const Wallet = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></Icon>
);

export const FileText = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></Icon>
);

export const Smartphone = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></Icon>
);

export const Moon = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></Icon>
);

export const Bell = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></Icon>
);

export const PieChart = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M21.21 15.89A10 10 0 1 1 8 2.83" /><path d="M22 12A10 10 0 0 0 12 2v10Z" /></Icon>
);

export const ShieldCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" /><path d="m9 12 2 2 4-4" /></Icon>
);

export const Wifi = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M5 13a10 10 0 0 1 14 0" /><path d="M8.5 16.5a5 5 0 0 1 7 0" /><path d="M2 8.82a15 15 0 0 1 20 0" /><line x1="12" x2="12.01" y1="20" y2="20" /></Icon>
);

export const Database = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5V19A9 3 0 0 0 21 19V5" /><path d="M3 12A9 3 0 0 0 21 12" /></Icon>
);

export const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></Icon>
);

export const X = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M18 6 6 18" /><path d="m6 6 12 12" /></Icon>
);

export const Download = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></Icon>
);

export const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" /></Icon>
);

export const Heart = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></Icon>
);

export const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></Icon>
);

export const Hash = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /><line x1="10" x2="8" y1="3" y2="21" /><line x1="16" x2="14" y1="3" y2="21" /></Icon>
);

export const ChevronLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="m15 18-6-6 6-6" /></Icon>
);

export const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}><path d="m9 18 6-6-6-6" /></Icon>
);
