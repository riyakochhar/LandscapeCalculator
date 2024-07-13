import { BsXDiamondFill } from "react-icons/bs";
import { LuText } from "react-icons/lu";
import { ReactComponent as Seat } from "../../../assets/seat.svg";
import { ReactComponent as Bar } from "../../../assets/bar.svg";
import { ReactComponent as Fridge } from "../../../assets/fridge.svg";
import { ReactComponent as Grass } from "../../../assets/grass.svg";
import { ReactComponent as Grill } from "../../../assets/grill.svg";
import { ReactComponent as Lights } from "../../../assets/lighting.svg";
import { ReactComponent as Oven } from "../../../assets/oven.svg";
import { ReactComponent as Pool } from "../../../assets/pool.svg";
import { ReactComponent as Tree } from "../../../assets/tree.svg";

export const costs = {
  Economic: {
    tilesPerUnitCost: 200,
    poolPerUnitCost: 3500,
    builtInSeatingPerUnitCost: 400,
    barPerUnitCost: 400,
    pizzaOvenCost: 6000,
    builtInGrillCost: 5000,
    fridgeCost: 1500,
    pergolaPerUnitCost: 500,
    treesPerUnitCost: 130,
    lightingPerUnitCost: 30,
    artificialGrassPerUnitCost: 50,
  },
  Standard: {
    tilesPerUnitCost: 300,
    poolPerUnitCost: 5250,
    builtInSeatingPerUnitCost: 600,
    barPerUnitCost: 600,
    pizzaOvenCost: 9000,
    builtInGrillCost: 7500,
    fridgeCost: 2250,
    pergolaPerUnitCost: 750,
    treesPerUnitCost: 195,
    lightingPerUnitCost: 45,
    artificialGrassPerUnitCost: 75,
  },
  HighEnd: {
    tilesPerUnitCost: 450,
    poolPerUnitCost: 7875,
    builtInSeatingPerUnitCost: 900,
    barPerUnitCost: 900,
    pizzaOvenCost: 13500,
    builtInGrillCost: 11250,
    fridgeCost: 3375,
    pergolaPerUnitCost: 1125,
    treesPerUnitCost: 293,
    lightingPerUnitCost: 68,
    artificialGrassPerUnitCost: 113,
  },
  SuperHighEnd: {
    tilesPerUnitCost: 675,
    poolPerUnitCost: 11813,
    builtInSeatingPerUnitCost: 1350,
    barPerUnitCost: 1350,
    pizzaOvenCost: 20250,
    builtInGrillCost: 16875,
    fridgeCost: 5063,
    pergolaPerUnitCost: 1687.5,
    treesPerUnitCost: 439,
    lightingPerUnitCost: 101,
    artificialGrassPerUnitCost: 169,
  },
};

export const budgetOptions = [
  { value: "Economic", label: "Economic" },
  { value: "Standard", label: "Standard" },
  { value: "HighEnd", label: "High End" },
  { value: "SuperHighEnd", label: "Super High End" },
];

export const areaPercentages = {
  tiles: 0.3,
  pool: 0.1,
  builtInSeating: 0.15,
  bar: 0.1,
  pizzaOven: 1,
  builtInGrill: 1,
  fridge: 1,
  pergola: 0.15,
  trees: 0.25,
  lighting: 1,
  artificialGrass: 1,
};

export const featuresList = [
  {
    label: "Please select the flooring features you would like to include:",
    value: "flooring",
    items: [{ label: "Tiles", value: "tiles", icon: <BsXDiamondFill /> }],
  },
  {
    label: "Please select the indoor amenities you would like to include:",
    value: "indoorAmenities",
    items: [
      { label: "Built-in Seating", value: "builtInSeating", icon: <Seat /> },
      { label: "Built-in Grill", value: "builtInGrill", icon: <Grill /> },
      { label: "Bar", value: "bar", icon: <Bar /> },
      { label: "Pizza Oven", value: "pizzaOven", icon: <Oven /> },
      { label: "Fridge", value: "fridge", icon: <Fridge /> },
    ],
  },
  {
    label: "Please select the water features you would like to include:",
    value: "waterFeatures",
    items: [{ label: "Pool", value: "pool", icon: <Pool /> }],
  },
  {
    label:
      "Please select the planting and turf features you would like to include:",
    value: "plantingTurf",
    items: [
      { label: "Trees", value: "trees", icon: <Tree /> },
      { label: "Artificial Grass", value: "artificialGrass", icon: <Grass /> },
    ],
  },
  {
    label: "Please select the structures you would like to include:",
    value: "structures",
    items: [{ label: "Pergola", value: "pergola", icon: <LuText /> }],
  },
  {
    label: "Please select the illumination features you would like to include:",
    value: "illumination",
    items: [{ label: "Lighting", value: "lighting", icon: <Lights /> }],
  },
];
