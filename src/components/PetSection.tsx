
import { Button } from './ui/button';

const PetSection = () => {
  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      <h2 className="text-3xl font-normal text-center mb-8">Ищите питомца?</h2>
      
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/3">
          <img 
            src="/placeholder.svg" 
            alt="Кошка" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        
        <div className="w-full md:w-2/3 space-y-4">
          <p className="text-gray-700">
            Если вы хотите взять собаку или кошку, не ищите питомник, в котором можно купить щенка или котенка – просто свяжитесь с нами, и вы обязательно найдете себе самого лучшего друга. Во всем мире это уже стало доброй традицией – человек, который решил завести питомца, обращается в приют чтобы подарить заботу и любовь тому, кто уже появился на свет, но ему почему-то досталась нелегкая судьба.
          </p>
          <p className="text-gray-700">
            Мы поможем вам выбрать животное с учетом ваших пожеланий и предпочтений, с радостью познакомим со всеми нашими собаками и кошками. Все наши питомцы привиты и стерилизованы
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="relative">
          <img 
            src="/placeholder.svg" 
            alt="Котенок" 
            className="w-full h-auto rounded-lg"
          />
          <Button 
            variant="outline" 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 border-gray-300 rounded-full px-6"
          >
            Подробнее
          </Button>
        </div>
        
        <div className="relative">
          <img 
            src="/placeholder.svg" 
            alt="Собака" 
            className="w-full h-auto rounded-lg"
          />
          <Button 
            variant="outline" 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white hover:bg-gray-100 border-gray-300 rounded-full px-6"
          >
            Подробнее
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PetSection;
