// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { computeDistanceBetween2Points, Point } from ".";

expect.extend(matchers);

test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 0,
    y: 0,
  };
  const b: Point = {
    x: 0,
    y: 0,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(0);
});

test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 1,
    y: 0,
  };
  const b: Point = {
    x: 0,
    y: 0,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(1);
});

test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 1,
    y: 0,
  };
  const b: Point = {
    x: 1,
    y: 0,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(0);
});

test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 1,
    y: 0,
  };
  const b: Point = {
    x: 2,
    y: 0,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(1);
});

test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 0,
    y: 1,
  };
  const b: Point = {
    x: 0,
    y: 0,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(1);
});
test("Compute the distance between 2 points", () => {
  const a: Point = {
    x: 2,
    y: 1,
  };
  const b: Point = {
    x: 5,
    y: 2,
  };

  return expect(computeDistanceBetween2Points(a, b)).toEqual(4);
});
