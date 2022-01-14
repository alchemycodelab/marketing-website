import DeluxeHero from './DeluxeHero/DeluxeHero.jsx';
import Hero from './Hero/Hero.jsx';
import AlchemyDifference from './AlchemyDifference/AlchemyDifference.jsx';
import QuotesCarousel from './QuotesCarousel/QuotesCarousel.jsx';
import IllustrativeExplainer from './IllustrativeExplainer/IllustrativeExplainer.jsx';
import StatsDisplay from './QuadStats/StatsDisplay.jsx';
import FramedQuotesCarousel from './QuotesCarousel/FramedQuotesCarousel.jsx';
import ImageContent from './ImageContent/ImageContent.jsx';
import Accordion from './Accordion/Accordion.jsx';
import DeluxeAccordion from './Accordion/DeluxeAccordion.jsx';
import CenteredContent from './CenteredContent/CenteredContent.jsx';
import Schedules from './Schedules/Schedules.jsx';
import CohortDates from './CohortDates/CohortDates.jsx';

export default function registerComponents(Builder) {

  function register(Component) {
    Builder.registerComponent(Component, Component.config || {});
  }

  register(DeluxeHero);
  register(AlchemyDifference);
  register(QuotesCarousel);
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
}
