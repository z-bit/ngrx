export interface User {
	fa: string;             // 20
	fi: string;             // 01
	pgr: string;            // Personengruppe
	bkz: string;            // Benuterkennzeichen in Care, SGZ
	pnr: string;            // Personalnummer in Care
	name: string;           // Name, Vorname
	abt: string;            // Abteilung
	art: string;            // Beschäftigten-Art aus Crae-Personalstamm
	austritt: string;       // Austrittsdatum, Format ??
	berechtigung: string;   // (NO | SB | LG | WH | BH | IT)
	clientIp: string;       // z.B. "10.150.147.43",
	clientPc: string;       // "it06.schmolck.de", anders als firma.client ??
	token: number;          // 222,
}