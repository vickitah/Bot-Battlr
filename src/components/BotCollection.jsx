import React from 'react';
import BotCard from './BotCard';

export default function BotCollection({ bots, enlistBot }) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">Available Bots</h2>
      <div className="flex flex-wrap justify-center">
        {bots.map(bot => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => enlistBot(bot)}
          />
        ))}
      </div>
    </section>
  );
}
