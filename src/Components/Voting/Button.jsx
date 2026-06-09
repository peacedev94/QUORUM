export default function Button({
  children,
  variant = "primary", // primary | secondary | ghost
  fullWidth = false,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#6A2EE6]/40 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-[#6A2EE6] text-white hover:bg-[#6A2EE6]/90",
    secondary: "border border-white/10 bg-white/5 text-white hover:bg-white/10",
    ghost: "text-white/80 hover:bg-white/5",
  };

  return (
    <button
      className={[
        base,
        variants[variant] ?? variants.primary,
        fullWidth ? "w-full" : "",
        className,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}