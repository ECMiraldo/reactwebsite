import gif from '../assets/mainGif.jpg'
import Separator from '../components/Separator'
import ProjectCard from '../components/ProjectCard'
import FlyLondon from '../Projects/FlyLondon'
import DECENIOLAND from '../Projects/Decenioland'

const colors = require('tailwindcss/colors')



const Projects = () => {

    const projects = [
        {
            imageSrc: gif,
            title: 'FlyLondon',
            Popup: FlyLondon,
            tags: [
                { text: 'Professional', color: 'blue' },
                { text: 'Roblox Studio', color: 'green' },
                { text: 'Programming', color: 'red'},
                { text: 'World Building', color: 'indigo'}
            ],
            bulletPoints: ['Professional work', 'February 2022 - On going', 'Built using Roblox Studio'],
        },
        {
            imageSrc: gif,
            title: 'DECENIOLAND',
            Popup: DECENIOLAND,
            tags: [
                { text: 'Professional', color: 'blue'},
                { text: 'Roblox Studio', color: 'green' },
                { text: 'Programming', color: 'red'},
                { text: 'World Building', color: 'indigo'}
            ],
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
        {
            imageSrc: gif,
            title: 'Context Steering Behaviours',
            Popup: FlyLondon,
            tags: [
                { text: 'Personal', color: 'teal' },
                { text: 'Programming', color: 'red' },
                { text: 'Unity', color: 'orange' },
            ],
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
      
    ];


    return (
        //change grid settings

        <>
        <div className='w-4/5 flex flex-col m-auto items-center justify-center text-center bg-color-black'> 
            <p className= 'text-4xl m-auto font-montserrat  bg-color-black'> Projects </p>
             <Separator paddingX={'6'}/>

        </div>
        <div className= ' w-4/5 m-auto pt-6 px-6 pb-6 grid grid-cols-3 grid-flow-row-dense gap-x-6 gap-y-6 justify-items-center bg-color-darker'>
            {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={project.imageSrc}
                        Popup={project.Popup}
                        title={project.title}
                        tags={project.tags}
                        bulletPoints={project.bulletPoints}
                    />
                ))}
        </div>
        
        </>
    )
}

export default Projects