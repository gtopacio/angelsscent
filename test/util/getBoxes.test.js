const { default: getBoxes } = require('../../util/getBoxes');

function random(min, max){
    return Math.random() * (max - min) + min;
}

describe('Kilobox Mini', () => {
    let boxName = "Kilobox Mini";
    let maxWeight = 1000;
    let minWeight = 0;
    let boxFee = 15;
    let prices = {
        "NCR": 120,
        "N. LUZON": 150,
        "S. LUZON": 150,
        "VISAYAS": 160,
        "MINDANAO": 160,
        "ISLANDER": 160
    };

    let totalWeight;
    let region;
    let boxes;
    
    describe('NCR', () => {
        region = "NCR";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('N. LUZON', () => {
        region = "N. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('S. LUZON', () => {
        region = "S. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('VISAYAS', () => {
        region = "VISAYAS";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('MINDANAO', () => {
        region = "MINDANAO";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('ISLANDER', () => {
        region = "ISLANDER";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });
});

describe('Kilobox Small', () => {
    let boxName = "Kilobox Small";
    let maxWeight = 3000;
    let minWeight = 1001;
    let boxFee = 20;
    let prices = {
        "NCR": 160,
        "N. LUZON": 190,
        "S. LUZON": 190,
        "VISAYAS": 200,
        "MINDANAO": 200,
        "ISLANDER": 200
    };

    let totalWeight;
    let region;
    let boxes;
    
    describe('NCR', () => {
        region = "NCR";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('N. LUZON', () => {
        region = "N. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('S. LUZON', () => {
        region = "S. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('VISAYAS', () => {
        region = "VISAYAS";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('MINDANAO', () => {
        region = "MINDANAO";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('ISLANDER', () => {
        region = "ISLANDER";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });
});

describe('Kilobox Medium', () => {
    let boxName = "Kilobox Medium";
    let maxWeight = 5000;
    let minWeight = 3001;
    let boxFee = 20;
    let prices = {
        "NCR": 220,
        "N. LUZON": 320,
        "S. LUZON": 320,
        "VISAYAS": 370,
        "MINDANAO": 370,
        "ISLANDER": 370
    };

    let totalWeight;
    let region;
    let boxes;
    
    describe('NCR', () => {
        region = "NCR";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('N. LUZON', () => {
        region = "N. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('S. LUZON', () => {
        region = "S. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('VISAYAS', () => {
        region = "VISAYAS";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('MINDANAO', () => {
        region = "MINDANAO";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('ISLANDER', () => {
        region = "ISLANDER";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });
});

describe('Kilobox Large', () => {
    let boxName = "Kilobox Large";
    let maxWeight = 10000;
    let minWeight = 5001;
    let boxFee = 35;
    let prices = {
        "NCR": 420,
        "N. LUZON": 620,
        "S. LUZON": 620,
        "VISAYAS": 720,
        "MINDANAO": 720,
        "ISLANDER": 720
    };

    let totalWeight;
    let region;
    let boxes;
    
    describe('NCR', () => {
        region = "NCR";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('N. LUZON', () => {
        region = "N. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('S. LUZON', () => {
        region = "S. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('VISAYAS', () => {
        region = "VISAYAS";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('MINDANAO', () => {
        region = "MINDANAO";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('ISLANDER', () => {
        region = "ISLANDER";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });
});

describe('Kilobox XL', () => {
    let boxName = "Kilobox XL";
    let maxWeight = 19000;
    let minWeight = 10001;
    let boxFee = 60;
    let prices = {
        "NCR": 820,
        "N. LUZON": 1220,
        "S. LUZON": 1220,
        "VISAYAS": 1420,
        "MINDANAO": 1420,
        "ISLANDER": 1420
    };

    let totalWeight;
    let region;
    let boxes;
    
    describe('NCR', () => {
        region = "NCR";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('N. LUZON', () => {
        region = "N. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('S. LUZON', () => {
        region = "S. LUZON";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('VISAYAS', () => {
        region = "VISAYAS";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('MINDANAO', () => {
        region = "MINDANAO";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });

    describe('ISLANDER', () => {
        region = "ISLANDER";
        test(`Weight is less than ${maxWeight} G and greater than ${minWeight} G`, () => {
            totalWeight = random(minWeight, maxWeight);
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is ${maxWeight} G`, () => {
            totalWeight = maxWeight;
            boxes = getBoxes({totalWeight, region});
            expect(boxes).toEqual([
                {
                    id: 1,
                    qty: 1,
                    name: boxName,
                    price: prices[region],
                    boxFee
                }
            ]);
        });
        test(`Weight is greater than ${maxWeight} G`, () => {
            totalWeight = random(maxWeight + 1, maxWeight + 1000);
            boxes = getBoxes({totalWeight, region});
            expect(boxes.name).not.toEqual(boxName);
        });
    });
});