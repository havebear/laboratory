var sets = [
  // 定义圆
  { sets: ["AlphaMissense-LB-B"], label: "AlphaMissense-LB-B", size: 62 },
  { sets: ["AlphaMissense-LP-P"], label: "AlphaMissense-LP-P", size: 18 },
  { sets: ["CDGC-LB-B"], label: "CDGC-LB-B", size: 22 },
  { sets: ["CDGC-LP-P"], label: "CDGC-LP-P", size: 5 },
  { sets: ["Polygen-LB-B"], label: "Polygen-LB-B", size: 48 },
  { sets: ["Polygen-LP-P"], label: "Polygen-LP-P", size: 40 },
  { sets: ["SIFT-LB-B"], label: "SIFT-LB-B", size: 42 },
  { sets: ["SIFT-LP-P"], label: "SIFT-LP-P", size: 46 },
  // 定义关系
  { sets: ["AlphaMissense-LB-B", "CDGC-LB-B"], size: 18, },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LB-B"],
    size: 42,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LP-P"],
    size: 19,
  },
  {
    sets: ["AlphaMissense-LB-B", "SIFT-LB-B"],
    size: 38,
  },
  {
    sets: ["AlphaMissense-LB-B", "SIFT-LP-P"],
    size: 23,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LB-B"],
    size: 1,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LP-P"],
    size: 3,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LB-B"],
    size: 3,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LP-P"],
    size: 15,
  },
  {
    sets: ["AlphaMissense-LP-P", "SIFT-LB-B"],
    size: 2,
  },
  {
    sets: ["AlphaMissense-LP-P", "SIFT-LP-P"],
    size: 16,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LB-B"],
    size: 16,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LP-P"],
    size: 4,
  },
  {
    sets: ["CDGC-LB-B", "SIFT-LB-B"],
    size: 14,
  },
  {
    sets: ["CDGC-LB-B", "SIFT-LP-P"],
    size: 6,
  },
  {
    sets: ["CDGC-LP-P", "Polygen-LP-P"],
    size: 4,
  },
  {
    sets: ["CDGC-LP-P", "SIFT-LP-P"],
    size: 4,
  },
  {
    sets: ["Polygen-LB-B", "SIFT-LB-B"],
    size: 31,
  },
  {
    sets: ["Polygen-LB-B", "SIFT-LP-P"],
    size: 17,
  },
  {
    sets: ["Polygen-LP-P", "SIFT-LB-B"],
    size: 11,
  },
  {
    sets: ["Polygen-LP-P", "SIFT-LP-P"],
    size: 29,
  },
  {
    sets: ["AlphaMissense-LB-B", "CDGC-LB-B", "Polygen-LB-B"],
    size: 15,
  },
  {
    sets: ["AlphaMissense-LB-B", "CDGC-LB-B", "Polygen-LP-P"],
    size: 2,
  },
  {
    sets: ["AlphaMissense-LB-B", "CDGC-LB-B", "SIFT-LB-B"],
    size: 13,
  },
  {
    sets: ["AlphaMissense-LB-B", "CDGC-LB-B", "SIFT-LP-P"],
    size: 4,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LB-B", "SIFT-LB-B"],
    size: 28,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LB-B", "SIFT-LP-P"],
    size: 14,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LP-P", "SIFT-LB-B"],
    size: 10,
  },
  {
    sets: ["AlphaMissense-LB-B", "Polygen-LP-P", "SIFT-LP-P"],
    size: 9,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LB-B", "Polygen-LP-P"],
    size: 1,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LB-B", "SIFT-LP-P"],
    size: 1,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LP-P", "Polygen-LP-P"],
    size: 3,
  },
  {
    sets: ["AlphaMissense-LP-P", "CDGC-LP-P", "SIFT-LP-P"],
    size: 3,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LB-B", "SIFT-LB-B"],
    size: 1,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LB-B", "SIFT-LP-P"],
    size: 2,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LP-P", "SIFT-LB-B"],
    size: 1,
  },
  {
    sets: ["AlphaMissense-LP-P", "Polygen-LP-P", "SIFT-LP-P"],
    size: 14,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LB-B", "SIFT-LB-B"],
    size: 12,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LB-B", "SIFT-LP-P"],
    size: 4,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LP-P", "SIFT-LB-B"],
    size: 2,
  },
  {
    sets: ["CDGC-LB-B", "Polygen-LP-P", "SIFT-LP-P"],
    size: 2,
  },
  {
    sets: ["CDGC-LP-P", "Polygen-LP-P", "SIFT-LP-P"],
    size: 4,
  },
];
