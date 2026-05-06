interface CareIconProps {
  name: "sleep" | "shield" | "meal" | "home" | "feeding" | "night" | "recovery" | "arrival";
  className?: string;
}

export default function CareIcon({ name, className = "" }: CareIconProps) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    className,
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (name === "sleep") {
    return (
      <svg {...common}>
        <path d="M17 35c3.8 7.2 11 11.5 19.2 10.6 7.6-.8 13.8-6.2 16-13.3-5 3.2-11.4 3.9-17.2 1.3-5.8-2.6-9.7-7.8-10.8-13.7-5.7 3-9.3 8.4-9.7 14.1" />
        <path d="M14 23c2.7-3.5 6.6-6 11.1-7" />
        <path d="M39 18h8l-8 9h9" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg {...common}>
        <path d="M32 8 51 16v13c0 13.2-8.1 22-19 27-10.9-5-19-13.8-19-27V16l19-8Z" />
        <path d="M23 32c4.8 5.8 13.2 5.8 18 0" />
        <path d="M25 24h.1M39 24h.1" />
      </svg>
    );
  }

  if (name === "meal") {
    return (
      <svg {...common}>
        <path d="M13 34c2.5 10.8 10 17 19 17s16.5-6.2 19-17H13Z" />
        <path d="M18 34c0-7.7 6.3-14 14-14s14 6.3 14 14" />
        <path d="M24 16c1.5-3.5 4-5.2 8-5.2s6.5 1.7 8 5.2" />
        <path d="M22 43h20" />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...common}>
        <path d="M11 30 32 12l21 18" />
        <path d="M17 28v24h30V28" />
        <path d="M25 52V39c0-4 3-7 7-7s7 3 7 7v13" />
        <path d="M24 24c4.6 3.8 11.4 3.8 16 0" />
      </svg>
    );
  }

  if (name === "feeding") {
    return (
      <svg {...common}>
        <path d="M25 11h14" />
        <path d="M28 11v7l-7 8v20c0 4 3 7 7 7h8c4 0 7-3 7-7V26l-7-8v-7" />
        <path d="M24 34h16" />
        <path d="M27 42h10" />
      </svg>
    );
  }

  if (name === "night") {
    return (
      <svg {...common}>
        <path d="M22 42c0-7 4.8-12 10-12s10 5 10 12" />
        <path d="M18 44h28" />
        <path d="M16 23c5.6-6 12.7-9 21.5-9" />
        <path d="M41 13c-2 6.7.2 13.3 5.8 17" />
        <path d="M49 18h4M51 16v4" />
      </svg>
    );
  }

  if (name === "recovery") {
    return (
      <svg {...common}>
        <path d="M32 52c11-8.4 18-16.2 18-25 0-6-4.1-10.6-9.7-10.6-3.6 0-6.5 1.8-8.3 4.5-1.8-2.7-4.7-4.5-8.3-4.5C18.1 16.4 14 21 14 27c0 8.8 7 16.6 18 25Z" />
        <path d="M24 34h5l3-7 4 12 3-5h5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 44c6-3.5 12.6-5.2 20-5.2S46 40.5 52 44" />
      <path d="M18 31c3.8-7.4 8.5-11 14-11s10.2 3.6 14 11" />
      <path d="M24 20V10h16v10" />
      <path d="M21 50h22" />
      <path d="M15 15h6M43 15h6" />
    </svg>
  );
}
