export function b1(x: Array<number>, y: Array<number>) {
  let arrX = x;
  let arrY = y;
  let sumX = 0;
  let sumX2 = 0;
  let sumY = 0;
  let sumY2 = 0;
  let sumXY = 0;
  let b1 = 0
  let promedioX = 0;
  let promedioY = 0;

  for (let i = 0; i < arrX.length; i++) {
    sumX = sumX + arrX[i];
    sumX2 = sumX2 + (arrX[i] * arrX[i])
  }
  for (let i = 0; i < arrY.length; i++) {
    sumY = sumY + arrY[i];
    sumY2 = sumY2 + (arrY[i] * arrY[i])
  }
  for (let i = 0; i < arrX.length; i++) {
    sumXY = sumXY + (arrX[i] * arrY[i]);
  }

  promedioX = ((sumX) / arrX.length);
  promedioY = ((sumY) / arrY.length);

  b1 = (((sumXY) - ((arrX.length) * (promedioX) * (promedioY))) / ((sumX2) - ((arrX.length) * ((promedioX) * promedioX))));

  return b1.toFixed(4);

}
