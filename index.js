function canCrossChakravyuha(p, k, a, b) {
    const n = k.length;
    let maxPowerIdx = -1;

    
    for (let i = 0; i < n; i++) {
        if (maxPowerIdx === -1 || k[i] > k[maxPowerIdx]) {
            maxPowerIdx = i;
        }
    }

    
    for (let i = 0; i < n; i++) {
        
        if (i === maxPowerIdx && a > 0) {
            a--;
            continue;
        }

        
        if (i === 2 || i === 6) {
            if (p >= k[i]) {
                p -= k[i]; 
                const regeneratedPower = k[i] / 2; 

                if (p >= regeneratedPower) {
                    p -= regeneratedPower; 
                } else {
                    if (b > 0) {
                        b--;
                        p = Math.max(p, regeneratedPower); 
                        p -= regeneratedPower; 
                    } else {
                        return false; 
                    }
                }
            } else {
                if (b > 0) {
                    b--;
                    p = Math.max(p, k[i]); 
                    p -= k[i]; 
                } else {
                    return false; 
                }
            }
        } 
        
        else if (p >= k[i]) {
            p -= k[i]; 
        } else if (b > 0) {
            b--;
            p = Math.max(p, k[i]); 
            p -= k[i]; 
        } else {
            return false; 
        }
    }

    return true; 
}

const k1 = [3, 4, 1, 5, 8, 3, 5, 6, 4, 7, 2];
const p1 = 50, a1 = 1, b1 = 5;
console.log(canCrossChakravyuha(p1, k1, a1, b1) ? "Abhimanyu wins!" : "Abhimanyu loses!");

const k2 = [3, 4, 5, 6, 7, 8, 9, 2, 3, 2, 4];
const p2 = 30, a2 = 1, b2 = 2;
console.log(canCrossChakravyuha(p2, k2, a2, b2) ? "Abhimanyu wins!" : "Abhimanyu loses!");
