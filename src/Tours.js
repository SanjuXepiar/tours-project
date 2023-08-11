import { Tour } from "./Tour";
export const Tours = ({ tours, deleteTour }) => {
  return (
    <div>
      <h1>Our Tours</h1>
      <div className="mainBody">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} deleteTour={deleteTour}></Tour>
        ))}
      </div>
    </div>
  );
};
