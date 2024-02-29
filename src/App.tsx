import { faker } from '@faker-js/faker';
import RestartButton from './components/RestartButtom';

const words = faker.word.words(10);

const App = () => {
  return (
    <>
      <CountdownTimer timeLeft={30}></CountdownTimer>
      <GenerateWords words={words}></GenerateWords>
      <RestartButton
        className='"mx-auto mt-10 text-slate-500'
        onRestart={() => null}
      ></RestartButton>
    </>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-center text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time:{timeLeft}</h2>;
};

export default App;
