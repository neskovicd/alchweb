import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Alchemy Studio · Game Development Studio"
        description="We're game development company responsible for creating top-notch games for everyone."
        ogImage={`${getBaseUrl()}/assets/images/alchemystudiologo.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
