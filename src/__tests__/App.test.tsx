import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe('Home page', () => {
  it('renders the hero headline', () => {
    renderAt('/');
    expect(
      screen.getByRole('heading', { name: 'Become an AI Engineer' }),
    ).toBeInTheDocument();
  });

  it('renders the "Explore the tracks" CTA pointing at the #tracks anchor', () => {
    renderAt('/');
    const cta = screen.getByRole('link', { name: 'Explore the tracks' });
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#tracks');
  });

  it('renders two track cards linking to each track route', () => {
    renderAt('/');
    const tracksSection = document.getElementById('tracks');
    expect(tracksSection).not.toBeNull();
    const section = within(tracksSection as HTMLElement);
    // Two cards: each shows its track title and links into the track route.
    expect(section.getByText('Pivot to AI Engineer')).toBeInTheDocument();
    expect(section.getByText('AI-Native Coding')).toBeInTheDocument();
    const links = section.getAllByRole('link');
    const hrefs = links.map((link) => link.getAttribute('href'));
    expect(hrefs).toContain('/pivot');
    expect(hrefs).toContain('/ai-native-coding');
  });
});

describe('Navigation', () => {
  it('exposes links for all four tabs', () => {
    renderAt('/');
    const nav = screen.getByRole('navigation');
    const navScope = within(nav);
    expect(navScope.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(
      navScope.getByRole('link', { name: 'Pivot to AI Engineer' }),
    ).toBeInTheDocument();
    expect(
      navScope.getByRole('link', { name: 'AI-Native Coding' }),
    ).toBeInTheDocument();
    expect(navScope.getByRole('link', { name: 'About' })).toBeInTheDocument();
  });
});

describe('Pivot track page', () => {
  it('renders the title and all four module titles', () => {
    renderAt('/pivot');
    expect(
      screen.getByRole('heading', { name: 'Pivot to AI Engineer' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Foundations of LLMs')).toBeInTheDocument();
    expect(
      screen.getByText('Prompt Engineering & Context Design'),
    ).toBeInTheDocument();
    expect(screen.getByText('Building RAG Systems')).toBeInTheDocument();
    expect(
      screen.getByText('Evaluating & Shipping AI Features'),
    ).toBeInTheDocument();
  });
});

describe('AI-Native Coding track page', () => {
  it('renders the title and all four module titles', () => {
    renderAt('/ai-native-coding');
    expect(
      screen.getByRole('heading', { name: 'AI-Native Coding' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Coding with AI Assistants')).toBeInTheDocument();
    expect(screen.getByText('Spec-Driven Development')).toBeInTheDocument();
    expect(screen.getByText('Agentic Workflows & Tooling')).toBeInTheDocument();
    expect(screen.getByText('Reviewing AI-Generated Code')).toBeInTheDocument();
  });
});

describe('About page', () => {
  it('renders the mission statement', () => {
    renderAt('/about');
    expect(
      screen.getByText(/everything AI engineering in one place/i),
    ).toBeInTheDocument();
  });
});
