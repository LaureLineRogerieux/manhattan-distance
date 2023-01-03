export type Point = {
  x: number;
  y: number;
};

export const computeDistanceBetween2Points = (a: Point, b: Point): number => {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
};
