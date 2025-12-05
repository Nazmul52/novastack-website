import { FaLinkedin, FaTwitter } from "react-icons/fa";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const Team = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();

  const teamMembers = [
    {
      name: "Alex Chen",
      position: "CEO & Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah2",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Michael Kumar",
      position: "Lead Engineer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael2",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Emily Davis",
      position: "Head of Design",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily2",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "David Park",
      position: "VP of Engineering",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    {
      name: "Lisa Wong",
      position: "Product Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`scroll-hidden mb-16 text-center ${headerVisible ? "scroll-visible" : ""}`}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            The brilliant minds behind NovaStack. Our diverse team brings
            together decades of experience in technology, design, and business
            strategy.
          </p>
        </div>

        {/* Team grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`scroll-hidden scroll-delay-${index + 1} ${gridVisible ? "scroll-visible" : ""}`}
            >
              <div className="group relative overflow-hidden rounded-2xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* Avatar */}
                <div className="mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="from-primary-100 to-secondary-100 h-32 w-32 rounded-full bg-linear-to-br p-1"
                  />
                </div>

                {/* Name and Position */}
                <h3 className="mb-1 text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{member.position}</p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                </div>

                {/* Decorative element */}
                <div className="from-primary-100 absolute -right-2 -bottom-2 h-24 w-24 rounded-full bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
