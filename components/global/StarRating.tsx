import { Star, StarOff, StarIcon } from 'lucide-react';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex flex-row gap-2 text-primary text-sm">
      {Array.from({ length: 5 }, (_, i) => i + 1).map((i) =>
        i <= rating ? (
          <StarIcon className="bg-clip-padding" size={14} key={i} />
        ) : (
          <StarOff className="bg-clip-padding" size={14} key={i} />
        )
      )}
    </div>
  );
};
export default StarRating;
