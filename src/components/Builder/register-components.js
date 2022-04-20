import DeluxeHero from '../DeluxeHero/DeluxeHero.jsx';
import Hero from '../Hero/Hero.jsx';
import AlchemyDifference from '../AlchemyDifference/AlchemyDifference.jsx';
import QuotesCarousel from '../QuotesCarousel/QuotesCarousel.jsx';
import MediaCarousel from '../QuotesCarousel/MediaCarousel.jsx';
import IllustrativeExplainer from '../IllustrativeExplainer/IllustrativeExplainer.jsx';
import StatsDisplay from '../QuadStats/StatsDisplay.jsx';
import FramedQuotesCarousel from '../QuotesCarousel/FramedQuotesCarousel.jsx';
import ImageContent from '../ImageContent/ImageContent.jsx';
import Accordion from '../Accordion/Accordion.jsx';
import DeluxeAccordion from '../Accordion/DeluxeAccordion.jsx';
import CenteredContent from '../CenteredContent/CenteredContent.jsx';
import Schedules from '../Schedules/Schedules.jsx';
import CohortDates from '../CohortDates/CohortDates.jsx';
import Steps from '../Steps/Steps.jsx';
import TuitionFinancing from '../TuitionFinancing/TuitionFinancing.jsx';
import Scholarships from '../Scholarships/Scholarships.jsx';
import Endorsements from '../Endorsements/Endorsements.jsx';
import TabbedOutcomes from '../QuadStats/TabbedOutcomes.jsx';
import Employers from '../Employers/Employers.jsx';
import SmallHero from '../SmallHero/SmallHero.jsx';
import FAQ from '../FAQ/FAQCategories';


export default function registerComponents(Builder) {

  function register(Component) {
    Builder.registerComponent(Component, Component.config || {});
  }
  console.log('registering builder components');
  register(DeluxeHero);
  register(AlchemyDifference);
  register(QuotesCarousel);
  register(MediaCarousel);
  register(IllustrativeExplainer);
  register(StatsDisplay);
  register(FramedQuotesCarousel);
  register(ImageContent);
  register(Hero);
  register(Accordion);
  register(CenteredContent);
  register(Schedules);
  register(DeluxeAccordion);
  register(CohortDates);
  register(Steps);
  register(TuitionFinancing);
  register(Scholarships);
  register(Endorsements);
  register(TabbedOutcomes);
  register(Employers);
  register(SmallHero);
  register(FAQ);
}
