export enum workday {
    FullTime = "Full time",
    PartTime = "Part time"
}

export interface WorkExperience {
    name: string
    company: string
    urlCompany: string
    time: string
    workday: workday,
    workplace: string

}