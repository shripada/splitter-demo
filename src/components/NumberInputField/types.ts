import React from 'react';

/**
 * NumberInputFieldProps encapsulates the props that NumberInputField accepts
 */
export interface NumberInputFieldProps {
  /** Label of the input field */
  label: string;
  /** value of the input field. The input field is a controlled component */
  value?: number;
  /** An optional component depicting a small icon in the left edge of the input
   * component, but within its boundary.
   */
  iconComponent?: React.ReactNode;
  /**
   * Set this to allow decimal input
   */
  decimalInputNeeded?: boolean;

  /** In case any error, we need to set a non empty error message */
  errorMessage?: string;
}
