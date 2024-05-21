import { Loader2 } from 'lucide-react';
import React from 'react';

type Props = {};

const Loader = (props: Props) => {
  return <Loader2 className="animate-spin " strokeWidth={0.8} />;
};

export default Loader;
