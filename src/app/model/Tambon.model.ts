// tambon.model.ts
export interface Tambon {
    id: number;
    zip_code: string;
    name_th: string;
    name_en: string;
    amphure_id: number;
    created_at: string;
    updated_at: string;
    deleted_at?: string; // Optional field
}


// tambon.convert.ts
export class Convert {
    public static toTambon(json: string): Tambon[] {
        return JSON.parse(json);
    }

    public static tambonToJson(value: Tambon[]): string {
        return JSON.stringify(value);
    }
}
