import { WideLayout } from "../components/common/WideLayout";

const PortfolioPage = () => {
  return (
    <WideLayout>
      <>
        <h1 className="text-center text-wood text-3xl font-semibold pt-8 px-4">
          Portfolio
        </h1>
        <hr className="border-wood mt-4 mb-6" />

        <article className="bg-red w-[250px] h-[180px]">
          <img src="" alt="" />
        </article>
      </>
    </WideLayout>
  );
};

export default PortfolioPage;
