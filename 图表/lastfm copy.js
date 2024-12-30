var sets = [
  // 定义圆
  { sets: ["AlphaMissense-LB-B"], label: "AlphaMissense-LB-B", size: 22 },
  { sets: ["AlphaMissense-LP-P"], label: "AlphaMissense-LP-P", size: 5 },
  { sets: ["CDGC-LB-B"], label: "CDGC-LB-B", size: 22 },
  { sets: ["CDGC-LP-P"], label: "CDGC-LP-P", size: 5 },
  { sets: ["Polygen-LB-B"], label: "Polygen-LB-B", size: 21 },
  { sets: ["Polygen-LP-P"], label: "Polygen-LP-P", size: 5 },
  { sets: ["SIFT-LB-B"], label: "SIFT-LB-B", size: 20 },
  { sets: ["SIFT-LP-P"], label: "SIFT-LP-P", size: 5 },
  // 定义关系
  {
    sets: ["AlphaMissense-LB-B", "CDGC-LB-B"],
    size: 22,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LB-B"],
    size: 20,
  },
  {
    sets: ["AlphaMissense-LB-B", "SIFT-LB-B"],
    size: 19,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LP-P"],
    size: 5,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LP-P"],
    size: 5,
  },
  {
    sets: ["AlphaMissense-LP-P", "SIFT-LP-P"],
    size: 5,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LB-B"],
    size: 20,
  },
  {
    sets: ["CDGC-LB-B", "SIFT-LB-B"],
    size: 19,
  },
  {
    sets: ["CDGC-LP-P", "Polygen-LP-P"],
    size: 5,
  },
  {
    sets: ["CDGC-LP-P", "SIFT-LP-P"],
    size: 5,
  },
  {
    sets: ["Polygen-LB-B", "SIFT-LB-B"],
    size: 18,
  },
  {
    sets: ["Polygen-LP-P", "SIFT-LP-P"],
    size: 5,
  },
];
