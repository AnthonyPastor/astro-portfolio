export interface LangInterface {
    seo: {
      "title": string,
      "description": string
    },
    menu: {
        "home": string,
        "experience": string,
        "projects": string,
        "about-me": string,
        "contact":string
    },
    home: {
      "name": string,
      "role": string,
      "status": {
        "available": string
      },
      "years_of_experience": string,
      "main_paragraph":string,
      "second_paragraph": string,
      "social": {
        "github": string,
        "linkedin": string,
        "mail": string,
        "download_cv":string
      }
    },
    experience: {
      "title": string,
      "at": string,
      "status": {
        "current": string
      },
      "work_1": {
        "date": string,
        "title"?: string,
        "company"?:string,
        "description_1"?: string,
        "description_2"?: string
      },
      "work_2": {
        "date": string,
        "title"?: string,
        "company"?:string,
        "description_1"?: string,
        "description_2"?: string
      },
      "work_3": {
        "date": string,
        "title"?: string,
        "company"?:string,
        "description_1"?: string,
        "description_2"?: string
      },
    },
    projects: {
      "title": string,
      "links": {
        "code": string,
        "web": string,
        "api": string,
      }
      "proj_1":{
        "description": string
      },
      "proj_2":{
        "description": string
      },
      "proj_3":{
        "description": string
      }
    },
    about: {
      "title": string,
      "first_paragraph": string,
      "second_paragraph": string,
      "third_paragraph": string,
      "forth_paragraph": string,
      "fifth_paragraph": string,
    }
    contact: {
      "title": string,
      "name": string,
      "email": string,
      "message": string,
      "send": string,
    }
  }