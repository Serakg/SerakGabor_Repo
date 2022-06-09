3. feladat:

SELECT DISTINCT telepules from partnerek
ORDER BY telepules ASC


4. feladat:

SELECT COUNT("partnerid") as alkalmak FROM kiszallitasok
WHERE partnerid = 27


5. feladat:

SELECT MAX(karton) as legtobb FROM kiszallitasok
WHERE datum LIKE '%-05-%'


6. feladat:

SELECT id, telepules FROM partnerek
HAVING COUNT(ID) > 1

