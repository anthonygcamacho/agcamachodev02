import { FunctionComponent } from "react"
import tw from "twin.macro"

const ProjectWrapper = tw.div`w-[400px] border-4 border-gray-600 rounded-xl`

const Thumb = tw.div`h-16 justify-center bg-center bg-no-repeat bg-cover rounded-lg`

const Content = tw.div`relative p-5`

const TitleLink = tw.a`absolute -top-6 -left-0 bg-gray-600 text-white pl-5 py-2 pr-5 rounded-r-xl hover:bg-gray-600`

const Title = tw.h3`text-lg group-hover:text-blue-400`

const IconNewTab = tw.i`text-sm ml-2 group-hover:text-blue-400`

const Description = tw.div``

const IconGithub = tw.i``

const Tech = tw.div``

const Project: FunctionComponent<{
    thumbImg: string
    title: string
    description: string
    siteAddress: string
    github: string
    tech: string
}> = ({ thumbImg, title, description, siteAddress, github, tech }) => {
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
                        <IconGithub></IconGithub>
                    </a>
                    <Tech>{tech}</Tech>
                </Content>
            </ProjectWrapper>
        </>
    )
}

export default Project
