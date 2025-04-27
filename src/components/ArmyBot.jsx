import React from 'react';

export default function ArmyBot({ bot, releaseBot, dischargeBot }) {
  return (
    <div className="bg-white rounded-lg shadow-md m-2 p-4 w-60 flex flex-col items-center">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
      <div className="flex justify-between w-full text-gray-700 mb-4">
        <span>💖 {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>
      <button
        onClick={releaseBot}
        className="w-full py-2 mb-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded"
      >
        Release
      </button>
      <button
        onClick={dischargeBot}
        className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded"
      >
        Discharge
      </button>
    </div>
  );
}
