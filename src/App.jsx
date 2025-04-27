import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import Loader from './components/Loader';
import Message from './components/Message';

export default function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        setBots(data.map(b => ({ ...b, isEnlisted: false })));
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load bots');
        setLoading(false);
      });
  }, []);

  const enlistBot = bot => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
      setBots(bots.map(b => b.id === bot.id ? { ...b, isEnlisted: true } : b));
    }
  };

  const releaseBot = id => {
    setArmy(army.filter(b => b.id !== id));
    setBots(bots.map(b => b.id === id ? { ...b, isEnlisted: false } : b));
  };

  const dischargeBot = id => {
    fetch(`http://localhost:8001/bots/${id}`, { method: 'DELETE' })
      .then(() => {
        releaseBot(id);
        setBots(bots.filter(b => b.id !== id));
      });
  };

  if (loading) return <Loader />;
  if (error)   return <Message text={error} type="error" />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">🤖 Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <YourBotArmy
        army={army}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}
