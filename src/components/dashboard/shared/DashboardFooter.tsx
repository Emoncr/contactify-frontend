export function DashboardFooter() {
  return (
    <footer className="mt-16 flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
      <p className="text-muted-foreground text-xs">
        © 2024 Contactify Lead Management. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  );
}
