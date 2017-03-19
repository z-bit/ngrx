export interface Firma {
	fa: string;             // aus IP-Adresse
	fi: string;             // dto.
	fils: string[];         // alle Filialen der Firma
	client: string;         // Name des Client PC
	name: string;           // Name der Firma
	db: string;             // zum Bau der Bibliotheksliste z.B.: {db: 'SC'}
}