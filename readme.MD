Algorithm:

Input:

           p: Initial power of Abhimanyu.
           k: Vector of integers representing the power of enemies guarding each circle.
           a: Number of enemies Abhimanyu can skip.
           b: Number of times Abhimanyu can recharge his power.
Output:

           true: If Abhimanyu successfully crosses all circles.
           false: If Abhimanyu cannot cross all circles and is defeated.


Algorithm Steps:

    1. Initialization:
           Set n as the number of circles (i.e., the size of the vector k).
           Initialize max_power_idx to -1. This will store the index of the enemy with the maximum power.

    2. Find the Enemy with Maximum Power:

           Loop through each enemy in k (from index 0 to n-1):
           If max_power_idx is -1 or the current enemy's power (k[i]) is greater than the enemy at max_power_idx, update max_power_idx to i.
           This step helps identify the strongest enemy that Abhimanyu might skip.
    3. Traverse Each Circle:

           Loop through each circle i from 0 to n-1:
           3.1. Skip the Strongest Enemy if Possible:

              - If the current index `i` equals `max_power_idx` (i.e., the strongest enemy), and Abhimanyu has skip options left (`a > 0`):
              - Decrement `a` and continue to the next iteration (skip this enemy).

           3.2. Handle Regenerative Enemies (k[2](k3) and k[6](k7)):

              - If `i` equals `2` or `6` (the regenerative enemies):
              - First, Abhimanyu fights and loses power equal to `k[i]`.
              - The enemy regenerates with half of their initial power (`regenerated_power = k[i] / 2`).
            - Check if Abhimanyu's remaining power `p` is greater than or equal to the regenerated power:
              - If yes, subtract `regenerated_power` from `p` and continue.
              - If no, check if Abhimanyu has recharges left (`b > 0`):
              - If yes, use a recharge (`b--`), restore Abhimanyu's power to handle the regenerated enemy, and subtract the      regenerated power from `p`.
              - If no recharges are left, Abhimanyu loses, and the function returns `false`.

           3.3. Handle Normal Enemies:

              - If the current enemy `k[i]` is not regenerative and Abhimanyu's current power `p` is greater than or equal to `k[i]`:
              - Subtract `k[i]` from `p` and continue to the next circle.
              - If Abhimanyu's current power is less than the enemy's power `k[i]` and recharges are available (`b > 0`):
              - Use a recharge (`b--`), recharge Abhimanyu's power to at least match `k[i]`, and then subtract the enemy's power from `p`.
              - If Abhimanyu cannot defeat the current enemy and no recharges are left, he loses, and the function returns `false`.

    4. Successful Crossing: 

              If Abhimanyu successfully crosses all circles without losing, return true.



Dry Run Example-1:

Inputs:
            k1 = {3, 4, 1, 5, 8, 3, 5, 6, 4, 7, 2}
            p1 = 50 (initial power of Abhimanyu)
            a1 = 1 (number of enemies Abhimanyu can skip)
            b1 = 5 (number of times Abhimanyu can recharge)
Dry Run Steps:

     Find the Maximum Power Enemy:
      max_power_idx=-1.
     Traverse the vector k1:
         For index 0: k[0] = 3, so max_power_idx = 0.
         For index 1: k[1] = 4, so max_power_idx = 1.
         For index 2: k[2] = 1, so max_power_idx = 1.
         For index 3: k[3] = 5, so max_power_idx = 3.
         For index 4: k[4] = 8, so max_power_idx = 4.
         For index 5: k[5] = 3, so max_power_idx = 4.
         For index 6: k[6] = 5, so max_power_idx = 4.
         For index 7: k[7] = 6, so max_power_idx = 7.
         For index 8: k[8] = 4, so max_power_idx = 7.
         For index 9: k[9] = 7, so max_power_idx = 9.
         For index 10: k[10] = 2, so max_power_idx = 9.
         After traversing all elements, max_power_idx = 4 (enemy with power 8).
          

