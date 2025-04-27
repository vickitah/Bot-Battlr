import React from 'react';

export default function Message({ text, type }) {
  const base = 'max-w-md mx-auto p-4 rounded mb-6 text-center';
  const color = type === 'error'
    ? 'bg-red-200 text-red-800'
    : 'bg-green-200 text-green-800';
  return <div className={`${base} ${color}`}>{text}</div>;
}
