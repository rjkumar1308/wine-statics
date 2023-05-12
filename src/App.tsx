import { Table } from './components/Table';
import wineData from './data/data.json';
import { calculateGamma } from './utils/utils';
import './styles/main.css';

export type Data = {
  [key: string]: { flavanoidsArray: number[]; gammaArray: number[] };
};

function App() {
  const data: Data = {};
  //formatting data to store only relevant information.
  //creating arrays for flavanoids and gamma to increase performance.
  wineData.forEach((wine) => {
    if (!data[wine.Alcohol]) {
      data[wine.Alcohol] = {
        flavanoidsArray: [Number(wine.Flavanoids)],
        gammaArray: [
          calculateGamma(
            Number(wine.Ash),
            Number(wine.Hue),
            Number(wine.Magnesium)
          ),
        ],
      };
    } else {
      data[wine.Alcohol].flavanoidsArray.push(Number(wine.Flavanoids));
      data[wine.Alcohol].gammaArray.push(
        calculateGamma(
          Number(wine.Ash),
          Number(wine.Hue),
          Number(wine.Magnesium)
        )
      );
    }
  });

  console.log(data);

  return (
    <div className='App'>
      {/* First Table */}
      <Table data={data} type='Flavanoids' />
      {/* Second Table */}
      <Table data={data} type='Gamma' />
    </div>
  );
}

export default App;
