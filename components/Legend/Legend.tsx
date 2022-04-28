import React, { FC, useState } from "react";
import { RingConfig, QuadrantConfig, EntryItem } from "../../types/radar.types";
import styles from "./Legend.module.css";
import { Radar as RadarD3 } from "../../logic/radar";

type Props = {
  rings: RingConfig[];
  quadrants: QuadrantConfig[];
  entryItems: EntryItem[];
  radar: RadarD3 | null;
};

export const Legend: FC<Props> = ({ radar, rings, quadrants, entryItems }) => {
  const [openedAccordion, setOpenedAccordion] = useState("NONE");

  const handleMouseOver = (label: string) => {
    if (radar !== null) {
      radar.highlightDot(label);
    }
  };

  const handleMouseOut = () => {
    if (radar !== null) {
      radar.hideHighlightDot();
    }
  };

  return (
    <>
      <ul className={styles["quadrant-list"]}>
        {quadrants.map((quadrant) => (
          <li
            key={quadrant.index}
            className="quadrant-item"
            data-quadrant-index={quadrant.index}
          >
            <h2>{quadrant.name}</h2>

            {rings.map((ring) => (
              <div
                key={ring.index}
                className={styles["ring-wrapper"]}
                data-ring-index="0"
                style={{ borderColor: ring.color }}
              >
                <h3 className={styles["ring-label"]}>{ring.name}</h3>

                {entryItems
                  .sort((a, b) => a.label.localeCompare(b.label))
                  .filter(
                    (entry) =>
                      entry.quadrant === quadrant.index &&
                      entry.ring === ring.index
                  )
                  .map((entryItem, index) => (
                    <div key={index}>
                      <div
                        onClick={() =>
                          setOpenedAccordion(
                            openedAccordion === entryItem.label
                              ? "NONE"
                              : entryItem.label
                          )
                        }
                      >
                        <span
                          key={entryItem.label}
                          className={styles["entry-item"]}
                          style={
                            openedAccordion === entryItem.label
                              ? { fontWeight: 700 }
                              : {}
                          }
                          onMouseOver={() => handleMouseOver(entryItem.label)}
                          onMouseOut={handleMouseOut}
                          data-label={entryItem.label}
                        >
                          {entryItem.label}
                        </span>
                      </div>

                      {openedAccordion === entryItem.label && (
                        <div className={styles["collapsible-body"]}>
                          {!entryItem.description?.length ||
                            (entryItem.link && (
                              <>
                                <hr
                                  style={{
                                    marginLeft: 20,
                                    borderTop: "1px solid #a4a6a9",
                                  }}
                                />

                                <p className={styles["entry-description"]}>
                                  {entryItem.description}

                                  {entryItem.link && (
                                    <>
                                      <br />
                                      <a
                                        className={styles.link}
                                        href={entryItem.link}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        See more &gt;
                                      </a>
                                    </>
                                  )}
                                </p>
                              </>
                            ))}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </>
  );
};
