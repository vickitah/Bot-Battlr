function BotSpecs({ bot, goBack, enlistBot }) {
    return (
      <div className="bot-specs">
        <img src={bot.avatar_url} alt={bot.name} className="specs-avatar" />
        <h2>{bot.name}</h2>
        <p><strong>Class:</strong> {bot.bot_class}</p>
        <p><strong>Health:</strong> {bot.health}</p>
        <p><strong>Damage:</strong> {bot.damage}</p>
        <p><strong>Armor:</strong> {bot.armor}</p>
        <p><em>"{bot.catchphrase}"</em></p>
  
        <div className="specs-buttons">
          <button onClick={goBack}>Back to Bots</button>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </div>
      </div>
    )
  }
  
  export default BotSpecs;
  