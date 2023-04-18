import { FunctionComponent } from "react"
import tw from "twin.macro"

const ProjectWrapper = tw.div``

const Thumb = tw.div``

const Content = tw.div``

const Title = tw.h3``

const IconNewTab = tw.i`fa-solid fa-arrow-up-right-from-square`

const Description = tw.div``

const IconGithub = tw.i``

const Tech = tw.div``

const Project: FunctionComponent<{
    title: string
    description: string
    href: string
    github: string | null
    tech: string
}> = ({ title, description, href, github, tech }) => {
    return (
        <>
            <ProjectWrapper>
                <Thumb>
                    <img src="" alt="" />
                </Thumb>
                <Content>
                    <Title>
                        <span>{title}</span> <IconNewTab></IconNewTab>
                    </Title>
                    <Description>{description}</Description>
                    <a href={href} target="_blank" rel="noreferrer">
                        <IconGithub></IconGithub>
                    </a>
                    <Tech>{tech}</Tech>
                </Content>
            </ProjectWrapper>
        </>
    )
}

export default Project
