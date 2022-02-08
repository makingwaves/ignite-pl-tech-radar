import { EntryItem, QuadrantConfig, RingConfig } from "./radar-config";

export interface LegendConfig {
  data: EntryItem[];
  quadrants: QuadrantConfig[];
  rings: RingConfig[];
  rootElement: HTMLElement;
}

export class Legend {
  constructor(private config: LegendConfig) {}

  render() {
    const el = this.config.rootElement;

    const quadrantList = document.createElement("ul");
    quadrantList.classList.add("quadrant-list");

    this.config.quadrants.forEach((quadrant, quadrantIndex) => {
      const quadrantItem = document.createElement("li");
      const quadrantLabel = document.createElement("h2");
      quadrantLabel.innerText = quadrant.name;

      quadrantItem.classList.add("quadrant-item");
      quadrantItem.dataset.quadrantIndex = `${quadrant.index}`;
      quadrantItem.append(quadrantLabel);

      this.config.rings.forEach((ring, ringIndex) => {
        const ringWrapper = document.createElement("div");
        const ringItemLabel = document.createElement("h3");

        ringWrapper.classList.add("ring-wrapper");
        ringWrapper.dataset.ringIndex = `${ring.index}`;
        ringWrapper.style.borderColor = ring.color;

        ringWrapper.append(ringItemLabel);
        ringItemLabel.classList.add("ring-label");
        ringItemLabel.innerText = ring.name;
        // ringItemLabel.style.color = ring.color;

        quadrantItem.append(ringWrapper);
      });

      quadrantList.append(quadrantItem);
    });

    el.append(quadrantList);

    this.config.data.forEach((entryItem) => {
      const { ring, quadrant, label, link } = entryItem;

      const relatedRingElement = document
        .querySelector(`[data-quadrant-index="${quadrant}"]`)
        .querySelector(`[data-ring-index="${ring}"]`);

      const item = document.createElement("span");
      item.classList.add("entry-item");
      item.innerText = label;
      item.dataset.label = label;

      relatedRingElement.append(item);
    });
  }

  highlightByLabel(label: string) {
    const el = document.querySelector(`[data-label="${label}"]`);

    el.classList.add("item-highlight");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  removeHighlightByLabel(label: string) {
    document
      .querySelector(`[data-label="${label}"]`)
      .classList.remove("item-highlight");
  }

  onMouseOver(cb: (entry: EntryItem) => void) {
    document.querySelectorAll(".entry-item").forEach((el: HTMLSpanElement) =>
      el.addEventListener("mouseover", (e) => {
        cb(this.config.data.find((item) => item.label === el.dataset.label));
      })
    );
  }

  onMouseOut(cb: () => void) {}
}
