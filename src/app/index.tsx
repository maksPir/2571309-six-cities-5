import MainPage from '../pages/MainPage';
import { CardType } from '../shared';


interface IAppProps {
    dataPlaces: CardType[];
}
export default function App ({dataPlaces}: IAppProps) {
  return (
    <MainPage dataPlaces={dataPlaces}/>
  );
}
