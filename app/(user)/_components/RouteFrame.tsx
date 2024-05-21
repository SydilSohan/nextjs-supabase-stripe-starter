import { Card, CardHeader } from '@/components/ui/card';
import { Database } from '@/types/supabase';
import Image from 'next/image';
import slugify from 'slugify';
import { Link } from 'next-view-transitions';
type Props = {
  route: Database['public']['Tables']['routes']['Row'];
  size?: 'small' | 'medium' | 'large';
};

const RouteCard = ({ route, size }: Props) => {
  return (
    <Link
      key={route.id}
      href={`/routes/${slugify(route.name, {
        lower: true,
        strict: true,
      })}/${route.id}`}
    >
      <Card
        className={`rounded-lg flex flex-col items-center justify-center relative  border-primary border-[5px] shadow-lg ${
          size === 'large'
            ? 'aspect-square md:basis-1/2 lg:basis-1/3  h-80 '
            : 'flex-1 md:basis-1/2 lg:basis-1/3  h-52'
        }`}
      >
        {route.image && (
          <Image
            className="brightness-[0.5]  bg-blend-overlay object-cover  rounded-sm"
            src={route.image}
            alt={route.name || ''}
            fill
          />
        )}
        <CardHeader className="z-10 gap-0 ">
          <h2
            className={`uppercase text-center font-extrabold  text-orange-400 opacity-85 ${
              size === 'large' ? 'text-4xl lg:text-5xl' : 'text-2xl lg:text-3xl'
            }`}
          >
            {route.city}
          </h2>
          <h3 className="text-center text-gray-100 text-sm md:text-lg -mb-4 font-semibold uppercase">
            {' '}
            {route.neighborhood}
          </h3>
          <h4 className="text-center text-gray-100 text-xs "> {route.name}</h4>
        </CardHeader>
      </Card>
    </Link>
  );
};

export default RouteCard;
