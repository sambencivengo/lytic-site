import { CoreTechnologies } from '~/app/components/homePage/coreTechnologies';
import { SasImageAndText } from '~/app/components/homePage/sasImageAndText';

export default function Page() {
  return (
    <main className="flex flex-col items-center gap-10">
      <div
        className="h-[532px] w-full object-cover"
        style={{
          backgroundImage: "url('/service-page-banner.png')",
        }}
      >
        <div className="w-full h-full flex justify-center items-center p-44">
          <p className="text-white text-3xl font-bold drop-shadow-md">Specializing in Microsoft's business intelligence platform, and in the high performance of the databases behind it. All to deliver a customized architecture that puts actionable data in your hands.</p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <p className="text-primary-green font-bold text-5xl py-10">CORE TECHNOLOGIES</p>

        <CoreTechnologies isOnHomePage={false} />
      </div>
      <div className="border-t-[1px] border-gray-600 w-10/12" />
      <div className="h-[432px]">
        <SasImageAndText backgroundWhite={true} />
      </div>
    </main>
  );
}
