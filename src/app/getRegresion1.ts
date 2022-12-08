export function getRegresion1 (x: Array<number>, y: Array<number>) {
    let X = x;
    let Y = y;
    let AcumuladorX = 0;
    let AcumuladorX2 = 0;
    let AcumuladorY = 0;
    let AcumuladorY2 = 0;
    let Acumulador_XY = 0;
    let B1 = 0, B0 = 0;
    let PromedioX = 0;
    let PromedioY = 0;
    let Rxy = 0;
    let Resultados;

      for (let i = 0; i < X.length; i++) {
        AcumuladorX = AcumuladorX + X[i];
        AcumuladorX2 = AcumuladorX2 + (X[i] * X[i])
      }

      for (let i = 0; i < Y.length; i++) {
        AcumuladorY = AcumuladorY + Y[i];
        AcumuladorY2 = AcumuladorY2 + (Y[i] * Y[i])
      }

      for (let i = 0; i < X.length; i++) {
        Acumulador_XY = Acumulador_XY + (X[i] * Y[i]);
      }

      PromedioX = ((AcumuladorX) / X.length);
      PromedioY = ((AcumuladorY) / Y.length);

      B1 = ( ( (Acumulador_XY) - ( (X.length) * (PromedioX) * (PromedioY) ) ) / ( (AcumuladorX2) - ( (X.length) * ((PromedioX) * PromedioX) ) ) );
      B0 = ( (PromedioY) - ((B1) * (PromedioX)) )

      Rxy = Math.round((((X.length)*(Acumulador_XY)) - ((AcumuladorX)*(AcumuladorY))) / (Math.round((Math.sqrt(( ((X.length)*(AcumuladorX2)) - (AcumuladorX*AcumuladorX)) *  ( ((Y.length)*(AcumuladorY2)) - (AcumuladorY*AcumuladorY)) ) ) * 100)/100)*10000)/10000;

      Resultados = [B0, B1, Rxy];

      return Resultados;

}
