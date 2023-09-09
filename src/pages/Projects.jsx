import gif from '../assets/mainGif.jpg'
import Separator from '../components/Separator'
import ProjectCard from '../components/ProjectCard'
import FlyLondon from '../Projects/FlyLondon'

const Projects = () => {

    const projects = [
        {
            imageSrc: gif,
            title: 'FlyLondon',
            Popup: FlyLondon,
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
        {
            imageSrc: gif,
            title: 'Project 2',
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
        {
            imageSrc: gif,
            title: 'Project 3',
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
        {
            imageSrc: gif,
            title: 'Project 4',
            bulletPoints: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'],
        },
        // Add more project objects as needed
    ];


    return (
        //change grid settings

        <>
        <div className='w-4/5 pt-20 m-auto align-items-center text-center bg-color-black'> 
            <p clasName= 'm-auto text-5x3 mt-4 bg-color-black'> Projects </p>
            <Separator/>

        </div>
        <div className= ' w-4/5 m-auto pt-6 px-6 pb-6 grid grid-cols-3 grid-flow-row-dense gap-x-6 gap-y-6 justify-items-center bg-color-darker'>
            {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageSrc={project.imageSrc}
                        Popup={project.Popup}
                        title={project.title}
                        bulletPoints={project.bulletPoints}
                    />
                ))}
        </div>
        
        </>
    )
}

export default Projects