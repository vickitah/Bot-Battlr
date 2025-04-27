import React from 'react';

export default function BotCard({ bot, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md m-2 p-4 w-60 flex flex-col items-center">
      <img
        src={bot.avatar_url}
        alt={bot.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{bot.name}</h3>
      <p className="italic text-gray-600 text-sm mb-4">{bot.catchphrase}</p>
      <div className="flex justify-between w-full text-gray-700 mb-4">
        <span>💖 {bot.health}</span>
        <span>⚔️ {bot.damage}</span>
        <span>🛡️ {bot.armor}</span>
      </div>
      <button
        onClick={onClick}
        disabled={bot.isEnlisted}
        className={`
          w-full py-2 rounded 
          ${bot.isEnlisted 
            ? 'bg-gray-300 text-gray-600 cursor-not-allowed' 
            : 'bg-blue-500 hover:bg-blue-600 text-white'}
        `}
      >
        {bot.isEnlisted ? 'Enlisted' : 'Enlist'}
      </button>
    </div>
  );
}
