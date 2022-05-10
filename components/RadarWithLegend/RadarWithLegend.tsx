import React, { FC, useEffect, useState } from "react";
import styles from "./RadarWithLegend.module.css";
import { Legend } from "../Legend/Legend";
import { Radar } from "../Radar/Radar";
import { EntryItem, QuadrantConfig, RingConfig } from "../../types/radar.types";
import { Radar as RadarD3 } from "../../logic/radar";
import { useRouter } from "next/router";

type Props = {
  rings: [RingConfig, RingConfig, RingConfig, RingConfig];
  quadrants: [QuadrantConfig, QuadrantConfig, QuadrantConfig, QuadrantConfig];
  entryItems: EntryItem[];
};
export const RadarWithLegend: FC<Props> = ({
  rings,
  quadrants,
  entryItems,
}) => {
  const [radar, setRadar] = useState<RadarD3 | null>(null);
  const { asPath } = useRouter();

  useEffect(() => {
    if (radar !== null) {
      radar.render();
    }
  });

  useEffect(() => {
    if (radar !== null) {
      radar.remove();
    }
  }, [asPath]);

  return (
    <>
      <div className={styles.legend}>
        <Legend
          rings={rings}
          quadrants={quadrants}
          entryItems={entryItems}
          radar={radar}
        />
      </div>
      <div className={styles.radar}>
        <Radar
          rings={rings}
          quadrants={quadrants}
          entries={entryItems}
          setRadar={setRadar}
        />
      </div>
    </>
  );
};
