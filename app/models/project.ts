
export class Project {
    path: string;
    json: object;

    slug: string;
    name: string;
    type: string;
    description: string;
    keywords: Array<string>;
    homepage: string;
    license: string;
    authors: Array<object>;
    require: object;
    require_dev: object;
    autoload: object;
    autoload_dev: object;
    extra: object;

    constructor(path,json){
        this.path = path;
        this.json = json;

        this.slug = json.name.replace('/','--');
        this.name = json.name;
        this.type = json.type;
        this.description = json.description;
        this.keywords = json.keywords;
        this.homepage = json.homepage;
        this.license = json.license;
        this.authors = json.authors;
        this.require = json.require;
        this.require_dev = json['require-dev'];
        this.autoload = json.autoload;
        this.autoload_dev = json['autoload-dev'];
        this.extra = json.extra;
    }
}
