import Link from "next/link";

const variants = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  dark: "bg-ink text-white hover:bg-black",
  outline: "border-2 border-current hover:bg-white hover:text-ink",
};

export default function Button({ href, variant = "primary", className = "", children, ...props }) {
  const classes = `inline-flex items-center justify-center rounded-full px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
