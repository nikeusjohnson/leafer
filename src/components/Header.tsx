import Logo from "./Logo";

const links = [
  ["/clinics", "Compare clinics"],
  ["/how-it-works", "How it works"],
  ["/guides", "Patient guides"],
  ["/uk-law", "UK law"],
];

export default function Header({ pathname }: { pathname: string }) {
  return (
    <header className="masthead">
      <div className="site-wrap masthead-inner">
        <Logo />
        <button
          type="button"
          className="nav-toggle"
          aria-label="Menu"
          aria-controls="site-nav"
          aria-expanded="false"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path className="menu-bars" d="M3 5h14M3 10h14M3 15h14" />
            <path className="menu-close" d="m4 4 12 12M16 4 4 16" />
          </svg>
          <span>Menu</span>
        </button>
        <nav className="site-nav" id="site-nav" aria-label="Main navigation">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              aria-current={
                pathname === href
                  ? "page"
                  : pathname.startsWith(href + "/")
                    ? "location"
                    : undefined
              }
            >
              {label}
              <span aria-hidden="true">›</span>
            </a>
          ))}
        </nav>
        <a
          className="nav-check"
          href="/eligibility"
          aria-current={pathname === "/eligibility" ? "page" : undefined}
        >
          <svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true">
            <path fill="currentColor" d="M7 1h6v6h6v6h-6v6H7v-6H1V7h6z" />
          </svg>
          Check eligibility
        </a>
      </div>
    </header>
  );
}
