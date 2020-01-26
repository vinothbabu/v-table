import { Observable } from 'rxjs';

export class VTableColumnDefinition {
    public name: string = '';
    public value: string = '';
}

export class VTableOptions {
    public records: Observable<Array<any>>;
    public columns: Array<VTableColumnDefinition>;
    public config: VTableConfig;
}

export class VTableConfig {
    public sortBy: string = '';
    public sortDirection: string = 'desc';
}