export default function getBoxes({totalWeight, region}){
    let boxes = [];
    let weight = totalWeight / 1000;
    let xlQty = 0;
    let id = 1;
    let xlPrice = {
        "NCR": 820,
        "N. LUZON": 1220,
        "S. LUZON": 1220,
        "VISAYAS": 1420,
        "MINDANAO": 1420,
        "ISLANDER": 1420
    }
    while(weight >= 19 || weight > 10){
        xlQty++;
        weight -= 19;
    }

    if(xlQty > 0){
        boxes.push({
            id,
            qty: xlQty,
            name: "Kilobox XL",
            price: xlQty * xlPrice[region],
            boxFee: 60 * xlQty
        });
        id++;
    }

    let residue = residueBox({weight, region});
    if(residue){
        residue.id = id;
        boxes.push(residue);
    }
    
    return boxes;
} 

export function residueBox({weight, region}){
    if(weight <= 0)
        return null;

    if(weight > 5){
        let largePrice = {
            "NCR": 420,
            "N. LUZON": 620,
            "S. LUZON": 620,
            "VISAYAS": 720,
            "MINDANAO": 720,
            "ISLANDER": 720
        }
        return {
            name: "Kilobox Large",
            price: largePrice[region],
            qty: 1,
            boxFee: 35
        };
    }

    if(weight > 3){
        let mediumPrice = {
            "NCR": 220,
            "N. LUZON": 320,
            "S. LUZON": 320,
            "VISAYAS": 370,
            "MINDANAO": 370,
            "ISLANDER": 370
        }
        return {
            name: "Kilobox Medium",
            price: mediumPrice[region],
            qty: 1,
            boxFee: 20
        };
    }

    if(weight > 1){
        let smallPrice = {
            "NCR": 160,
            "N. LUZON": 190,
            "S. LUZON": 190,
            "VISAYAS": 200,
            "MINDANAO": 200,
            "ISLANDER": 200
        }
        return {
            name: "Kilobox Small",
            price: smallPrice[region],
            qty: 1,
            boxFee: 20
        };
    }

    let miniPrice = {
        "NCR": 120,
        "N. LUZON": 150,
        "S. LUZON": 150,
        "VISAYAS": 160,
        "MINDANAO": 160,
        "ISLANDER": 160
    };

    return {
        name: "Kilobox Mini",
        price: miniPrice[region],
        qty: 1,
        boxFee: 15
    };
}