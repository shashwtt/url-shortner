import React from "react";
import { Github } from "lucide-react";
function Header() {
  return (
    <header className="container flex flex-row items-center justify-between px-6">
      <h1 className="text-2xl font-semibold text-stone-200">Shortly</h1>
      <a
        href="https://github.com/phantomknight287/url-shortner"
        target="_blank"
      >
        <Github className="w-6 h-6" />
      </a>
    </header>
  );
}

export default Header;
