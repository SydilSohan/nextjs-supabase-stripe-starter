import Pagination from '@/components/global/ReviewPagination';
import { createClient } from '@/utils/supabase/client';
export default async function Testimonials() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from('reviews')
    .select(
      `
    *,
    routes (
      name
    )
  `
    )
    .eq('show_on_home', true)
    .limit(4)
    .order('created_at', { ascending: false });

  return (
    <section
      id="testimonials-section"
      className="px-4 py-12 lg:px-0 lg:py-14  w-full  bg-gray-50 border-y-[1px] border-gray-200 "
    >
      <div className="relative z-10 max-w-screen-xl flex flex-col gap-4 justify-between  mx-auto">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
            Hear from our customers
          </h3>
          <p className="mt-3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <Pagination defaultReviews={data!} show_on_home />
      </div>
    </section>
  );
}
