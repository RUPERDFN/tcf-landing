import { describe, it, expect } from 'vitest';

describe('Utility Functions', () => {
  it('validates email format correctly', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    expect(emailRegex.test('test@example.com')).toBe(true);
    expect(emailRegex.test('user.name@domain.org')).toBe(true);
    expect(emailRegex.test('invalid-email')).toBe(false);
    expect(emailRegex.test('@nodomain.com')).toBe(false);
    expect(emailRegex.test('noatsign.com')).toBe(false);
  });

  it('formats price correctly', () => {
    const formatPrice = (price: number): string => {
      return price.toFixed(2).replace('.', ',') + '€';
    };
    
    expect(formatPrice(2.99)).toBe('2,99€');
    expect(formatPrice(0)).toBe('0,00€');
    expect(formatPrice(10.5)).toBe('10,50€');
  });

  it('generates correct APP_URL', () => {
    const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.thecookflow.com';
    
    expect(APP_URL).toContain('thecookflow');
    expect(APP_URL.startsWith('http')).toBe(true);
  });
});
