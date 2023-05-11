import { useAdmin } from '../../../Context/Admin';

export default function RafflesList() {
  const { raffles } = useAdmin();
  return (
    <div>
      {raffles && raffles.map((raffle) => (
        <div key={raffle.id}>
          <h2>{raffle.title}</h2>
          <p>{raffle.price}</p>
          <img src={raffle.imageUrl} alt={raffle.title} />
        </div>
      ))}
    </div>
  );
}
