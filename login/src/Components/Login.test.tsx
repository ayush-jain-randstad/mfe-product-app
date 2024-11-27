import React from 'react'
import Login from './Login'
import { render, screen, fireEvent, waitFor,  } from '@testing-library/react'



describe('Login', () => {
    it('is truthy', () => {
        render(<Login />)
        expect(Login).toBeTruthy()
    })
    it('should look for input elements', () => {
        render(<Login />)
        const emailElement = screen.getByPlaceholderText('Enter your email')
       const passwordElement = screen.getByPlaceholderText('Enter your password')
       expect(emailElement).toBeInTheDocument();
       expect(passwordElement).toBeInTheDocument();
    })
    it('Button should be clickable', () => {

        render(<Login />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
        fireEvent.click(buttonElement)
    })
    it('should store token in local storage', async () => {
        
        render(<Login />)
        const emailElement = screen.getByPlaceholderText('Enter your email')
        const passwordElement = screen.getByPlaceholderText('Enter your password')
        await fireEvent.change(emailElement, { target: { value: 'admin1@example.com' } })
        await fireEvent.change(passwordElement, { target: { value: 'admin1' } })
        const buttonElement = screen.getByRole('button')
        await fireEvent.click(buttonElement)

        await waitFor(() => {
            const token = localStorage.getItem('token');
            console.log('Token in localStorage:', token);
            expect(token).not.toBeNull();
            expect(token).toBeTruthy();
        });
    })
   
})
