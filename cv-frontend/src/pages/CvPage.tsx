import { WideLayout } from "../components/common/WideLayout";
import SkillSection from "../components/SkillSection";
import CvSection from "../components/CvSection";

const CvPage = () => {
  return (
    <WideLayout>
      <div className="grid grid-cols-3 flex-1">
        <div className="col-span-2">
          <SkillSection />
        </div>
        <div className="col-span-1">
          <CvSection />
        </div>
      </div>
    </WideLayout>
  );
};

export default CvPage;
