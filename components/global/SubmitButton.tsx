import { Loader2 } from 'lucide-react';
import React from 'react';
import { Button, ButtonProps } from '../ui/button';

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
} & ButtonProps; // Include ButtonProps in the Props type

const SubmitButton = ({ isLoading, children, ...buttonProps }: Props) => {
  return (
    <Button disabled={isLoading} type="submit" {...buttonProps}>
      {' '}
      {isLoading && <Loader2 className="size-4 animate-spin mr-2" />} {children}
    </Button>
  );
};

export default SubmitButton;
