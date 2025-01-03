export class ProjectService {
    port: any;

    constructor(port: number) {
        this.port = port;
    }

    getProjects = async (category: number) => {
        let url !: string;
        
        try {
            // if 0 is provided, all results are returned
            // category > 0
            // ? url = `http://127.0.0.1:${this.port}/api/projects/?category_id=${category}`
            // : url = `http://127.0.0.1:${this.port}/api/projects`
            url = `/data/projects.json`;
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            let projects = await response.json();
            if (response.ok) {
                if (category != 0) { 
                    let filteredProjects = projects.filter( (p: { category: number; }) => p.category === category );
                    return filteredProjects;
                }
            } else {
                throw new Error();
            }
        } catch (error) {
            console.log(error);
        }
    }
}