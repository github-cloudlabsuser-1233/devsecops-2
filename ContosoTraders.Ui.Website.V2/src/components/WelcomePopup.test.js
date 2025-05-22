import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup Component', () => {
  test('renders the modal with welcome message', () => {
    render(<WelcomePopup />);

    // Check if the modal content is displayed
    expect(screen.getByText('WELCOME')).toBeInTheDocument();
    expect(screen.getByText('TO')).toBeInTheDocument();
    expect(screen.getByText('The DevSecOps Day 2 Hackathon!')).toBeInTheDocument();
  });

  test('closes the modal when the close button is clicked', () => {
    render(<WelcomePopup />);

    // Click the close button
    fireEvent.click(screen.getByText('Get Started'));

    // Check if the modal is no longer in the document
    expect(screen.queryByText('WELCOME')).not.toBeInTheDocument();
  });
});
