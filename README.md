aomame_lib
==========

TYPO3 all in one template with Bootstrap;
Manage TypoScript Library, CSS, LESS, jQuery, Templates and Images


1. Features
2. Installation guide (only in german)
3. Set Template and Configuration (only in german)
4. Tutorials (only in german)




Features:
---------
	- One "main configuration file" to set all configs and components
	- Complete TYPO3 Configuration
	- TypoScript built for the (Twitter) "Bootstrap framework"
	- Responsive components
		- Navs: 
			- Breadcrumb
			- Firstlevel navs (choose superfish or bootstrap)
			- Secondlevel nav
			- Mobile nav
		- Fancyheader
		- Header
		- Content
		- Lightbox
		- Printview
		- Logo
		- Searchform
		- Footer
			- Mainfooter
			- Subfooter
			- Mobile Footer
	- Language settings
	- TS, JS, CSS, LESS File management
	- TS store for short access typoscripts
	- Pre-configured extensions
	- Pre-configured Backenlayouts and Gridelements
	- Flexible to integrate any TS and Plugins
	- Social Media Buttons






Installation guide: (only available in german yet)
---------------------------------------------------
1. Verzeichnis "00_global_source" und "aomame_prime" in einen Order "template" (oder ähnlich) ins TYPO3 Verzeichnis fileadmin/[template]/ -oder ein anderes beliebiges Verzeichnis- kopieren.

2. Seitenbaum in TYPO3 anlegen

3. TYPO3 Rootpage festlegen
   - Seiteneigenschaften > Behaviour > Miscellaneous > Use as Root Page

4. TYPO3 Templatedatensatz auf der Rootpage erstellen. (Create Template for a new site)

5. Automatisch generiertes TypoScript Setup ("Hello World") aus dem Templatedatensatz der Rootpage entfernen.

6. Verzeichnis "aomame_prime" umbenennen in ein eigenes Projekt. 
	z.B. "fileadmin/template/[...Projektname...]/"

7. TypoScript hinzufügen
	- Im TypoScript Template auf der TYPO3 Root Seite auf "Edit the whole template record" klicken und unter "Includes" das TypoScript "CSS Styled Content (css_styled_content)" und "Default TS (form)"einbinden.
	- Im Register "General" im Feld Setup und Constants folgendes einfÃ¼gen.
		- Constants: 
			\<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/[...Projektname...]/main_template/ts/constants.include.ts"\>
		
		- Setup: 
			\<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/[...Projektname...]/main_template/ts/setup.include.ts"\>


8. Jetzt müssen noch die Pfade der eingebundenen TypoScript Dateien angepasst werden, da im Moment noch die Dateien vom Projekt "aomame_prime" geladen werden.
	1. Ins Verzeichnis "fileadmin/template/[...Projektname...]/main_template/ts/ wechseln.
	2. Die Datei "constants.include.ts" öffnen und alle Pfade anpassen
		- z.B. von \<INCLUDE_TYPOSCRIPT: source="FILE: typo3conf/ext/aomame/template/aomame_prime/main_template/ts/config/constants.news.ts"\>
			in
			   \<INCLUDE_TYPOSCRIPT: source="FILE: fileadmin/template/[...Projektname...]/main_template/ts/config/constants.news.ts"\>

	3. Dasselbe nun nochmals für die Datei "setup.include.ts" im selben Verzeichnis.
	
	Tipp:  [ctrl]&[f] und die Editor funktion "Find" and "Replace" benutzen.

