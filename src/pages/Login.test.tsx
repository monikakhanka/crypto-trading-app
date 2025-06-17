import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../hooks/reduxHooks';
import { login } from '../store/authSlice';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
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

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    jest.clearAllMocks();
  });

  it('dispatches login and navigates to /trade on valid input', () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Email Address') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;
    const loginButton = screen.getByText('Log in');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);

    expect(mockDispatch).toHaveBeenCalledWith(login({ email: 'test@example.com' }));
    expect(mockNavigate).toHaveBeenCalledWith('/trade');
  });

  it('navigates to /login when email or password is missing', () => {
    render(<Login />);

    const loginButton = screen.getByText('Log in');
    fireEvent.click(loginButton);

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
});