Traverse Each Circle:
       Circle 0: Enemy power k[0] = 3
           p1 = 50 > k[0].
           After fighting, p1 = 50 - 3 = 47.

       Circle 1: Enemy power k[1] = 4
           p1 = 47 > k[1].
           After fighting, p1 = 47 - 4 = 43.

       Circle 2(Enemy can regenerate power): Enemy power k[2] = 1
           p1 = 43 > k[2].
           After fighting, p1 = 43 - 1 = 42.
           regenerated_power = k[2]/2 = 0.5 = 0
           No change continue

       Circle 3: Enemy power k[3] = 5
           p1 = 42 > k[3].
           After fighting, p1 = 42 - 5 = 37.

       Circle 4: Enemy power k[4] = 8 (maximum power enemy)
          Abhimanyu skips this enemy (a1 = 1).
          a1 is decremented to 0.

       Circle 5: Enemy power k[5] = 3
          p1 = 37 > k[5].
          After fighting, p1 = 37 - 3 = 34.

       Circle 6(Enemy can regenerate power): 
          Enemy power k[6] = 5
          p1 = 34 > k[6].
          After fighting, p1 = 34 - 5 = 29.
          regenerated_power = k[6]/2 = 2
          After fighting, p1 = 29 - 2 = 27

       Circle 7: Enemy power k[7] = 6
          p1 = 27 > k[7].
       After fighting, p1 = 29 - 6 = 21.

       Circle 8: Enemy power k[8] = 4
          p1 = 21 > k[8].
          After fighting, p1 = 21 - 4 = 17.

       Circle 9: Enemy power k[9] = 7
         p1 = 17 > k[9].
         After fighting, p1 = 17 - 7 = 10.

       Circle 10: Enemy power k[10] = 2
         p1 = 10 > k[10].
         After fighting, p1 = 10 - 2 = 8.

Conclusion:

        Abhimanyu successfully crosses all circles, as his power remains sufficient after each battle, and he does not need to use any recharges.
        The function canCrossChakravyuha will return true ("Abhimanyu wins!").
    

    

Dry Run Example-2:
        Inputs:
               k2 = {3, 4, 5, 6, 7, 8, 9, 2, 3, 2, 4}
               p2 = 30 
               a2 = 1 
               b2 = 2 

   Dry Run Steps:

     Find the Maximum Power Enemy:  
        max_power_idx=-1.
        Traverse the vector k2(circles):
          For index 0: k[0] = 3, so max_power_idx = 0.
          For index 1: k[1] = 4, so max_power_idx = 1.
          For index 2: k[2] = 5, so max_power_idx = 2.
          For index 3: k[3] = 6, so max_power_idx = 3.
          For index 4: k[4] = 7, so max_power_idx = 4.
          For index 5: k[5] = 8, so max_power_idx = 5.
          For index 6: k[6] = 9, so max_power_idx = 6.
          Continue checking remaining indices but max_power_idx remains 6 as k[6] = 9 is the highest.


     Traverse Each Circle:
        Circle 0: Enemy power k[0] = 3
           p2 = 30 > k[0].
          After fighting, p2 = 30 - 3 = 27.

        Circle 1: Enemy power k[1] = 4
           p2 = 27 > k[1].
          After fighting, p2 = 27 - 4 = 23.

        Circle 2(Enemy can regenerate power): 
           Enemy power k[2] = 5
           p2 = 23 > k[2].
           After fighting, p2 = 23 - 5 = 18.
           regenerated_power = k[2]/2 = 2.
           After fighting  =  18 - 2 = 16

        Circle 3: Enemy power k[3] = 6
           p2 = 16 > k[3].
           After fighting, p2 = 16 - 6 = 10.

        Circle 4: Enemy power k[4] = 7
           p2 = 10 > k[4].
           After fighting, p2 = 10 - 7 = 3.

        Circle 5: Enemy power k[5] = 8
          p2 = 3 < k[5].
          Abhimanyu uses 1 recharge (b2 = 2 i.e, b2=1):
          Recharge power to max(p2, k[5]), so p2 = 8 (since k[5] = 8).
          After fighting, p2 = 8 - 8 = 0.

        Circle 6(Enemy can regenerate power): 
          Enemy power k[6] = 9
          p2 = 0 < k[6].
          Abhimanyu uses 1 more recharge (b2 = 1 i.e, b2 = 0):
          Recharge power to max(p2, k[6]), so p2 = 9 (since k[6] = 9).
          After fighting, p2 = 9 - 9 = 0.
          regenerated_power = k[6]/2 = 4.
          p2 < regenerated_power
          No recharges left, so Abhimanyu loses.

Conclusion:
          Abhimanyu cannot cross all circles because he runs out of recharges before being able to fight the enemy in circle 7. Thus, the function canCrossChakravyuha will return false.



