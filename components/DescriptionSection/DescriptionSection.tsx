import styles from "./DescriptionSection.module.css";
import { FC } from "react";
import { PortableText } from "@portabletext/react";

type Props = {
  rightColumn?: any;
  description: string;
  rings: any[];
};

export const DescriptionSection: FC<Props> = ({
  rightColumn,
  description,
  rings,
}) => (
  <div className={styles.wrapper}>
    <div className={styles.leftColumn}>
      <h3>What is the Tech Radar?</h3>
      <p>{description}</p>
      <ul>
        {rings.map(
          (ring, index) =>
            ring?.description &&
            !!ring.description.length && (
              <li key={index}>
                <strong>{ring.name}</strong> - {ring.description}
              </li>
            )
        )}
      </ul>
    </div>
    <div className={styles.rightColumn}>
      <PortableText value={rightColumn || []} />
    </div>
  </div>
);
