import { FunctionComponent } from "react"
import tw from "twin.macro"

const ProjectWrapper = tw.div`w-[400px] border-4 border-gray-400 rounded-xl`

const Thumb = tw.div`h-16 justify-center bg-center bg-no-repeat bg-cover rounded-lg`

const Content = tw.div`relative p-5`

const TitleLink = tw.a`absolute -top-6 -left-0 bg-gray-300 text-gray-900 pl-5 py-2 pr-5 rounded-r-xl`

const Title = tw.h3`text-lg group-hover:text-blue-600 font-semibold`

const IconNewTab = tw.i`text-sm ml-2 group-hover:text-blue-600 font-semibold`

const Description = tw.div``

const IconGithub = tw.i``

const TechStack = tw.div`flex flex-wrap justify-start items-start`

const Tech = tw.span`mr-2 mb-2`

// https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss

const Project: FunctionComponent<{
    thumbImg: string
    title: string
    description: string
    siteAddress: string
    github: string
    techs: string[]
}> = ({ thumbImg, title, description, siteAddress, github, techs }) => {
    console.log(techs)

    return (
        <>
            <ProjectWrapper>
                <Thumb
                    style={{ backgroundImage: `url(./imgs/${thumbImg})` }}
                ></Thumb>
                <Content>
                    <TitleLink
                        href={siteAddress}
                        target="_blank"
                        rel="noreferrer"
                        className="group"
                    >
                        <Title>
                            <span>{title}</span>{" "}
                            <IconNewTab className="fa-solid fa-arrow-up-right-from-square"></IconNewTab>
                        </Title>
                    </TitleLink>
                    <Description>{description}</Description>
                    <a href={github} target="_blank" rel="noreferrer">
                        <IconGithub className="fa-brands fa-github"></IconGithub>
                    </a>
                    <TechStack>
                        {techs.map((tech) => (
                            <Tech className={`tech ${tech.split(":")[0]}`}>
                                #{tech.split(":")[1]}
                            </Tech>
                        ))}
                    </TechStack>
                </Content>
            </ProjectWrapper>
        </>
    )
}

export default Project
