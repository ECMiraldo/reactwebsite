import CV from '../assets/CV.jpg'
import Separator from '../components/Separator';

const Resume = () => {
    return (
        <div className="w-4/5 pt-20 pb-5 m-auto grid grid-cols-12 gap-x-10 gap-y-6 bg-color-darker ">
            <div className='pt-10 col-start-1 col-span-3 align-items-center text-center'> 
                <p clasName= 'm-auto text-5x3 mt-4'> Contacts </p>
                 <Separator/>

            </div>
            <div className='pt-10 col-start-4 col-span-8 align-items-center text-center'> 
                <p clasName= 'm-auto text-5x3 mt-4'> Résumé </p>
                <Separator/>
                <img src={CV} className='pt-5' alt='loading...' />
            </div>
            
        </div>
    )

}


export default Resume;