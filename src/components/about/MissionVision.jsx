import useScrollAnimation from "@hooks/useScrollAnimation";
import { HiLightningBolt, HiEye } from "react-icons/hi";
import Card from "@components/ui/Card";
import { Section, Container } from "@components/ui/UtilityComponents";

const MissionVision = () => {
  const [missionRef, missionVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();

  return (
    <Section background="gray">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div
            ref={missionRef}
            className={`scroll-hidden ${missionVisible ? "scroll-visible" : ""}`}
          >
            <Card>
              <Card.Icon gradient>
                <HiLightningBolt className="h-8 w-8" />
              </Card.Icon>
              <Card.Title>Our Mission</Card.Title>
              <Card.Description>
                To empower businesses with cutting-edge technology solutions
                that drive innovation, efficiency, and growth. We're committed
                to delivering exceptional value through expertise, integrity,
                and a relentless focus on client success.
              </Card.Description>

              {/* Decorative gradient */}
              <div className="from-primary-200 absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-linear-to-br to-transparent opacity-30"></div>
            </Card>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className={`scroll-hidden scroll-delay-2 ${visionVisible ? "scroll-visible" : ""}`}
          >
            <Card>
              <Card.Icon
                gradient
                className="from-secondary-100 to-secondary-200 text-secondary-600"
              >
                <HiEye className="h-8 w-8" />
              </Card.Icon>
              <Card.Title>Our Vision</Card.Title>
              <Card.Description>
                To be the leading provider of transformative technology
                solutions, recognized globally for innovation, reliability, and
                exceptional client partnerships. We envision a future where
                every business, regardless of size, can harness the power of
                advanced technology.
              </Card.Description>

              {/* Decorative gradient */}
              <div className="from-secondary-200 absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-linear-to-br to-transparent opacity-30"></div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MissionVision;
