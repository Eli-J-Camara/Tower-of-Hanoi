Development Plan:
1. Selecting disc
    a. We will need a click handler on each tower.
        -- tower.addEventListener('click',___)
    b. Select the top disc.
        -- Use (tower.lastElementChild) to find grab the disc that is at the top
2. move disc from one tower to the other
    a. Click handler on each tower
    b. See if the disc to drop is smaller the the top most disc on the tower
        -- tower.clientWidth
    c. If it is add the disc to the tower
3. Check to see if the game is solved
    a. The childElementCount property can help us determine how many discs are in a tower.

~ Elijah C.

