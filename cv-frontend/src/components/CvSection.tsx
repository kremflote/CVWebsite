import type { FC } from "react";

const CvSection: FC = () => {
  return (
    <section className="max-w-6xl mx-auto md:py-4 xl:py-27 px-4">
      <iframe
        src="http://localhost:5110/api/Cv"
        width="600"
        height="800"
        title="Example Site"
      ></iframe>
    </section>
  );
};

export default CvSection;
