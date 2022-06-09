--3. feladat:

SELECT DISTINCT telepules FROM partnerek
ORDER BY telepules ASC;


--4. feladat:

SELECT COUNT("sorsz") AS "alkalmak" FROM partnerek
INNER JOIN kiszallitasok ON kiszallitasok.partnerid = partnerid
WHERE telepules = "Vác";


--5. feladat:

SELECT MAX(karton) AS "legtobb" FROM kiszallitasok
WHERE datum LIKE '%-05-%';


--6. feladat:

SELECT COUNT (id), telepules FROM partnerek
GROUP BY telepules
HAVING (id) > 1;


--7. feladat:

SELECT gyumolcslevek.gynev AS "ital", SUM(kiszallitasok.karton) * 6 AS "doboz" FROM gyumolcslevek
INNER JOIN kiszallitasok ON gyumolcslevek.id = kiszallitasok.gyumleid
GROUP BY gyumolcslevek.gynev
ORDER BY doboz DESC LIMIT 3;