9. Die Datei "fileadmin/template/[...Projektname...]/main_template/ts/config/constants.aomame.ts" öffnen.
	- Globaler und lokaler Pfad unter "aomame.path.global" und "aomame.path.local" entsprechend anpassen (wie in Punkt 8).
	- Unter "aomame.head.base_url" die URL deines Projekts eintragen.
		(für lokale Instalationen z.B. http://localhost/[...Projektname...]/)
		
		Tipp: 	TYPO3 Cashe löschen und die Azeige im Frontend überprüfen. Falls die CSS Dateien nun nicht geladen werden, die baseURL prüfen.
		
		Tipp: 	TypoScript Fehler findet man hier leicht im TYPO3 Backend im Modul "Template" im "Template Analyzer": Hier mit der Browsersuche [ctrl]&[f] nach "Error" suchen- Somit findet man alle TS Files, 
				welche nicht eingebunden werden konnten ->Pfade überprüfen
		

10. Benötigte Extensions im Extension Manager aus dem TER (TYPO3 Extension Repository) herunterladen und installieren.
	- Gridelements
	- phpMyAdmin
	- realURL
	- scriptmerger
	
	optional:
	- news (nicht tt_news) 	- News System
	- ke_search				- Such System
	- datamints_feuser		- Frontend Registrierung


11. SQL Resourcen laden
	- Ins Modul von phpMyAdmin wechseln und in der phpMyAdmin Menüauswahl auf "Import" klicken.
	- Alle SQL Files aus dem Verzeichnis "typo3conf/ext/aomame/template/00_global_source/sql/" importieren.
	- Einen System Ordner mit dem Namen "Layouts" erstellen und die PID des neuen Ordners merken.
	- In phpMyAdmin die Tabelle "backend_layout" öffnen und für jeden Datensatz die PID des zuvor erstellten System Ordners eintragen.
	- Dasselbe für die Datensätze in der Tabelle "tx_gridelements_backend_layout".
	- Auf der TYPO3 Rootseite in den Seiteneigenschaften das Backendlayout 1. für diese Seite und 2. für alle Unterseiten zuweisen. 
		(Wird spätestens in version 2.0 automatisiert.)

12. TYPO3 Cache leeren






Set Template and Configuration (only in german)
-----------------------------------------------

1. Backendlayouts erstellen:
	- Im erstellten SysOrdner "Layouts" können weitere Backendlayouts erstellt werden.
	- Unter [Path/to/files]/00_global_source/ts/page/setup.content.ts das Objekt lib.content_layout entsprechend erweitern.
		Dazu die ID des neuen Backendlayouts als neuen CASE eintragen und die gewünschten Elemente zuweisen.
		Alle vorhandenen Elemente findet man im TYPO3 Backend unter Template->Object Browser -> Setup -> [lib]
		Falls nicht vorhanden einfach ein neues globales oder lokales Objekt erstellen (und in "[path/to/files/][Projectname]/main_template/ts/include.setup.ts" bzw. "include.constants.ts" einbinden!) und zuweisen.

2. Gridelement Layouts erstellen:
	- Im erstellten SysOrdner "Layouts" können weitere Gridelementlayouts erstellt (oder vorhandene geändert) werden.
	- im TypoScript unter "[path/to/files/]00_global_source/ts/ext/setup/setup.gridelement.ts" das neue Grid definieren.
		Dazu der ID des neuen Gridelement mit  "< default" die Grundeinstellung von Gridelement zuweisen
		Die einzelnen Columns anhand ihrer zugewiesenen ID definieren


3. CSS anpassen:
	Die Datei "[path/to/files/][projectname/]main_template/less/variable.less" und "custom.variable.less" öffnen.
		Die definierten CSS Werte anpassen.
		In "custom.variable.less" können weitere less Variablen hinzugefügt werden. Die hardcodierten Werte müssen natürlich in der betreffenden less Datei noch mit der neu erstellten Variable ersetzt werden 
		Alle "nicht-less-files" sind normale CSS Files. "[path/to/files/][projectname/]main_template/css" für alle lokalen Stylesheets. Globale Styles sind unter "[path/to/files/]00_global_source/css/" zu finden.
		
4. TypoScript Config anpasen:
	Die Hauptkonfiguration der Webseite findet man unter "[path/to/files/][projectname/]main_template/ts/config/constants.aomame.ts" 
	Hier alle Werte anpassen - Die bezeichnungen sind selbsterklärend und anhand ihres Pfades nachvollziebar.
		z.B.    aomame.page.header.active = 1  	--- bindet den Header auf der Webseite ein
		z.B.	aomame.page.footer.pid = 105 	--- Findet den Footer Inhalt auf der TYPO3 Seite mit der ID 105
		z.B		aomame.page.footer.colPos = 1	--- Liesst den Footer Inhalt aus der Spalte 1 aus 
		ausserdem lassen sich weitere Eigenschaften wie baseUrl, Sprachen und Einstellungen für Extensions hier konfigurieren u.v.m.
	




Tutorials:
------------

Set the footer:

1. System Ordner "Footer" erstellen und eine Seite "Footer" darin anlegen.
2. Mit der Extension Gridelement ein Layout für den Footer erstellen (oder eines der bereits vorhandenen Footer Layouts verwenden).
3. Auf der Footer Seite in einer Spalte ein Inhalt vom Typ Plugin:Gridelement eintragen und das zuvor erstellte Layout (oder ein bereits vorhandenes Footer Layout) einbinden.
4. Für jedes Feld im eingefÃ¼gten Gridelement Layout ein Contentelement eintragen.
5. In der einer weiteren Spalte einen Footer fÃ¼r Mobile Seitenbesucher eintragen. Falls in der "mobile" Ansicht derselbe Footer verwendet werden soll, kann dieser Schritt Ã¼bersprungen werden.
6. Die Datei "[path/to/file][...Projektname...]/main_template/ts/config/constants.aomame.ts" Ã¶ffnen.
7. Unter aomame.page.footer.mainfooter.pid und .colPos die ID der Seite "Footer" und die colPos des Footercontents eintragen. 
8. Unter aomame.page.footer.mobile_footer die PID und colPos des Mobile Footers angeben.
9. TYPO3 Cache löschen.
	Hinweis:	Nach Änderungen am Footer Content muss immer der TYPO3 Cache geleert werden, da der Inhalt aus dem SysFolder ausgelesen werden muss und das Ergebnis später vom Cache ausgelesen wird und nicht aus dem SysFolder. 
				Dazu oben rechts im Backend auf "Clear page content cache" klicken.
