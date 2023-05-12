import { Data } from '../App';
import { Cell } from './Cell';

type TableProps = {
  data: Data;
  type: 'Flavanoids' | 'Gamma';
};

//table component takes data and type, renders table for the type provided
export const Table = ({ data, type }: TableProps) => {
  const keyName = type === 'Flavanoids' ? 'flavanoidsArray' : 'gammaArray';
  return (
    <div className='table'>
      <div className='column bold'>
        <p className='cell'>Measure</p>
        <p className='cell'>{type} Mean</p>
        <p className='cell'>{type} Median</p>
        <p className='cell'>{type} Mode</p>
      </div>
      {Object.keys(data).map((key) => {
        return (
          <div className='column' key={key}>
            <p className='cell bold'>Class {key}</p>
            <Cell array={data[key][keyName]} operation='mean' />
            <Cell array={data[key][keyName]} operation='median' />
            <Cell array={data[key][keyName]} operation='mode' />
          </div>
        );
      })}
    </div>
  );
};
