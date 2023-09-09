import photo from '../assets/mainGif.jpg'


const About = () => {
    return (
        <div className= 'w-4/5 pt-10 flex m-auto bg-color-darker'>


            <div className='w-1/2 px-20 m-auto'>
                <img src={photo} alt="loading..." />
            </div>


        
            <div className= 'w-1/2'>
                <h1 className= 'font-bold text-4xl' > About me </h1>
                <text>
                Hi there! I'm Eduardo, a game developer who discovered a passion for creating video-games in 2020. 
                Although I always loved gaming since I was young, I found the idea of building games quite daunting. 
                However, I decided to take a leap of faith and gave it a go. 
                <br></br>
                <br></br>
                I found it to be incredibly rewarding and it ignited my passion for programming and problem-solving. 
                While I started with game development, my interests have expanded to encompass a wide range of programming challenges.
                <br></br>
                <br></br>
                It's been a fulfilling journey so far and I'm excited to see where it takes me.
                </text>    
            </div>
        </div>
    )
}

export default About