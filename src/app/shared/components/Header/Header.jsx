"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "./header.css";

export function Header({ bgIsLoaded, isHomePage = false }) {
  const location = usePathname();

  return (
    <header
      className={`header ${
        isHomePage && !bgIsLoaded ? "header--bg-is-loading" : ""
      }`}
    >
      <div className="header-inner">
        <Link href={"/"}>
          <img
            width={30}
            height={35}
            className="header__logo homepage-transition"
            src="/logo.svg"
            alt="Lightblocks logo"
          />
          <img
            width={194}
            height={42}
            className="header__logo--desktop homepage-transition"
            src="/logo_desktop.svg"
            alt="Lightblocks logo"
          />
        </Link>
        <nav className="header__nav">
          <a
            className="header__nav-link"
            href={"https://eoracle.io/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            eoracle
          </a>
          <Link
            href={"/team"}
            className={`header__nav-link ${
              location.pathname === "/team"
                ? "header__nav-link--current-page"
                : ""
            }`}
          >
            team
          </Link>
          <Link
            href={"/open-roles"}
            className={`header__nav-link ${
              location.pathname === "/team"
                ? "header__nav-link--current-page"
                : ""
            }`}
          >
            open roles
          </Link>
        </nav>
      </div>
    </header>
  );
}
