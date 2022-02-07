import {data} from "./data";


radar_visualization({
    svg_id: "radar",
    width: 1450,
    height: 1000,
    colors: {
        background: "#F0EEEA",
        grid: "#CECFD2",
        inactive: "#ddd"
    },
    quadrants: [
        {name: "Languages & Frameworks"},
        {name: "TODO"},
        {name: "TODO"},
        {name: "TODO"},
    ],
    rings: [
        {name: "ADOPT", color: "#EB4646", textColor: '#DBD1C7'},
        {name: "TRIAL", color: "#CAE0DC", textColor: '#001932'},
        {name: "ASSESS", color: "#DBD1C7", textColor: '#001932'},
        {name: "HOLD", color: "#001932", textColor: '#DBD1C7'}
    ],
    print_layout: true,
    entries: data
});