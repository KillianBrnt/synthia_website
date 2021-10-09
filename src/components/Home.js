import * as React from "react";
import TeamMembers from "./modules/views/TeamMembers";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import ProductFeatures from "./modules/views/ProductFeatures";
import Newsletter from "./modules/views/Newsletter";
import TopAppBar from "./modules/views/TopAppBar";
import withRoot from "./modules/withRoot";
import TimelineLayout from "./modules/views/TimelineLayout";

function Index() {
  return (
    <React.Fragment>
      <TopAppBar />
      <ProductHero />
      <ProductFeatures />
      <TeamMembers />
      <TimelineLayout />
      <Newsletter />
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Index);
