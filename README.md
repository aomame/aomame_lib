aomame_lib
==========

TypoScript Library and storage of JavaScript, CSS, jQuery and other Plugins


Install Guide (only available in german yet)


Grundinstallation:
------------------
1.
Extension ins TYPO3 Verzeichnis typo3conf/ext/ kopieren.

2.
Seitenbaum in TYPO3 anlegen

3. TYPO3 Rootpage festlegen
  - Seiteneigenschaften: Behaviour-Miscellaneous-Use as Root Page

4. TYPO3 Templatedatensatz auf der Rootpage erstellen. (Create Template for a new site)

5. TYPO3 Extansion Manager
 - Extension "Aomame" installieren

6. Automatisch generiertes TypoScript Setup ("Hello World") aus dem Templatedatensatz der Rootpage entfernen.

7. Eine Kopie des Verzeichnis "typo3conf/ext/aomame/template/aomame_example/" im selben Verzeichnis (mit neuem Namen) erstellen. 
	"typo3conf/ext/aomame/template/[...Projektname...]/"
	z.B. "typo3conf/ext/aomame/template/muellers_HiFi_produkte/"

8. TypoScript hinzufügen
	- Im TypoScript Template auf der Root Seite auf "Edit the whole template record" klicken und unter "Includes" das TypoScript "CSS Styled Content" einbinden.
	- Im Register "General" im Feld Setup und Constants folgendes einfügen.
		- Constants: 
			<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/constants.include.ts">
		- Setup: 
			<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/setup.include.ts">


9. [Die Seite sollte jetzt bereits im Frontend geladen werden. Allerdings müssen noch die Pfade der eingebundenen TypoScript Dateien angepasst werden, da im Moment noch die Dateien vom Projekt "aomame_example" geladen werden.]
	1. Ins Verzeichnis "typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/ wechseln.
	2. Die Datei "constants.include.ts" öffnen und alle Pfade anpassen
		- z.B. von <INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_example/main_template/ts/config/constants.aomame.ts">
			in
			   <INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/config/constants.aomame.ts">

	3. Dasselbe nun nochmals für die Datei "setup.include.ts" im selben Verzeichnis.

10. Die Datei "typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/config/constants.aomame.ts" öffnen.
	- Alle Pfade unter "aomame.path" entsprechend anpassen.
	- aomame.head.baseURL entsprechend anpassen.
		(für lokale instalationen z.B. http://lokalhost/myProject/)
		TYPO3 Cashe löschen und die Azeige im Frontend überprüfen. Falls die CSS Dateien nun nicht geladen werden, die baseURL überprüfen.


11. Benötigte Extensions im Extension Manager aus dem TER (TYPO3 Extension Repository) herunterladen und installieren.
	- Gridelements  (Static TypoScript im Template auf der Rootseite hinzufügen!)
	- phpMyAdmin
	- realURL
	- scriptmerger


12. SQL Resourcen laden
	- Ins Modul von phpMyAdmin wechseln und in der phpMyAdmin Menüauswahl auf "Import" klicken.
	- Alle SQL Files aus dem Verzeichnis "typo3conf\ext\aomame\template\00_global_source\sql" importieren.
	- Einen System Ordner mit dem Namen "Layouts" erstellen und die PID des neuen Ordners merken.
	- In phpMyAdmin die Tabelle "backend_layout" öffnen und für jeden Datensatz die PID des zuvor erstellten System Ordners eintragen.
	- Dasselbe für die Datensätze in der Tabelle "tx_gridelements_backend_layout".


13. 

xx. TYPO3 Cache leeren




Template/Konfiguration anpassen
--------------------------------

Backendlayouts erstellen:

Gridelement Layouts erstellen:

CSS anpassen:

TypoScript Config anpasen:

TypoScript Setups erstellen/anpassen:




Anpassungen:
---------------

Footer:

1. System Ordner "Footer" erstellen und eine Seite "Footer" darin anlegen.
2. Die Datei "typo3conf/ext/aomame/template/[...Projektname...]/main_template/ts/config/constants.aomame.ts" öffnen.
3. Unter aomame.footer.pid die ID der Seite "Footer" eintragen.
4. Mit der Extension Gridelement ein Layout für den Footer erstellen (oder eines der bereits vorhandenen Footer Layouts verwenden).
5. Auf der Footer Seite in der Spalte "Normal" ein Inhalt vom Typ Plugin:Gridelement eintragen und das zuvor erstellte Layout (oder ein bereits vorhandenes Footer Layout) einbinden.
6. Für jedes Feld im eingefügten Gridelement Layout ein Contentelement eintragen.
7. In der Spalte "Left" einen Footer für Mobile Seitenbesucher eintragen. Falls in der "mobile" Ansicht derselbe Footer verwendet werden soll, einfach den Normalen Footer kopieren und als Referenz in der Spalte "Left" einfügen.
8. TYPO3 Cache Löschen.
	- Hinweis: Nach Änderungen am Footer Content muss immer der TYPO3 Cache geleert werden. Dazu oben rechts im Backend auf "Clear page content cache" klicken.


5 
