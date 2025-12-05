import useScrollAnimation from "@/hooks/useScrollAnimation";
import { HiLightningBolt, HiEye } from "react-icons/hi";

const MissionVision = () => {
  const [missionRef, missionVisible] = useScrollAnimation();
  const [visionRef, visionVisible] = useScrollAnimation();

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Mission Card */}
          <div
            ref={missionRef}
            className={`scroll-hidden relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl ${missionVisible ? "scroll-visible" : ""}`}
          >
            <div className="from-primary-100 to-primary-200 text-primary-600 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br">
              <HiLightningBolt className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="leading-relaxed text-gray-600">
              To empower businesses with cutting-edge technology solutions that
              drive innovation, efficiency, and growth. We're committed to
              delivering exceptional value through expertise, integrity, and a
              relentless focus on client success.
            </p>
            {/* Decorative gradient */}
            <div className="from-primary-200 absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-linear-to-br to-transparent opacity-30"></div>
          </div>

          {/* Vision Card */}
          <div
            ref={visionRef}
            className={`scroll-hidden scroll-delay-2 relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl ${visionVisible ? "scroll-visible" : ""}`}
          >
            <div className="from-secondary-100 to-secondary-200 text-secondary-600 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-linear-to-br">
              <HiEye className="h-8 w-8" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Our Vision
            </h3>
            <p className="leading-relaxed text-gray-600">
              To be the leading provider of transformative technology solutions,
              recognized globally for innovation, reliability, and exceptional
              client partnerships. We envision a future where every business,
              regardless of size, can harness the power of advanced technology.
            </p>
            {/* Decorative gradient */}
            <div className="from-secondary-200 absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-linear-to-br to-transparent opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
