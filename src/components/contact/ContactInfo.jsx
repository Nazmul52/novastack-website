import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import useScrollAnimation from "@hooks/useScrollAnimation";
import { CONTACT_DETAILS, SOCIAL_LINKS } from "@/constants";

const ContactInfo = () => {
  const [infoRef, infoVisible] = useScrollAnimation();

  // Icon mapping
  const iconMap = {
    mail: HiMail,
    phone: HiPhone,
    location: HiLocationMarker,
    clock: HiClock,
  };

  const socialIconMap = {
    linkedin: FaLinkedin,
    twitter: FaTwitter,
    github: FaGithub,
  };

  return (
    <div
      ref={infoRef}
      className={`scroll-hidden space-y-8 ${infoVisible ? "scroll-visible" : ""}`}
    >
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Get In Touch</h3>
        <p className="mb-8 leading-relaxed text-gray-600">
          Have a question or want to work together? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {CONTACT_DETAILS.map((detail, index) => {
          const IconComponent = iconMap[detail.icon];
          return (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-primary-100 text-primary-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
                <IconComponent className="h-6 w-6" />
              </div>
              <div>
                <h4 className="mb-1 font-semibold text-gray-900">
                  {detail.title}
                </h4>
                {detail.link ? (
                  <a
                    href={detail.link}
                    className="hover:text-primary-600 text-gray-600 transition-colors"
                  >
                    {detail.content}
                  </a>
                ) : (
                  <p className="text-gray-600">{detail.content}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="mb-4 font-semibold text-gray-900">Connect With Us</h4>
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((social, index) => {
            const SocialIcon = socialIconMap[social.icon];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${social.name}`}
                className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
              >
                <SocialIcon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
