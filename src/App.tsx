import { Results, UserTypings } from './components';
import { RestartButton } from './components/RestartButtom';
import { useEngine } from './hooks';
import { calculateAccuracyPercentage } from './utils/helpers';

const App = () => {
  const { state, words, timeLeft, typed, errors, restart, totalTyped } =
    useEngine();

  return (
    <>
      <CountdownTimer timeLeft={timeLeft}></CountdownTimer>
      <WordsContainer>
        <GenerateWords words={words}></GenerateWords>
        <UserTypings
          className="absolute inset-0"
          words={words}
          userInput={typed}
        ></UserTypings>
      </WordsContainer>
      <RestartButton
        className='"mx-auto mt-10 text-slate-500'
        onRestart={restart}
      ></RestartButton>
      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuaracyPorcentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      ></Results>
    </>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {children}
    </div>
  );
};

const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time:{timeLeft}</h2>;
};

export default App;
