export class Project {
    title: string;
    description: string;
    category_id: number;
    id: number;
    
    constructor({ id, title, description, category_id} : 
        { id: number, title: string, description: string, category_id: number}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category_id = category_id;
    }
}