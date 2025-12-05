import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <HiMail className="h-6 w-6" />,
      title: "Email",
      content: "hello@novastack.com",
      link: "mailto:hello@novastack.com",
    },
    {
      icon: <HiPhone className="h-6 w-6" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <HiLocationMarker className="h-6 w-6" />,
      title: "Location",
      content: "San Francisco, CA",
      link: null,
    },
    {
      icon: <HiClock className="h-6 w-6" />,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM PST",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin className="h-5 w-5" />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <FaTwitter className="h-5 w-5" />,
      url: "https://twitter.com",
      label: "Twitter",
    },
    {
      icon: <FaGithub className="h-5 w-5" />,
      url: "https://github.com",
      label: "GitHub",
    },
  ];

  return (
    <div className="animate-fade-in-up animation-delay-200 space-y-8">
      <div>
        <h3 className="mb-6 text-2xl font-bold text-gray-900">Get In Touch</h3>
        <p className="mb-8 leading-relaxed text-gray-600">
          Have a question or want to work together? We'd love to hear from you.
          Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="bg-primary-100 text-primary-600 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg">
              {detail.icon}
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
        ))}
      </div>

      {/* Social Links */}
      <div>
        <h4 className="mb-4 font-semibold text-gray-900">Connect With Us</h4>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:bg-primary-600 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-600 transition-colors hover:text-white"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
