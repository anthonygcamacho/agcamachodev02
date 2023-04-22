import { useState, useEffect } from "react"
import tw from "twin.macro"
import Icon from "./components/Icon"
import Project from "./components/Project"
import FirebaseFirestoreService from "./services/FirebaseFirestore"
import ProjectsInterface from "./types/ProjectsInterface"

const AppSection = tw.div`flex`

const Sidebar = tw.div`flex flex-col items-center bg-gray-800 text-center p-20 w-[430px] h-full`

const ImgWrapper = tw.div`w-[270px] mb-[40px]`

const IconGroup = tw.div`mb-[14px]`

const Icons = tw.div`flex`

const TechStackGroup = tw.div`my-4`

const TechStackGroupHeader = tw.h3`text-white text-lg mb-2`

const TechStack = tw.div`flex flex-wrap justify-center`

const Tech = tw.span``

const Projects = tw.div`p-20`

const ProjectsHeader = tw.h2`text-3xl mb-8`

const ProjectGroups = tw.div`flex flex-wrap justify-start items-start gap-8 mb-16`

const Featured = tw.div``

const PastWork = tw.div``

function App() {
    const [featuredProjects, setFeaturedProjects] = useState<
        ProjectsInterface[]
    >([])
    const [pastProjects, setPastProjects] = useState<ProjectsInterface[]>([])

    useEffect(() => {
        FirebaseFirestoreService.readDocuments({ collection: "projects" })
            .then(async (results) => {
                let featuredProjects: ProjectsInterface[] = []
                let pastProjects: ProjectsInterface[] = []
                results.forEach((doc) => {
                    let project = doc.data() as ProjectsInterface
                    if (project.status === "published") {
                        project.type === "featured"
                            ? featuredProjects.push(project)
                            : pastProjects.push(project)
                    }
                })
                setFeaturedProjects(featuredProjects)
                setPastProjects(pastProjects)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <AppSection>
            <Sidebar>
                <ImgWrapper>
                    <img alt="" src="./imgs/selfi.png" />
                </ImgWrapper>
                <IconGroup>
                    <Icons>
                        <Icon
                            href="https://www.linkedin.com/in/anthonygcamacho"
                            faType="fa-brands"
                            faIcon="fa-linkedin-in"
                        />
                        <Icon
                            href="tel:8505299293"
                            faType="fa-solid"
                            faIcon="fa-phone"
                        />
                        <Icon
                            faType="fa-solid"
                            href="mailto:anthony.g.camacho@mail.com"
                            faIcon="fa-envelope"
                        />
                    </Icons>
                </IconGroup>
                <IconGroup>
                    <Icons>
                        <Icon
                            href="https://github.com/anthonygcamacho"
                            faType="fa-brands"
                            faIcon="fa-github"
                        />
                        <Icon
                            href="https://codepen.io/anthonygcamacho"
                            faType="fa-brands"
                            faIcon="fa-codepen"
                        />
                    </Icons>
                </IconGroup>
                <TechStackGroup>
                    <TechStackGroupHeader>
                        Portfolio Built-on:
                    </TechStackGroupHeader>
                    <TechStack>
                        <Tech className="mx-2 my-2 tech techReact">#React</Tech>
                        <Tech className="mx-2 my-2 tech techTypeScript">
                            #TypeScript
                        </Tech>
                        <Tech className="mx-2 my-2 tech techTailwind">
                            #Tailwind
                        </Tech>
                        <Tech className="mx-2 my-2 tech techFirebase">
                            #Firebase
                        </Tech>
                    </TechStack>
                </TechStackGroup>
            </Sidebar>
            <Projects>
                {featuredProjects.length > 0 ? (
                    <Featured>
                        <ProjectsHeader>Featured</ProjectsHeader>
                        <ProjectGroups>
                            {featuredProjects.map((project) => (
                                <Project
                                    key={project.title}
                                    thumbImg={project.thumbImg}
                                    title={project.title}
                                    description={project.description}
                                    siteAddress={project.siteAddress}
                                    githubRepo={project.githubRepo}
                                    techs={project.techs}
                                />
                            ))}
                        </ProjectGroups>
                    </Featured>
                ) : (
                    ""
                )}
                {pastProjects.length > 0 ? (
                    <PastWork>
                        <ProjectsHeader>Past Work</ProjectsHeader>
                        <ProjectGroups>
                            {pastProjects.map((project) => (
                                <Project
                                    key={project.title}
                                    thumbImg={project.thumbImg}
                                    title={project.title}
                                    description={project.description}
                                    siteAddress={project.siteAddress}
                                    githubRepo={project.githubRepo}
                                    techs={project.techs}
                                />
                            ))}
                        </ProjectGroups>
                    </PastWork>
                ) : (
                    ""
                )}
            </Projects>
        </AppSection>
    )
}

export default App
