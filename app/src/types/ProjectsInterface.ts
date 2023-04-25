export default interface ProjectsInterface {
    thumbImg: string
    date: {
        seconds: number
        nanoseconds: number
    }
    title: string
    description: string
    siteAddress: string
    githubRepo: string
    techs: string[]
    type?: string
    status?: string
}
