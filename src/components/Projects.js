import Technologies from "../components/Technologies";
import style from '../styles/Projects.module.css'

export default function Projects({
    title,
    description,
    technologies,
    link
}) {
    return (

        <div className='section'>
            <h3 className={style.title}>{title}</h3>
            <p className="transparent">{description}</p>

            <div className={style.divlink}>
                <a href={link} className={style.link}>Github project</a>
            </div>

            <Technologies
                technologies={technologies}

            />
        </div>
    )
}