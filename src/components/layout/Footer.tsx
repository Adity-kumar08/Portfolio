import { personalData } from "@/data/personal";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-900 bg-zinc-950 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold tracking-tight text-zinc-200">
            {personalData.name.toUpperCase()}
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            {personalData.title} &middot; {personalData.subtitle}
          </p>
        </div>
        
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-zinc-50 transition-colors">
            GitHub
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 text-center md:text-left text-xs text-zinc-600">
        &copy; {new Date().getFullYear()} {personalData.name}.
      </div>
    </footer>
  );
};
