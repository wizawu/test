declare module reduxdb {
    function values(o: any): any[];
    function newObjectId(): string;
    interface CollectionOptions {
        index?: string;
    }
    interface CollectionUpdateOptions {
        upsert?: boolean;
        multi?: boolean;
    }
    class Collection {
        private __db__;
        private __name__;
        private __index__;
        private __data__;
        constructor(db: DB, name: string, options?: CollectionOptions);
        copyTo(newCollection: string): number;
        count(): number;
        drop(): boolean;
        find(query?: Object): Object[];
        findOne(query?: Object): Object;
        getDB(): DB;
        getFullName(): string;
        getIndexKeys(): Object[];
        getName(): string;
        insert(doc: any): void;
        remove(query?: Object): void;
        renameCollection(newName: string): Object;
        save(doc: Object): void;
        stats(): Object;
        update(query: Object, doc: Object, options?: CollectionUpdateOptions): void;
        __insert__(doc_: any): Object;
        __remove__(query: Object): Object;
        __save__(doc: Object): Object;
        __update__(query: Object, doc: Object, options?: CollectionUpdateOptions): Object;
    }
}
declare module reduxdb {
    class Map<T> {
        private __map__;
        size: number;
        forEach(callback: (value: T, key: string) => void): void;
        has(key: string): boolean;
        get(key: string): T;
        set(key: string, value: T): void;
        delete(key: string): void;
    }
    interface ReduxStore {
        dispatch(e: any): any;
        subscribe(f: any): any;
    }
    interface DB$ {
        [name: string]: Collection;
    }
    class DB {
        private __name__;
        __collections__: Map<Collection>;
        __store__: ReduxStore;
        constructor(name: string);
        createCollection(name: string, options?: CollectionOptions): Object;
        getCollection(name: string): Collection;
        getCollectionNames(): string[];
        getName(): string;
        stats(): Object;
        subscribe(func: any): any;
    }
}
declare module reduxdb {
    function use(name: string): DB;
}
declare var module: any;
