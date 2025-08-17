import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { login } from '../store/authSlice';

import { MemoryRouter } from "react-router-dom";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useOutletContext: jest.fn(),
}));

jest.mock('../hooks/reduxHooks', () => ({
  useAppDispatch: jest.fn(),
}));

jest.mock('../store/authSlice', () => ({
  login: jest.fn(),
}));

describe('Login Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockSetIsLoginFormOpen = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useOutletContext as jest.Mock).mockReturnValue({
      setIsLoginFormOpen: mockSetIsLoginFormOpen,
    });
    jest.clearAllMocks();
  });

  it('dispatches login and navigates to /trade on valid input', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email Address') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
    const loginButton = screen.getByRole('button', { name: /log in/i });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(mockDispatch).toHaveBeenCalledWith(login({ email: 'test@example.com' }));
    expect(mockNavigate).toHaveBeenCalledWith('/', { replace: true });
  });

  it('navigates to /login when email or password is missing', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = screen.getByRole('button', { name: /log in/i });
    fireEvent.click(loginButton);

    expect(mockDispatch).not.toHaveBeenCalled();
  });
});
