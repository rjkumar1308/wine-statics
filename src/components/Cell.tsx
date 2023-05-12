import { useEffect, useState } from 'react';
import { getMean, getMedian, getMode } from '../utils/utils';

type CellProps = {
  array: number[];
  operation: 'mean' | 'median' | 'mode';
};

//component to calculate value according to operation provided.
export const Cell = ({ array, operation }: CellProps) => {
  const [value, setValue] = useState<number | string>();

  //useEffect hook to run on component load
  useEffect(() => {
    if (operation === 'mean') setValue(getMean(array));
    else if (operation === 'median') setValue(getMedian(array));
    else if (operation === 'mode') setValue(getMode(array));
  }, [array]);

  return <p className='cell'>{value}</p>;
};
