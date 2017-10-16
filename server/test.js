const inData = {
    1508: 7000,
    1509: 7000 + 1000,
    1510: 8000 + 33400 + 2500 + 6700,
    1511: 980 + 8700,
    1512: 6000,
    1601: 8700,
    1602: 15000,
    1603: 0,
    1604: 9000,
    1605: 8400 + 11700,
    1606: 9100,
    1607: 11000,
    1608: 10000,
    1609: 30000 + 5000,
    1610: 9000,
    1611: 9000,
    1612: 10000 + 4000,
    1701: 8000,
    1702: 8000 + 5000,
    1703: 0,
    1704: 0,
    1705: 10000 + 14000 + 16800,
    1706: 10000 + 5500 + 5500,
    1707: 6800,
    1708: 11900 + 8000,
    1709: 12000,
    1710: 0
}
const outData = {
    1508: 2000,
    1509: 3000,
    1510: 1000 + 398 + 1000 + 3700 + 10,
    1511: 1448 + 2000 + 2000,
    1512: 3005 + 2000,
    1601: 100 + 1000 + 1000,
    1602: 2000 + 1000 + 7614,
    1603: 200,
    1604: 500 + 10000 + 1000 + 50 + 50 + 1000,
    1605: 2000 + 1000 + 100 + 2000,
    1606: 100 + 200 + 1400 + 100 + 100 + 600 + 1000,
    1607: 1700 + 5000 + 5000 + 2000,
    1608: 5000 + 100 + 30000 + 7000,
    1609: 2387 + 500 + 2500 ,
    1610: 0,
    1611: 1000 + 2000 + 2000,
    1612: 2000 + 2000,
    1701: 300 + 4000 + 400 + 200,
    1702: 69000 + 55000,
    1703: 0,
    1704: 0,
    1705: 3000 + 1300 + 2128 + 10000,
    1706: 5500,
    1707: 7000,
    1708: 1000 + 2800 + 3730 + 300 + 1200,
    1709: 3500 + 3147 + 50000,
    1710: 4000 + 1800
}
var sumData = 0;
for (let i in inData) {
    sumData += inData[i] - outData[i];
    console.log (
        i + '转入：' + inData[i] + '元，',
        '转出：' + outData [i] + '元，',
        '净收入：' + (inData[i] - outData[i]) + '元，',
        '余额：' + sumData + '元'
    )
}
const jdData = {
    1509: 118,
    1510: 48 + 147 + 18 + 109,
    1511: 949 + 17 + 85 + 54 + 6 + 129,
    1512: 5764 + 179 + 110,
    1601: 0,
    1602: 93 + 28,
    1603: 329,
    1604: 129,
    1605: 63 + 38,
    1606: 7618 + 159,
    1607: 40 + 46 + 154 + 49 + 99,
    1608: 79 + 68 + 69,
    1609: 188 + 149,
    1610: 0,
    1611: 38,
    1612: 0,
    1701: 0,
    1702: 0,
    1703: 0,
    1704: 0,
    1705: 125
}
let jdSum = 0;
for (let i in jdData) {
    jdSum += jdData[i];
}
console.log('京东花费：', jdSum);

const taobaoData = {
    1710: 100 + 3 + 88,
    1709: 80 + 59 + 68 + 9 + 50 + 103 + 20 + 34 + 20,
    1708: 338 + 138 + 100 + 48 + 45 + 58 + 7,
    1707: 80 + 119 + 71 + 59 + 25 + 78 + 49 + 69 + 949 + 47,
    1706: 117 + 100 + 25 + 378,
    1705: 18 + 12 + 100 + 176,
    1704: 113 + 4 + 9 + 4,
    1703: 130 + 100 ,
    1702: 78 + 79 + 288 + 9 + 88,
    1701: 397 + 100 + 75 + 281 + 281 + 203,
    1612: 23 + 139 + 105 + 854 + 1083,
    1611: 108 + 111 + 53 + 884 + 70 + 298 + 1782 + 2700 + 9 ,
    1610: 69 + 39 + 215 + 168 + 128,
    1609: 40 + 100 + 158 + 100,
    1608: 45 + 220 + 750 + 100 + 76 ,
    1607: 75 + 50 + 78 + 20 + 100 + 13 ,
    1606: 124 + 223 + 118 + 14 + 7,
    1605: 2 + 100 + 39,
    1604: 188 + 100,
    1602: 92 + 100  + 100,
    1601: 100 + 112 + 100,
    1512: 62 + 39 + 24 + 169,
    1511: 120 + 100 + 94 + 239,
    1510: 109 + 8 + 210 + 80 + 58 + 15 + 15 + 19,
    1509: 1209 + 30 + 75,
    1508: 72,
    1507: 69 + 349,
    1506: 79 + 220,

}
let taobaoSum = 0;
for (let i in taobaoData) {
    taobaoSum += taobaoData[i];
}
console.log('淘宝花费：', taobaoSum);