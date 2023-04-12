import React from 'react';
import { render, screen } from '@testing-library/react';

import TermsAndConditions from './index';

describe('Terms And Conditions render test', () => {
    it('renders terms list', () => {
        render(<TermsAndConditions />);
        const termsListItems = screen.getAllByRole('listitem');
        expect(termsListItems).toHaveLength(6);
      });
});
