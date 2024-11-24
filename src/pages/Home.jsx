import { RateList } from '../components/RateList/RateList';

export default function Home() {
  return (
    <section>
      <div className="container">
        <h1>Курси валют на поточний день</h1>

        <RateList />
      </div>
    </section>
  );
}
