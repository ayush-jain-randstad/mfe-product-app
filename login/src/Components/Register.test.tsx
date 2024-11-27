import Register from "./Register";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Register", () => {
    it("is truthy", () => {
        render(<Register />);
        expect(Register).toBeTruthy();
    });
    it("should look for input elements", () => {
        render(<Register />);
        const emailElement = screen.getByPlaceholderText("Enter your email");
        const passwordElement = screen.getByPlaceholderText("Enter your password");
        const nameElement = screen.getByPlaceholderText("Enter your name");
        const confirmPasswordElement = screen.getByPlaceholderText(
            "Confirm your password"
        );
        expect(emailElement).toBeInTheDocument();
        expect(passwordElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(confirmPasswordElement).toBeInTheDocument();
    });

    it('should be clickable', () => {

        render(<Register />)
        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
        fireEvent.click(buttonElement)
    })
});