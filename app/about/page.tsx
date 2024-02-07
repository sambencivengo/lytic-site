'use server';
import { OurMission } from '~/app/components/about/ourMission';
import { OurStory } from '~/app/components/about/ourStory';
import { SomeOfOurClients } from '~/app/components/about/someOfOurClients';
import { PageBlurb } from '~/app/components/pageBlurb';
import { PageUpperImageContainer } from '~/app/components/pageUpperImageContainer';

export default async function Page() {
  const blurbString = 'The Lytic Group are architects of data \n and business intelligence solutions. \n Planning, surfacing, optimizing, & monitoring \n your most valuable data.';
  return (
    <main className="mb-14">
      <PageUpperImageContainer imageSource="/aboutus-page-banner.png">
        <PageBlurb
          className="drop-shadow-lg text-4xl text-left max-w-3xl"
          blurb={blurbString}
        />
      </PageUpperImageContainer>
      <div className="flex justify-center">
        <OurStory />
      </div>
      <div className="flex justify-center mb-20">
        <p className="text-xl font-bold">“We lead with transparency, expertise, and clear communication”</p>
      </div>
      <OurMission />
      <SomeOfOurClients />
    </main>
  );
}
