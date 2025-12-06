import { FaLinkedin, FaTwitter } from "react-icons/fa";
import useScrollAnimation from "@hooks/useScrollAnimation";
import Card from "@components/ui/Card";
import SectionHeader from "@components/ui/SectionHeader";
import { Section, Container } from "@components/ui/UtilityComponents";
import { TEAM_MEMBERS } from "@/constants";

const Team = () => {
  const [gridRef, gridVisible] = useScrollAnimation();

  return (
    <Section background="white">
      <Container>
        <SectionHeader
          title="Meet Our Team"
          subtitle="The brilliant minds behind NovaStack. Our diverse team brings together decades of experience in technology, design, and business strategy."
        />

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className={`scroll-hidden scroll-delay-${index + 1} ${gridVisible ? "scroll-visible" : ""}`}
            >
              <Card hover className="text-center">
                {/* Avatar */}
                <div className="mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="from-primary-100 to-secondary-100 h-32 w-32 rounded-full bg-linear-to-br p-1"
                    loading="lazy"
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
                    aria-label={`${member.name} on LinkedIn`}
                    className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on Twitter`}
                    className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                </div>

                {/* Decorative element */}
                <div className="from-primary-100 absolute -right-2 -bottom-2 h-24 w-24 rounded-full bg-linear-to-br to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Team;
