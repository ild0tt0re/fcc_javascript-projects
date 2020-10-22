/** JavaScript Algorithms and Data Structures Projects: Cash Register */

const STATUS = ["OPEN", "INSUFFICIENT_FUNDS", "CLOSED"];
const CURRENCY_UNIT = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let changeArray = [];
  let finalCidAmount = 0;

  for (let i = cid.length - 1; i >= 0; i--) {
    if (CURRENCY_UNIT[i][1] <= change) {
      const quantityFloat = change / CURRENCY_UNIT[i][1];
      const currentUnitQuantityInt = parseInt(quantityFloat, 10);
      const currentUnitAmount = currentUnitQuantityInt * CURRENCY_UNIT[i][1];

      const remainingUnitInCid = cid[i][1] - currentUnitAmount;

      if (remainingUnitInCid >= 0) {
        finalCidAmount += remainingUnitInCid;
        const changeToAdd =
          CURRENCY_UNIT[i][0] == "PENNY"
            ? parseFloat(change.toFixed(2))
            : currentUnitAmount;
        changeArray.push([CURRENCY_UNIT[i][0], changeToAdd]);
        change -= changeToAdd;
      } else {
        changeArray.push([CURRENCY_UNIT[i][0], cid[i][1]]);
        change -= cid[i][1];
      }
    } else {
      changeArray.push([CURRENCY_UNIT[i][0], 0]);
    }
  }

  if (change > 0) {
    return {
      status: STATUS[1],
      change: [],
    };
  }

  if (finalCidAmount === 0) {
    return {
      status: STATUS[2],
      change: changeArray.reverse(),
    };
  }

  return {
    status: STATUS[0],
    change: changeArray.filter((item) => {
      return item[1] > 0;
    }),
  };
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
