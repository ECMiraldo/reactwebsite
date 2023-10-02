import CV from '../assets/CV.jpg'
import Separator from '../components/Separator';
import About from '../components/About'
import photo from '../assets/photo.jpg'
import pdfIcon from '../assets/pdfIcon.png'
import pdf from '../assets/CV-EduardoMiraldo.pdf'

const Resume = () => {

    const handleDownload = () => {
        const pdfUrl = '../assets/CV-EduardoMiraldo.pdf';
        window.open(pdfUrl, '_blank');
    };


    return (
        <div className="w-4/5 pt-20 pb-5 m-auto grid grid-cols-12 gap-x-7 gap-y-6 bg-color-darker ">
            <div className=' pl-7 pt-12 col-stat-1 col-span-4 align-items-center '>
         
                    <img src={photo} className= 'm-auto' alt="loading..." />
                    <div className='pt-5 pl-1'>Contact Me</div>
                    <Separator paddingX="0" />

            </div>
            
            <div className='pt-12 col-start-5 col-span-7 align-items-center text-center'> 
                <img src={CV} className='' alt='loading...' />
            </div>
            <a href={pdf} download="CV-EduardoMiraldo" target="_blank" rel="noreferrer">
                <button className='pt-11 col-start-12 flex justify-end col-span-1 pr-5 col-start-12 col-span-1 '
                    
                    download="FileName.pdf"> 
                    <img src={pdfIcon} className='' alt='loading...' />
                    <Separator paddingX={"0"}/>
                </button>
            </a>
        </div>
    )

}


export default Resume;