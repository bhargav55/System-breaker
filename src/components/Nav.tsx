import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/pivot', label: 'Pivot to AI Engineer', end: false },
  { to: '/ai-native-coding', label: 'AI-Native Coding', end: false },
  { to: '/about', label: 'About', end: false },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="text-lg font-extrabold tracking-tight text-brand-700">
          AI Engineering Hub
        </NavLink>
        <ul className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  [
                    'rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors sm:px-3',
                    isActive
                      ? 'bg-brand-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-brand-700',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
