import { HiStar } from "react-icons/hi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, InnovateCo",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 5,
      text: "NovaStack transformed our entire infrastructure. Their expertise in cloud solutions and AI integration helped us reduce costs by 40% while improving performance. Truly exceptional service!",
    },
    {
      name: "Michael Chen",
      position: "CEO, TechVentures",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 5,
      text: "Working with NovaStack was a game-changer. They delivered our custom enterprise solution on time and exceeded all expectations. The team's professionalism is unmatched.",
    },
    {
      name: "Emily Rodriguez",
      position: "Director of IT, GlobalCorp",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      rating: 5,
      text: "The security solutions implemented by NovaStack gave us peace of mind. Their proactive approach and attention to detail set them apart from other vendors we've worked with.",
    },
  ];

  return (
    <section className="from-primary-50 to-secondary-50 bg-linear-to-br via-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Here's what our clients have to say
            about working with us.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Rating stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <HiStar key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="mb-6 leading-relaxed text-gray-700">
                "{testimonial.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="bg-primary-100 h-14 w-14 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
