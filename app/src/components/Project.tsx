import { FunctionComponent, useEffect, useState } from "react"
import tw from "twin.macro"
import FirebaseStorageService from "../services/FirebaseStorage"

const ProjectWrapper = tw.div`w-[400px] border-4 border-gray-400 rounded-xl`

const Thumb = tw.div`h-24 justify-center bg-center bg-no-repeat bg-cover rounded-t-lg`

const Content = tw.div`relative p-5 rounded-b-lg bg-white`

const TitleLink = tw.a`absolute -top-6 -left-0 bg-gray-300 text-gray-900 pl-5 py-2 pr-5 rounded-r-xl`

const Title = tw.h3`text-lg group-hover:text-blue-600 font-semibold`

const IconNewTab = tw.i`text-sm ml-2 group-hover:text-blue-600 font-semibold`

const Description = tw.div`mt-4`

const IconGithub = tw.i``

const TechStack = tw.div`mt-4 flex flex-wrap justify-start items-start`

const Tech = tw.span`mr-2 mb-2`

const Project: FunctionComponent<{
    thumbImg: string
    title: string
    description: string
    siteAddress: string
    githubRepo: string
    techs: string[]
}> = ({ thumbImg, title, description, siteAddress, githubRepo, techs }) => {
    const [thumbImgURL, setthumbImgURL] = useState("")

    console.log(githubRepo)

    useEffect(() => {
        async function getDownloadURL() {
            let thumbImgURLResult = await FirebaseStorageService.getDownloadURL(
                thumbImg
            )
            setthumbImgURL(thumbImgURLResult)
        }
        if (!thumbImgURL) {
            getDownloadURL()
        }
    })

    return (
        <>
            <ProjectWrapper>
                <Thumb
                    style={{
                        backgroundImage: `url(${thumbImgURL})`,
                    }}
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
                    {githubRepo ? (
                        <a
                            href={githubRepo}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-4 text-blue-800 hover:text-blue-400"
                        >
                            <IconGithub className="fa-brands fa-github"></IconGithub>{" "}
                            Visit Repo{" "}
                        </a>
                    ) : (
                        <div className="mt-4">
                            <IconGithub className="fa-brands fa-github"></IconGithub>{" "}
                            Repo not available
                        </div>
                    )}

                    <TechStack>
                        {techs.sort().map((tech) => (
                            <Tech
                                key={tech}
                                className={`tech ${tech.split(":")[0]}`}
                            >
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
