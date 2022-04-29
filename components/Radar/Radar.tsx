import { FC, useEffect, useRef, useState } from 'react';
import { Radar as RadarD3 } from '../../logic/radar';
import { EntryItem, QuadrantConfig, RingConfig } from '../../types/radar.types';

type Props = {
  quadrants: [QuadrantConfig, QuadrantConfig, QuadrantConfig, QuadrantConfig];
  rings: [RingConfig, RingConfig, RingConfig, RingConfig];
  entries: EntryItem[];
  setRadar: (radar: RadarD3) => void;
};

export const Radar: FC<Props> = ({ quadrants, rings, entries, setRadar }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current !== null) {
      const radar = new RadarD3({
        element: svgRef.current,
        width: 800,
        height: 800,
        colors: {
          background: '#F0EEEA',
          grid: '#CECFD2',
          inactive: '#ddd',
        },
        quadrants,
        rings,
        entries,
      });

      setRadar(radar)
    }
  }, []);

  return (
    <div>
      <svg ref={svgRef} />
    </div>
  );
};
