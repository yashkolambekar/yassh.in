'use client';

import { useEffect, useState } from 'react';

export function ViewCounter() {
  const [views, setViews] = useState<number>(0);

  useEffect(() => {
    fetch('/api/views')
      .then(res => res.json())
      .then(data => setViews(data.views));
  }, []);

  return (
    <div className="fixed bottom-4 right-4 text-sm opacity-50">
      {views} view{views !== 1 ? 's' : ''}
    </div>
  );
}