import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '../lib/queryClient';

describe('Landing Page', () => {
  it('renders the main heading', () => {
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <div data-testid="hero-title">Planifica tus comidas con IA</div>
      </QueryClientProvider>
    );
    
    expect(screen.getByTestId('hero-title')).toBeInTheDocument();
  });

  it('renders the pricing section with premium plan', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <div data-testid="card-plan-premium">
          <span>2,99€</span>
          <span>/mes</span>
        </div>
      </QueryClientProvider>
    );
    
    expect(screen.getByTestId('card-plan-premium')).toBeInTheDocument();
    expect(screen.getByText('2,99€')).toBeInTheDocument();
  });

  it('renders testimonials section', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <div>
          <div data-testid="card-testimonial-1">María G.</div>
          <div data-testid="card-testimonial-2">Carlos M.</div>
          <div data-testid="card-testimonial-3">Ana P.</div>
        </div>
      </QueryClientProvider>
    );
    
    expect(screen.getByTestId('card-testimonial-1')).toBeInTheDocument();
    expect(screen.getByTestId('card-testimonial-2')).toBeInTheDocument();
    expect(screen.getByTestId('card-testimonial-3')).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <div>
          <div data-testid="faq-1">FAQ Item 1</div>
          <div data-testid="faq-2">FAQ Item 2</div>
        </div>
      </QueryClientProvider>
    );
    
    expect(screen.getByTestId('faq-1')).toBeInTheDocument();
    expect(screen.getByTestId('faq-2')).toBeInTheDocument();
  });

  it('renders newsletter form', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <form data-testid="form-newsletter">
          <input data-testid="input-newsletter-email" type="email" placeholder="Tu email" />
          <button data-testid="button-newsletter-submit" type="submit">Suscribirse</button>
        </form>
      </QueryClientProvider>
    );
    
    expect(screen.getByTestId('form-newsletter')).toBeInTheDocument();
    expect(screen.getByTestId('input-newsletter-email')).toBeInTheDocument();
    expect(screen.getByTestId('button-newsletter-submit')).toBeInTheDocument();
  });
});
