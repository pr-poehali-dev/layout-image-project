
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const DonationForm = () => {
  const [donationType, setDonationType] = useState<'monthly' | 'once'>('monthly');
  
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-100">
      <h2 className="text-3xl font-normal text-center mb-8">Финансовая помощь</h2>
      
      <form className="max-w-xl mx-auto space-y-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-gray-700">ФИО отправителя</label>
          <Input 
            id="name" 
            type="text" 
            className="w-full rounded-md" 
            placeholder="Иванов Иван Иванович"
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button
            type="button"
            variant={donationType === 'monthly' ? 'default' : 'outline'}
            className={`${donationType === 'monthly' ? 'bg-blue-200 hover:bg-blue-300' : 'bg-white'}`}
            onClick={() => setDonationType('monthly')}
          >
            Ежемесячно
          </Button>
          
          <Button
            type="button"
            variant={donationType === 'once' ? 'default' : 'outline'}
            className={`${donationType === 'once' ? 'bg-blue-200 hover:bg-blue-300' : 'bg-white'}`}
            onClick={() => setDonationType('once')}
          >
            Единоразово
          </Button>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="amount" className="block text-gray-700">Сумма</label>
          <Input 
            id="amount" 
            type="text" 
            className="w-full rounded-md" 
            placeholder="1000"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-gray-700">E-mail</label>
          <Input 
            id="email" 
            type="email" 
            className="w-full rounded-md" 
            placeholder="example@mail.ru"
          />
        </div>
        
        <div className="flex justify-center mt-6">
          <Button 
            type="submit" 
            className="bg-red-400 hover:bg-red-500 text-white rounded-full px-8 py-2"
          >
            Пожертвовать
          </Button>
        </div>
      </form>
    </section>
  );
};

export default DonationForm;
