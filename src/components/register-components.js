import DeluxeHero from './DeluxeHero/DeluxeHero';
import Hero from './Hero/Hero';
import AlchemyDifference from './AlchemyDifference/AlchemyDifference';
import QuotesCarousel from './QuotesCarousel/QuotesCarousel';
import IllustrativeExplainer from './IllustrativeExplainer/IllustrativeExplainer';
import StatsDisplay from './QuadStats/StatsDisplay';
import FramedQuotesCarousel from './QuotesCarousel/FramedQuotesCarousel';
import ImageContent from './ImageContent/ImageContent';
import Accordion from './Accordion/Accordion';
import DeluxeAccordion from './Accordion/DeluxeAccordion';
import CenteredContent from './CenteredContent/CenteredContent';
import Schedules from './Schedules/Schedules';

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
}
