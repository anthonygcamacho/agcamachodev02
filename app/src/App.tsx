import tw from "twin.macro"
import Icon from "./Icon"

const AppSection = tw.div`flex`

const Sidebar = tw.div`flex flex-col items-center bg-gray-800 text-center p-20 w-[430px] h-full`

const ImgWrapper = tw.div`w-[270px] mb-[40px]`

const IconGroup = tw.div`mb-[14px]`

const Icons = tw.div`flex`

const TechStackGroup = tw.div`my-4`

const TechStackGroupHeader = tw.h3`text-white text-lg mb-2`

const TechStack = tw.div`flex flex-wrap justify-center`

const Tech = tw.span``

const Projects = tw.div``

const ProjectsHeader = tw.h2``

const Featured = tw.div``

const PastWork = tw.div``

function App() {
    const projects = [
        {
            type: "featured",
            thumbImg: "",
            title: "Movies API - Demo",
            description: "This is a demo app.",
            appLink: "https//movieapi.net",
            tech: [
                "NodeJS",
                "Express",
                "TypeScript",
                "AWS",
                "AWS - RDS",
                "AWS - Fargate",
                "Docker",
                "StencilJS",
            ],
        },
    ]

    const featuredProjects = projects.filter(
        (project) => project.type === "featured"
    )

    console.log(featuredProjects)

    const pastProjects = projects.filter((project) => project.type === "past")

    console.log(pastProjects)

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
                        <Tech className="tech bg-bgreact text-txtreact">
                            #React
                        </Tech>
                        <Tech className="tech bg-bgtypescript text-txttypescript">
                            #TypeScript
                        </Tech>
                        <Tech className="tech bg-bgtailwind text-txttailwind">
                            #Tailwind
                        </Tech>
                        <Tech className="tech bg-bgfirebase text-txtfirebase">
                            #Firebase
                        </Tech>
                    </TechStack>
                </TechStackGroup>
            </Sidebar>
            <Projects>
                <Featured>
                    <ProjectsHeader>Featured</ProjectsHeader>
                    {/* {featuredProjects} */}
                </Featured>
                <PastWork>
                    <ProjectsHeader>Pass Work</ProjectsHeader>
                    {/* {pastProjects} */}
                </PastWork>
            </Projects>
        </AppSection>
    )
}

export default App
