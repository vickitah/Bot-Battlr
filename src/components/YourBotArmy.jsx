import React from 'react';
import ArmyBot from './ArmyBot';

export default function YourBotArmy({ army, releaseBot, dischargeBot }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Your Bot Army</h2>
      {army.length === 0 ? (
        <p className="text-center text-gray-500">No bots enlisted yet.</p>
      ) : (
        <div className="flex flex-wrap justify-center">
          {army.map(bot => (
            <ArmyBot
              key={bot.id}
              bot={bot}
              releaseBot={() => releaseBot(bot.id)}
              dischargeBot={() => dischargeBot(bot.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
