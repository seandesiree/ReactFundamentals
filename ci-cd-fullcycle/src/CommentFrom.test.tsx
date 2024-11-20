
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CommentForm from './CommentForm';

describe('CommentForm', () => {
    it('renders correctly', () => {
        const { getByLabelText, getByText } = render(<CommentForm />);
        expect(getByLabelText(/Title:/i)).toBeInTheDocument();
        expect(getByLabelText(/Body:/i)).toBeInTheDocument();
        expect(getByText(/Submit/i)).toBeInTheDocument();
    });

    it('handles input changes', () => {
        const { getByLabelText } = render(<CommentForm />);
        const titleInput = getByLabelText(/Title:/i);
        const bodyInput = getByLabelText(/Body:/i);
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
        expect(titleInput.value).toBe('Test Title');
        expect(bodyInput.value).toBe('Test Body');
    });

    it('submits the form and stores comment in localStorage', () => {
        const { getByLabelText, getByText } = render(<CommentForm />);
        const titleInput = getByLabelText(/Title:/i);
        const bodyInput = getByLabelText(/Body:/i);
        fireEvent.change(titleInput, { target: { value: 'Test Title' } });
        fireEvent.change(bodyInput, { target: { value: 'Test Body' } });
        fireEvent.click(getByText(/Submit/i));

        const comments = JSON.parse(localStorage.getItem('comments'));
        expect(comments).toHaveLength(1);
        expect(comments[0]).toEqual({ title: 'Test Title', body: 'Test Body' });
    });
});