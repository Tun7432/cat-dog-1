// report.model.ts
export interface Report {
    owner_id: number;
    first_name: string;
    last_name: string;
    rabies_vaccine_history: number;
    province: string;
    district: string;
    sub_district: string;
    village_number: string; // Added this field
    total_owners: number;
    vaccinated_owners: number;
    vaccination_rate: number;
}
// report.convert.ts
export class Convert {
    public static toReport(json: string): Report[] {
        return JSON.parse(json);
    }

    public static reportToJson(value: Report[]): string {
        return JSON.stringify(value);
    }
}
