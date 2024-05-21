import { Database, Tables } from '@/types/supabase';
import RouteCard from './RouteFrame';
type Props = {
  routes: Tables<'routes'>[];
};

const RouteGrid = ({ routes }: Props) => {
  return (
    <section
      id="routes-section"
      className="flex flex-col gap-4 w-full m-2 p-4 lg:max-w-screen-xl lg:p-0 lg:m-0 my-4 lg:my-12"
    >
      <div className="max-w-xl mx-auto space-y-3 sm:text-center">
        <h2 className="text-primary font-semibold">Routes</h2>
        <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Where do you want to explore?
        </h3>
        <p>Choose your location below to get started. </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        {routes.map((route, index) => (
          <RouteCard key={index} route={route} size="large" />
        ))}
      </div>
    </section>
  );
};

export default RouteGrid;
