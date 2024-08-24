#include <iostream>
#include <vector>

using namespace std;

bool canCrossChakravyuha(int p, vector<int> k, int a, int b) {
    int n = k.size();
    int max_power_idx = -1;  

    
    for (int i = 0; i < n; i++) {
        if (max_power_idx == -1 || k[i] > k[max_power_idx]) {
            max_power_idx = i;
        }
    }

   
    for (int i = 0; i < n; i++) {
        
        if (i == max_power_idx && a > 0) {
            a--;  
            continue;  
        }

         
        if ((i == 2 || i == 6) && p >= k[i]) {
            p -= k[i];  
            int regenerated_power = k[i] / 2;  

            
            if (p >= regenerated_power) {
                
                p -= regenerated_power;  
            } else {
                
                if (b > 0) {
                    b--;  
                    p = max(p, regenerated_power);  
                    p -= regenerated_power;  
                } else {
                    return false;  
                }
            }
        } 
        
        
        else if (p >= k[i]) {
            p -= k[i];  
        } else if (b > 0) {
            
            b--;  
            p = max(p, k[i]);  
            p -= k[i];  
        } else {
            return false;  
        }
    }
    
    return true;  
}

int main() {
    vector<int> k1 = {3, 4, 1, 5, 8, 3, 5, 6, 4, 7, 2};
    int p1 = 50, a1 = 1, b1 = 5;
    cout << (canCrossChakravyuha(p1, k1, a1, b1) ? "Abhimanyu wins!" : "Abhimanyu loses!") << endl;

    vector<int> k2 = {3, 4, 5, 6, 7, 8, 9, 2, 3, 2, 4};
    int p2 = 30, a2 = 1, b2 = 2;
    cout << (canCrossChakravyuha(p2, k2, a2, b2) ? "Abhimanyu wins!" : "Abhimanyu loses!") << endl;

    return 0;
}
