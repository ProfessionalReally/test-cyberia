import axios from "axios";

export default axios.create({
    baseURL: `https://api.test.cyberia.studio/api/v1/`
});

export const PROJECTS_ENDPOINT = `projects`;
export const PROJECT_CATEGORIES_ENDPOINT = `project-categories`;